import Typography from "components/Typography";
import UserDetailsBar from "components/UserDetailsBar";
import PageLayout from "layouts/PageLayout";

function MyWalletPage() {
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
