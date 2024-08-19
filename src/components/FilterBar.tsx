import { FaChevronDown } from "react-icons/fa";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Typography from "./Typography";
import { useTranslation } from "react-i18next";
import CheckBoxNumberIndicator from "./CheckBoxNumberIndicator";

function FilterBar() {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-woodsmoke-900 rounded-lg p-6 [&>*:not(:last-child)]:pb-6 [&>*:not(:last-child)]:border-b-1 [&>*:not(:last-child)]:border-black/20 dark:[&>*:not(:last-child)]:border-white/20 space-y-7 shadow-md">
      <div>
        <Typography variant="lg" className="font-medium mb-5">
          {t("Filters")}
        </Typography>
        <Typography variant="lg" className="font-medium mb-5">
          {t("Categories")}
        </Typography>

        <div className="space-y-3 flex flex-col">
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("Design & Creative")} />
          </CheckBoxNumberIndicator>
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("Business")} />
          </CheckBoxNumberIndicator>
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("Digital Marketing")} />
          </CheckBoxNumberIndicator>
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("Life Style")} />
          </CheckBoxNumberIndicator>
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("Programming & Tech.")} />
          </CheckBoxNumberIndicator>
          <Button
            variant="simple"
            className="w-fit px-0 h-auto pt-2"
            endIcon={<FaChevronDown className="text-[.9em]" />}
          >
            {t("Show More")}
          </Button>
        </div>
      </div>

      <div>
        <div className="space-y-3 flex flex-col">
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("$0K - $20K")} />
          </CheckBoxNumberIndicator>
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("$20K - $40K")} />
          </CheckBoxNumberIndicator>
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("$40K - $60K")} />
          </CheckBoxNumberIndicator>
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("$60K - $80K")} />
          </CheckBoxNumberIndicator>
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("$80K - $100K")} />
          </CheckBoxNumberIndicator>
          <Button
            variant="simple"
            className="w-fit px-0 h-auto pt-2"
            endIcon={<FaChevronDown className="text-[.9em]" />}
          >
            {t("Show More")}
          </Button>
        </div>
      </div>

      <div>
        <Typography variant="lg" className="font-medium mb-5">
          {t("Experience Level")}
        </Typography>

        <div className="space-y-3 flex flex-col">
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("Internship")} />
          </CheckBoxNumberIndicator>
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("Entry Level")} />
          </CheckBoxNumberIndicator>
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("Associate")} />
          </CheckBoxNumberIndicator>
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("Mid Level")} />
          </CheckBoxNumberIndicator>
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("Director")} />
          </CheckBoxNumberIndicator>
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("Executive")} />
          </CheckBoxNumberIndicator>
        </div>
      </div>

      <div>
        <Typography variant="lg" className="font-medium mb-5">
          {t("Onsite/Remote")}
        </Typography>

        <div className="space-y-3 flex flex-col">
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("On-site")} />
          </CheckBoxNumberIndicator>
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("Remote")} />
          </CheckBoxNumberIndicator>
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("Hybrid")} />
          </CheckBoxNumberIndicator>
        </div>
      </div>

      <div>
        <Typography variant="lg" className="font-medium mb-5">
          {t("Job Posted")}
        </Typography>

        <div className="space-y-3 flex flex-col">
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("All")} />
          </CheckBoxNumberIndicator>
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("1 Day")} />
          </CheckBoxNumberIndicator>
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("7 Days")} />
          </CheckBoxNumberIndicator>
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("1 Month")} />
          </CheckBoxNumberIndicator>
        </div>
      </div>

      <div>
        <Typography variant="lg" className="font-medium mb-5">
          {t("Job type")}
        </Typography>

        <div className="space-y-3 flex flex-col">
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("Full Time")} />
          </CheckBoxNumberIndicator>
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("Part Time")} />
          </CheckBoxNumberIndicator>
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("Remote Jobs")} />
          </CheckBoxNumberIndicator>
          <CheckBoxNumberIndicator number={56}>
            <Checkbox label={t("Freelancer")} />
          </CheckBoxNumberIndicator>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
