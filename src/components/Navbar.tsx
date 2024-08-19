import { Link, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { FaBell, FaChevronDown, FaListOl } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { MdContentPasteSearch, MdOutlineDashboard } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { CircleUser, LayoutList } from "lucide-react";
import ProfileDropdown, {
  NavDropdownMenuContent,
  NavDropdownMenuItem,
  NavIconText,
} from "./ProfileDropdown";
import Button from "./Button";
import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";
import Typography from "./Typography";
import {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "./DropdownMenu";
import AuthGuard from "./AuthGuard";
import MediaQueryWrapper from "./MediaQueryWrapper";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./Sheet";

function HomeDropdown() {
  const { t } = useTranslation();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button type="button" className="lg:h-navbar-height">
          {t("Home")}{" "}
          <FaChevronDown className="inline-block text-[.8em] opacity-70 ml-[.2em]" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <NavDropdownMenuContent align="start">
          <NavDropdownMenuItem>
            <NavIconText
              title="Home Page"
              LInk="/"
              icon={<MdOutlineDashboard className="text-[1.2em]" />}
            />
          </NavDropdownMenuItem>

          <NavDropdownMenuItem>
            <NavIconText
              title="Find Freelancer"
              icon={<MdContentPasteSearch className="text-[1.2em]" />}
            />
          </NavDropdownMenuItem>
        </NavDropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}

function MyJobsDropdown() {
  const { t } = useTranslation();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button type="button" className="lg:h-navbar-height">
          {t("My Jobs")}{" "}
          <FaChevronDown className="inline-block text-[.8em] opacity-70 ml-[.2em]" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <NavDropdownMenuContent align="start">
          <NavDropdownMenuItem>
            <NavIconText
              title="Saved Jobs"
              LInk="/saved-job"
              icon={<FaListOl className="text-[1.2em]" />}
            />
          </NavDropdownMenuItem>

          <NavDropdownMenuItem>
            <NavIconText
              title="Applied Jobs"
              LInk="/my-proposals"
              icon={<FaListCheck className="text-[1.2em]" />}
            />
          </NavDropdownMenuItem>
        </NavDropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}

function DashboardDropdown() {
  const queryClient = useQueryClient();
  const user: any = queryClient.getQueryData(["user"]);
  const navigate = useNavigate();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button type="button" className="lg:h-navbar-height">
          Dashboard
          <FaChevronDown className="inline-block text-[.8em] opacity-70 ml-[.2em]" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <NavDropdownMenuContent align="start">
          <NavDropdownMenuItem
            onSelect={() => navigate(`/profile/${user._id}/tasks`)}
          >
            <NavIconText
              title="Tasks"
              icon={<LayoutList className="w-5 h-5" />}
            />
          </NavDropdownMenuItem>

          <NavDropdownMenuItem
            onSelect={() => navigate(`/profile/${user._id}`)}
          >
            <NavIconText
              title="Profile Overview"
              icon={<CircleUser className="w-5 h-5" />}
            />
          </NavDropdownMenuItem>
        </NavDropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}

// function LangSelectorComp({ onClick }) {
//   return (
//     <LanguageSelectorPopup>
//       <button onClick={onClick} className="text-xl opacity-80">
//         <FaGlobe />
//       </button>
//     </LanguageSelectorPopup>
//   );
// }

function NavSidebar() {
  const { t } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <SheetTrigger asChild>
        <button type="button" className="text-3xl opacity-80">
          <IoMenu />
        </button>
      </SheetTrigger>
      <SheetContent className="w-[16rem] p-8">
        <div className="flex items-center justify-between mb-7">
          <Logo className="relative bottom-1" />
          <SheetClose />
        </div>

        <div className="flex flex-col items-start space-y-3 mb-6">
          <AuthGuard>
            <MyJobsDropdown />
            <HomeDropdown />
          </AuthGuard>
          <Typography asChild>
            <Link to="/">Find Jobs</Link>
          </Typography>
          <Typography asChild>
            <Link to="https://nft.deelance.com/" target="_blank">
              {t("NFTS")}
            </Link>
          </Typography>
        </div>

        <div className="flex items-center space-x-4 [&>button]:flex-1 [&>button]:flex [&>button]:justify-center [&>button]:py-2 [&>button]:rounded-md [&>button]:bg-woodsmoke-200 dark:[&>button]:bg-woodsmoke-600">
          {/* <LangSelectorComp /> */}
          <ThemeSwitch className="text-xl opacity-80" />
        </div>
      </SheetContent>
    </Sheet>
  );
}

function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={twMerge(
        "bg-white dark:bg-woodsmoke-950  shadow-md fixed top-0 left-0 w-full z-[100]",
        className
      )}
    >
      {/* mr-[calc(-1*(100vw-100%))] */}
      <div className="container-wrapper h-navbar-height flex items-center justify-between">
        <Link to="/">
          <Logo className="h-8" />
        </Link>

        <div className="flex items-center [&>*:not(:last-child)]:me-8">
          <MediaQueryWrapper breakpoint="lg">
            <AuthGuard>
              <HomeDropdown />
            </AuthGuard>

            <Typography>Find Jobs</Typography>

            <AuthGuard>
              <MyJobsDropdown />
            </AuthGuard>

            <Typography asChild>
              <Link to="https://nft.deelance.com/" target="_blank">
                NFTS
              </Link>
            </Typography>

            <AuthGuard>
              <DashboardDropdown />
            </AuthGuard>
          </MediaQueryWrapper>

          <div className="pl-5 flex items-center space-x-4">
            <MediaQueryWrapper breakpoint="lg">
              <AuthGuard>
                <Link to="/inbox" className="text-2xl opacity-80">
                  <IoIosMail />
                </Link>

                <Link to="/notification" className="text-xl opacity-80">
                  <FaBell />
                </Link>
              </AuthGuard>
            </MediaQueryWrapper>

            <AuthGuard>
              <div className="pl-2">
                <ProfileDropdown />
              </div>
            </AuthGuard>

            <AuthGuard inverse>
              <Button asChild variant="simple" className="h-auto px-0 pr-1">
                <Link to="/login">Login</Link>
              </Button>
              <Button className="h-[2.2em] max-lg:text-sm" asChild>
                <Link to="/signup">Signup</Link>
              </Button>
            </AuthGuard>

            <MediaQueryWrapper breakpoint="lg">
              <ThemeSwitch className="text-xl opacity-80" />
            </MediaQueryWrapper>

            <MediaQueryWrapper breakpoint="lg" inverse>
              <NavSidebar />
            </MediaQueryWrapper>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;