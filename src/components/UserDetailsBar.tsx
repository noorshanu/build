import { useTranslation } from "react-i18next";
import { cn } from "utils/cn";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "Providers/AuthContextProvider";
import Typography from "./Typography";
import CopyToClipboardButton from "./CopyToClipboardButton";
import VisibilityChanger from "./VisibilityChanger";
import EditableMetaverseId from "./EditableMetaverseId";
import MyWallet from "./MyWallet";
import ProfileProgress from "./ProfileProgress";

function InviteFriends() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const user: any = queryClient.getQueryData(["user"]);
  const currentDomain = window.location.origin;
  const inviteLink = `${currentDomain}/signup?referrer=${user?._id}`;
  return (
    <div>
      <Typography className="font-bold mb-7">
        {t("Invite friends, earn 100 points")}
      </Typography>

      <Typography className="py-2 px-5 bg-woodsmoke-100 dark:bg-woodsmoke-950 rounded text-black/60 dark:text-white/60 overflow-hidden min-w-full text-ellipsis relative pr-14">
        <span className="z-10 break-all">{inviteLink}</span>

        <div className="absolute top-1/2 right-4 -translate-y-1/2 z-20 flex">
          <CopyToClipboardButton className="text-xl" text={inviteLink} />
        </div>
      </Typography>
    </div>
  );
}

function UserDetailsBar({ className }: { className?: string }) {
  const queryClient = useQueryClient();
  const { userId } = useParams();
  const user: any = queryClient.getQueryData(["user"]);
  const profile: any = queryClient.getQueryData(["profile", userId]);
  const { isToken } = useContext(AuthContext);
  const isUser = isToken ? profile._id === user._id : false;

  return (
    <div
      className={cn(
        "[&>*]:shadow [&>*]:bg-white dark:[&>*]:bg-woodsmoke-900 [&>*]:rounded-lg [&>*]:p-6 space-y-4",
        className
      )}
    >
      {isUser ? <ProfileProgress /> : null}
      <MyWallet />
      <InviteFriends />
      {/* <KeepOnEarning /> */}
      <VisibilityChanger />
      <EditableMetaverseId />
    </div>
  );
}

export default UserDetailsBar;
