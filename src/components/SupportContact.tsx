import Typography from "./Typography";
import { MdMarkUnreadChatAlt } from "react-icons/md";
import Button from "./Button";
import { BsFillChatFill } from "react-icons/bs";
import Paper from "./Paper";

function SupportContact({ className }) {
  return (
    <Paper className={className}>
      <Typography variant="lg" className="mb-5 font-medium">
        Support Contact
      </Typography>

      <div className="space-y-4">
        <Button
          variant="simple"
          className="h-auto px-0 text-left items-start"
          startIcon={
            <BsFillChatFill className="text-green-haze-500 relative top-[.2em]" />
          }
        >
          FAQs
          <br />
          <span className="opacity-60 text-[.9em]">Find needed answers</span>
        </Button>

        <div>
          <Typography
            startIcon={
              <MdMarkUnreadChatAlt className="text-green-haze-500 inline-block align-middle mr-[.2em]" />
            }
          >
            <span className="inline-block align-middle">
              Resolve Order Issues.
            </span>
          </Typography>

          <div className="pl-5">
            <Button
              variant="warning-contained"
              className="mt-4 px-0 max-w-[10rem] w-full"
              size="base"
            >
              Dispute
            </Button>
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default SupportContact;