import { useEffect } from "react";
import Button from "./Button";
import ConnectWalletButton from "./ConnectWalletButton";
import CopyToClipboardButton from "./CopyToClipboardButton";
import Typography from "./Typography";
import { BsKey } from "react-icons/bs";
import { useAccount, useBalance, useContractReads } from "wagmi";
import { useState } from "react";
import { useRef } from "react";
import contractAbi from "config/contract-abi.json";
import axios from "axios";
import { useTranslation } from "react-i18next";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";

const NftCard = ({ text, img }) => {
  return (
    <div>
      <img src={img} className="w-full" alt="" />
      <Typography className="text-center mt-2">{text}</Typography>
    </div>
  );
};

const MyWallet = () => {
  const { t } = useTranslation();
  const { address, isConnected } = useAccount();
  const { data } = useBalance({ address });
  const [ethPrice, setEthPrice] = useState("");
  const effectRan = useRef(false);
  const { data: balanceOfNfts, isFetching } = useContractReads({
    enabled: address,
    contracts: [
      {
        abi: contractAbi,
        address: "0x490Fa9Dc69D05e754EE8a9615cb7ad781A51cB36",
        functionName: "balanceOf",
        args: ["0xb7f5D500a33B199d20a22b6e93c73f8dCbac5EA9", 0],
      },
      {
        abi: contractAbi,
        address: "0x490Fa9Dc69D05e754EE8a9615cb7ad781A51cB36",
        functionName: "balanceOf",
        args: ["0xb7f5D500a33B199d20a22b6e93c73f8dCbac5EA9", 1],
      },
      {
        abi: contractAbi,
        address: "0x490Fa9Dc69D05e754EE8a9615cb7ad781A51cB36",
        functionName: "balanceOf",
        args: ["0xb7f5D500a33B199d20a22b6e93c73f8dCbac5EA9", 2],
      },
    ],
  });

  useEffect(() => {
    if (effectRan.current || import.meta.env.MODE !== "development") {
      axios
        .get(
          "https://api.etherscan.io/api?module=stats&action=ethprice&apikey=YourApiKeyToken"
        )
        .then((res) => {
          setEthPrice(Number(res.data.result.ethusd).toFixed(2));
        });
    }

    return () => (effectRan.current = true);
  }, []);

  return (
    <div>
      <Typography className="font-bold mb-7">{t("My Wallet")}</Typography>

      {isConnected ? (
        <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center mb-5">
          <div>
            <BsKey className="text-3xl flex" />
          </div>
          <Typography
            variant="sm"
            className="text-black/60 dark:text-white/60 bg-woodsmoke-200 dark:bg-woodsmoke-700 py-1 px-2 rounded-lg text-ellipsis w-full min-w-full overflow-hidden"
          >
            {address}
          </Typography>

          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <CopyToClipboardButton
                    className="flex text-xl justify-end"
                    text={address}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent sideOffset={10}>Copy Address</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ) : null}

      <div className="bg-woodsmoke-100 dark:bg-woodsmoke-950 rounded-md py-2 px-4 grid grid-cols-2 justify-between gap-y-2 mb-7">
        <Typography>$ETH {t("Price")}:</Typography>
        <Typography className="text-right text-black/60 dark:text-white/60">
          = ${ethPrice} USD
        </Typography>

        {isConnected && data ? (
          <>
            <Typography>{t("Your Balance:")}</Typography>
            <Typography className="text-right text-black/60 dark:text-white/60">
              {Number(data.formatted).toFixed(4)} {data.symbol}
            </Typography>
          </>
        ) : null}
      </div>

      {address ? (
        <>
          <Typography className="font-bold mb-5">{t("Your NFT's")}</Typography>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <NftCard
              img="/images/nfts/general.png"
              text={isFetching ? "loading..." : Number(balanceOfNfts[0].result)}
            />
            <NftCard
              img="/images/nfts/premium.png"
              text={isFetching ? "loading..." : Number(balanceOfNfts[1].result)}
            />
            <NftCard
              img="/images/nfts/pro.png"
              text={isFetching ? "loading..." : Number(balanceOfNfts[2].result)}
            />
          </div>
        </>
      ) : null}

      {/* <Button
          className="w-fit flex mx-auto p-0 h-auto text-green-haze-600"
          variant="simple"
        >
          Disconnect your wallet
        </Button> */}

      <div className="grid grid-cols-2 gap-4">
        <ConnectWalletButton className="flex-1">
          {t("Connect Wallet")}
        </ConnectWalletButton>

        <Button
          as="a"
          target="_blank"
          href="https://nft.deelance.com"
          variant="outlined"
          className="flex-1"
        >
          {t("Buy NFT's")}
        </Button>
      </div>
    </div>
  );
};
export default MyWallet;
