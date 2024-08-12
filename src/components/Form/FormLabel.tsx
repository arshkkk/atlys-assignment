import { LabelHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function FormLabel(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      {...props}
      className={twMerge(
        "font-medium text-sm text-textForeground",
        props.className
      )}
    />
  );
}
