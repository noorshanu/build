import TabBar from "components/TabBar";
import TabButton from "components/TabButton";
import Typography from "components/Typography";
import UserDetailsBar from "components/UserDetailsBar";
import PageLayout from "layouts/PageLayout";
import { useState } from "react";
import Overview from "sections/MyWalletPage/Overview";
import TotalNfts from "sections/MyWalletPage/TotalNfts";
import TxHistory from "sections/MyWalletPage/TxHistory";

const tabs = ["Overview", "Total NFTs", "Transaction History"];

function MyWalletPage() {
  const [tab, setTab] = useState(tabs[0]);

  return (
    <PageLayout>
      <div className="container-wrapper">
        <Typography variant="2xl" className="font-semibold mb-5">
          My Wallet
        </Typography>

        {/* <TabBar>
          {tabs.map((text, i) => (
            <TabButton
              key={i}
              active={tab === text}
              onClick={() => setTab(text)}
            >
              {text}
            </TabButton>
          ))}
        </TabBar> */}

        <main className="mt-7">
          <UserDetailsBar className="grid lg:grid-cols-2 gap-5 space-y-0" />

          {/* {tab === tabs[0] ? <Overview /> : null}

          {tab === tabs[1] ? <TotalNfts /> : null}

          {tab === tabs[2] ? <TxHistory /> : null} */}
        </main>
      </div>
    </PageLayout>
  );
}

export default MyWalletPage;
