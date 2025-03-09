import { FC, HTMLAttributes, memo, PropsWithChildren } from "react";
import clsx from "clsx";

type Props = object & HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "secondary" | "success" | "error";
};

const Button: FC<PropsWithChildren<Props>> = ({
                                                children,
                                                variant = "primary",
                                                className,
                                                ...props
                                              }) => {
  return (
    <button
      {...props}
      className={clsx(
        "px-6 py-3 rounded-lg shadow-md transition-all duration-300",
        {
          primary: "bg-button text-white hover:bg-accent hover:shadow-lg",
          outline:
            "border border-button text-button hover:bg-button hover:text-white",
          secondary: "bg-secondary text-dark hover:bg-highlight",
          success: "bg-success text-white hover:bg-green-600",
          error: "bg-error text-white hover:bg-red-600",
        }[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

export default memo(Button);
