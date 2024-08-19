import Button from "components/Button";
import TabBar from "components/TabBar";
import TabButton from "components/TabButton";
import Table from "components/Table";
import Typography from "components/Typography";
import PageLayout from "layouts/PageLayout";
import { useState } from "react";

const tr = [
  <Typography key="item" variant="base">
    #FO716DE452B48
  </Typography>,
  <Typography key="item" variant="base">
    Setup and customize wordpress...
  </Typography>,
  <Typography key="item" variant="base">
    01
  </Typography>,
  <Typography key="item" variant="base">
    5 Days
  </Typography>,
  <Typography key="item" variant="base">
    $100
  </Typography>,
  <Button key="item" className="w-full">
    View Order
  </Button>,
];

const tabs = [
  "Active Orders",
  "Pending order",
  "Completed Orders",
  "Cancelled Orders",
];

function MyOrdersPage() {
  const [tab, setTab] = useState(tabs[0]);

  return (
    <PageLayout>
      <div className="container-wrapper">
        <Typography variant="2xl" className="font-semibold mb-6">
          My Orders
        </Typography>

        <TabBar>
          {tabs.map((text, i) => (
            <TabButton
              key={i}
              active={text === tab}
              onClick={() => setTab(text)}
            >
              {text}
            </TabButton>
          ))}
        </TabBar>

        <div className="mt-8">
          <Table
            headings={[
              "Order Number",
              "Item",
              "Quantity",
              "Duration",
              "Amount",
              "",
            ]}
            tableItems={new Array(2 * (tabs.indexOf(tab) + 1))
              .fill("")
              .map(() => tr)}
          ></Table>
        </div>
      </div>
    </PageLayout>
  );
}

export default MyOrdersPage;
