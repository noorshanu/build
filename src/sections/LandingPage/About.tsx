import { AuthContext } from "Providers/AuthContextProvider";
import Button from "components/Button";
import Typography from "components/Typography";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({ title, desc }: any) => {
  return (
    <div className="flex space-x-3">
      <aside className="flex-shrink-0">
        <img
          src="/images/tick-circle.svg"
          className="inline-block w-5 h-5 invert dark:invert-0 opacity-80"
          alt="circle-tick"
        />
      </aside>

      <main>
        <Typography
          variant="lg"
          className="mb-2 font-semibold text-woodsmoke-900 dark:text-white"
        >
          {title}
        </Typography>
        <Typography variant="sm" className="opacity-80">
          {desc}
        </Typography>
      </main>
    </div>
  );
};

function About() {
  const { t } = useTranslation();
  const { isToken } = useContext(AuthContext);

  return (
    <section className="bg-woodsmoke-300 dark:bg-blue-bg/40">
      <div className="container-wrapper relative">
        <img
          src="/images/african-girl.png"
          className="max-lg:hidden absolute bottom-0 right-[24%] h-[92%] w-[30%] object-contain object-bottom pointer-events-none select-none"
          alt="img"
        />

        <div className="max-lg:py-10 py-16 grid lg:grid-cols-2 max-lg:gap-8 gap-20">
          <main>
            <Typography
              variant="4xl"
              className="max-lg:text-3xl lh-1_3 font-semibold text-woodsmoke-900 dark:text-white max-lg:mb-6 mb-16"
            >
              <span className="text-[1.8em] font-black lh-1">{t("W")}</span>
              {t("e're")}{" "}
              {t(
                "passionate about reshaping the world of freelancing and recruitment."
              )}
            </Typography>

            <div className="relative">
              <img
                src="/images/water-drops.png"
                className="absolute max-lg:bottom-full bottom-[94%] left-[-4%] w-20 max-lg:hidden"
                alt="water-drop"
              />

              <Typography variant="lg" className="max-lg:text-base opacity-80">
                {t(
                  "We believe in the power of innovation, transparency, and trust. Our Web3-based platform is designed to empower both freelancers and employers, making the entire process seamless and efficient. With a commitment to excellence, "
                )}
                {t("we're")}{" "}
                {t(
                  "dedicated to creating a decentralized collaboration space that brings the future of work closer to you."
                )}
              </Typography>
            </div>
          </main>

          <aside className="lg:grid grid-cols-2 lg:gap-6">
            <div className="bg-white max-lg:hidden" />

            <div className="bg-green-haze-500 dark:bg-green-haze-800 py-6 px-6 space-y-5">
              <Card
                title={t("Fully Decentralized")}
                desc={t("World’s first fully decentralized freelance network")}
              />
              <Card
                title={t("2% Commission")}
                desc={t("Only 2% Commission lowest In the Industry")}
              />
              <Card
                title={t("Instant Withdrawal")}
                desc={t(
                  "Unlimited ownership Instant Withdrawal recruitment platform"
                )}
              />

              <div className="pt-3">
                <Button
                  className="w-full space-x-[0.6em]"
                  endIcon={<FaArrowRightLong />}
                >
                  {isToken ? t("Find Freelancer") : "Sign up"}
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;
