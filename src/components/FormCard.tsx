"use client";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import CloseIcon from "../icons/close.svg";

export function FormCard({
  onClosed,
  ...props
}: PropsWithChildren & { className?: string; onClosed?: () => void }) {
  return (
    <div
      className={twMerge(
        "relative bg-gradient-to-r from-[#969696] to-[#343434] p-[2px] rounded-lg w-full max-w-[460px]",
        props.className
      )}
    >
      {onClosed ? (
        <button
          onClick={onClosed}
          className="top-4 right-4 absolute bg-black/80 p-1 rounded-full"
        >
          <CloseIcon className="w-4 h-4" />
        </button>
      ) : null}

      <div className="bg-card px-4 py-8 rounded-lg w-full">
        {props.children}
      </div>
    </div>
  );
}
