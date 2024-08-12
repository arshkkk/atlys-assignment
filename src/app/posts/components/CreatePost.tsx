"use client";
import { Button } from "@/components/Button";
import { Card } from "./Card";
import { useState } from "react";
import { LoginForm } from "@/components/LoginForm";
import { twMerge } from "tailwind-merge";

export function CreatePost() {
  const [isPopupOpen, setIsPoupOpen] = useState(false);

  const postClick = () => {
    setIsPoupOpen(true);
  };

  const onPopupClose = () => {
    setIsPoupOpen(false);
  };

  return (
    <>
      <div
        className={twMerge(
          "fixed inset-0 bg-black/70 transition-all scale-100",
          !isPopupOpen && "scale-0"
        )}
      />
      <div
        className={twMerge(
          "fixed inset-0 flex justify-center items-center transition-all scale-100",
          !isPopupOpen && "scale-0"
        )}
      >
        <LoginForm onClosed={onPopupClose} />
      </div>
      <Card>
        <h2 className="font-medium text-lg text-textForeground">Create post</h2>
        <div className="flex bg-card2 p-4 rounded-lg">
          <div className="bg-card p-1 rounded-full">💬</div>
          <input
            className="bg-transparent pl-4 border-none font-normal text-base text-white caret-white outline-none placeholder-placeholderText"
            placeholder="How are you feeling today?"
          />
        </div>

        <Button className="w-28 self-end" onClick={postClick}>
          Post
        </Button>
      </Card>
    </>
  );
}
