import { twMerge } from "tailwind-merge";

function SocialAuthIcon({ children, className }) {
  return (
    <a
      href="/"
      className={twMerge(
        "text-green-haze-600 text-xl border border-black dark:border-white rounded-full p-3",
        className
      )}
    >
      {children}
    </a>
  );
}

export default SocialAuthIcon;
