import { ReactNode } from "react";
import Typography from "./Typography";

function FormLabel({
  children,
  as,
  ...props
}: {
  children: ReactNode;
  as?: any;
}) {
  return (
    <Typography as={as} className="mb-1 inline-block" {...props}>
      {children}
    </Typography>
  );
}

export default FormLabel;
