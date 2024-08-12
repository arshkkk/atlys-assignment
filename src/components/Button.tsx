import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={twMerge(
        "bg-primary py-2 rounded-[0.25rem] w-full font-medium text-base text-center text-white",
        props.className
      )}
    />
  );
}
