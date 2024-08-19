import Loader from "@/components/Loader";
import { toast } from "@/components/ui/use-toast";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useMutation, useQuery } from "@tanstack/react-query";
import Button from "components/Button";
import Paper from "components/Paper";
import Typography from "components/Typography";
import { useNavigate, useSearchParams } from "react-router-dom";

function ConfirmTransaction() {
  const [searchParams] = useSearchParams();
  const taskId = searchParams.get("taskId");
  const axiosPrivate = useAxiosPrivate();
  const { data: user } = useQuery<any>({ queryKey: ["user"], enabled: false });
  const navigate = useNavigate();
  const { refetch: refetchTask } = useQuery({
    queryKey: ["edit task", taskId],
    enabled: false,
  });

  const { mutate: updateTxStatus, isLoading: isUpdatingTxStatus } = useMutation(
    {
      mutationFn: async ({ txStatus }: { txStatus: "success" | "failed" }) => {
        const response = await axiosPrivate.post("/set-task-init-tx-status", {
          blockchainCreationStatus: txStatus,
          taskId,
        });
        await refetchTask();
        return response.data;
      },
      onSuccess: (data) => {
        const updatedTask: any = data.data;
        const isTxFailed = updatedTask.blockchainCreationStatus === "failed";

        toast({
          title: `Transaction ${isTxFailed ? "Failed" : "Successfull"}`,
          description: isTxFailed
            ? "Please try again"
            : "Your gig is on blockchain now",
        });

        navigate(`/profile/${user._id}/tasks`);
      },
    }
  );

  return (
    <Paper className="space-y-10 relative overflow-hidden">
      <div className="py-10">
        <Typography
          variant="3xl"
          className="font-bold opacity-80 text-center mb-3"
        >
          You are almost There!
        </Typography>

        <div className="mt-8 flex items-center space-x-4 justify-center">
          {/* <Button onClick={() => alert(taskId)} type="button" className="">
            Confirm Transaction
          </Button> */}
          <Button
            type="button"
            disabled={isUpdatingTxStatus}
            onClick={() => {
              updateTxStatus({ txStatus: "success" });
            }}
          >
            <span>Success Transaction</span>
            {isUpdatingTxStatus ? (
              <Loader.CircularSnake color="white" className="w-4 h-4 ml-2" />
            ) : null}
          </Button>
          <Button
            type="button"
            disabled={isUpdatingTxStatus}
            onClick={() => {
              updateTxStatus({ txStatus: "failed" });
            }}
          >
            <span>Fail Transaction</span>
            {isUpdatingTxStatus ? (
              <Loader.CircularSnake color="white" className="w-4 h-4 ml-2" />
            ) : null}
          </Button>
        </div>
      </div>
    </Paper>
  );
}

export default ConfirmTransaction;
