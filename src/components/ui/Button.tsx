import { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
}

const defaultStyles =
  "rounded-md px-4 py-2 flex gap-[8px] items-center font-light";

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600",
};

const sizeStyles = {
  sm: "p-2",
  md: "p-4",
  lg: "p-6",
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${defaultStyles} ${variantStyles[props.variant]} ${
        sizeStyles[props.size]
      }`}
    >
      {props.startIcon ? <div>{props.startIcon}</div> : ""}
      {props.text}
      {props.endIcon ? <div>{props.endIcon}</div> : ""}
    </button>
  );
};
