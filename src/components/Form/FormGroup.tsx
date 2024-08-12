import { PropsWithChildren } from "react";

export function FormGroup(props: PropsWithChildren) {
  return <div className="flex flex-col gap-1.5">{props.children}</div>;
}
