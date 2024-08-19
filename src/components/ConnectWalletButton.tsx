import { useWeb3Modal } from "@web3modal/wagmi/react";
import Button from "./Button";
import { useAccount } from "wagmi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function ConnectWalletButton({ children, ...props }) {
  const { t } = useTranslation();

  const { open } = useWeb3Modal();
  const { isConnecting, isConnected } = useAccount();

  const handleClick = () => {
    if (isConnected) {
      open({ view: "Account" });

      return;
    }

    open();
  };

  return (
    <Button
      disabled={isConnecting}
      onClick={handleClick}
      loading={isConnecting}
      startIcon={
        isConnected ? <MdAccountBalanceWallet className="text-[1.4em]" /> : null
      }
      {...props}
    >
      {isConnected ? t("Connected") : children}
    </Button>
  );
}
