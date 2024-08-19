import { twMerge } from "tailwind-merge";
import Typography from "./Typography";

const tableVariants = {
  0: {
    wrapper:
      "w-full [&_tr>*:first-child]:pl-7 [&_tr>*:last-child]:pr-7 rounded-md overflow-hidden shadow-lg shadow-black/20",
    thead: "[&_tr]:bg-white dark:[&_tr]:bg-woodsmoke-900",
    tbody:
      "[&_tr>*]:py-4 [&>*:nth-child(odd)]:bg-woodsmoke-100 dark:[&>*:nth-child(odd)]:bg-woodsmoke-700 [&_tr]:bg-woodsmoke-200 dark:[&_tr]:bg-woodsmoke-600",
  },
  1: {
    wrapper: "w-full",
    thead: "border-b-2 border-white/20",
    tbody:
      "[&_tr>*]:py-4 [&>tr:not(:last-child)]:border-b-2 [&>tr:not(:last-child)]:border-white/20",
  },
};

function Table({ headings, tableItems, className, variant = 0 }) {
  return (
    <table className={twMerge(tableVariants[variant].wrapper, className)}>
      <thead className={tableVariants[variant].thead}>
        <tr className="h-14">
          {headings.map((text, i) => (
            <Typography key={i} as="td" variant="base" className="font-medium">
              {text}
            </Typography>
          ))}
        </tr>
      </thead>

      <tbody className={tableVariants[variant].tbody}>
        {tableItems ? (
          <>
            {tableItems.map((tr_items, tr_index) => (
              <tr key={tr_index}>
                {tr_items.map((td, i) => (
                  <td key={i}>{td}</td>
                ))}
              </tr>
            ))}
          </>
        ) : null}
      </tbody>
    </table>
  );
}

export default Table;