import Avatar from "components/Avatar";
import Button from "components/Button";
import Paper from "components/Paper";
import Typography from "components/Typography";
import { MdDone } from "react-icons/md";

const Card = ({ title, buttonProps }) => {
  return (
    <div>
      <Paper className="rounded-b-none">
        <div className="w-fit mx-auto mb-2">
          <Avatar size={60} />
        </div>
        <Typography className="text-center font-semibold mb-5" variant="xl">
          {title}
        </Typography>

        <div className="space-y-2">
          {new Array(4).fill("").map((_, i) => (
            <Typography
              className="flex"
              key={i}
              startIcon={
                <MdDone className="mr-[.4em] text-green-haze-400 text-[1.1em] relative top-[.1em] flex-shrink-0" />
              }
            >
              <span>Lorem ipsum dolor, sit amet consectetur</span>
            </Typography>
          ))}
        </div>
      </Paper>
      <Paper className="rounded-t-none bg-woodsmoke-200 dark:bg-woodsmoke-700">
        <Button className="w-full" {...buttonProps}>
          Subscribe
        </Button>
      </Paper>
    </div>
  );
};

function SelectSubscription() {
  return (
    <div>
      <Typography variant="2xl" className="font-semibold mb-6">
        Select NFT Subscription
      </Typography>

      <main className="grid grid-cols-3 gap-8">
        <Card title="General" buttonProps={{ variant: "outlined" }} />
        <Card title="Premium" buttonProps={{ variant: "contained" }} />
        <Card title="Pro" buttonProps={{ variant: "outlined" }} />
      </main>
    </div>
  );
}

export default SelectSubscription;