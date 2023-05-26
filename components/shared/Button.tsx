import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, ...props }: ButtonProps) {
  return (
    <button className="py-2 px-6 bg-blue-400" {...props}>
      {children}
    </button>
  );
}

export default Button;
