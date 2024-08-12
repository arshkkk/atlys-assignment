import { FormHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function Form(props: FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form
      {...props}
      className={twMerge("flex flex-col gap-4 mt-8", props.className)}
    />
  );
}
