import { PropsWithChildren } from "react";

export function Card(props: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-3 border-2 bg-card px-4 py-6 border-border1 rounded-lg w-full">
      {props.children}
    </div>
  );
}
