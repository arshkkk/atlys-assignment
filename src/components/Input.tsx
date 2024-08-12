"use client";
import { InputHTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";
import EyeIcon from "@/icons/eye.svg";

export function Input({
  icon,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { icon?: React.ReactNode }) {
  const [type, setType] = useState(props.type);

  const toggleType = () => {
    setType((type) => {
      if (type === "password") {
        return "text";
      } else return "password";
    });
  };

  return (
    <div className="relative">
      <input
        {...props}
        className={twMerge(
          "border-[1.5px] focus:border-white bg-transparent px-3 py-2 border-border1 rounded-[0.25rem] ring-white focus:ring-1 w-full font-normal text-base text-white caret-white outline-none placeholder-placeholderText",
          props.className
        )}
        type={type}
      />
      {props.type === "password" ? (
        <button
          type="button"
          className="top-[50%] right-2 absolute translate-y-[-50%]"
          onClick={toggleType}
        >
          <EyeIcon />
        </button>
      ) : null}
    </div>
  );
}
