export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: any;
  endIcon?: any;
  onClick: () => void;
}

const defaultStyles =
  "rounded-md px-[16px] py-[12px] flex gap-[8px] items-center";

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-400 text-purple-600",
};

const sizeStyles = {
  sm: "p-2",
  md: "p-4",
  lg: "p-6",
};

export const Button = (props: ButtonProps) => {
  return (
    <button
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
