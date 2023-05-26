import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input({ className, ...props }: InputProps) {
  return (
    <input
      type="text"
      className={clsx(
        "border-solid border-gray-50 border-2 px-6 py-2 text-lg rounded-3xl w-full"
      )}
      {...props}
    />
  );
}

export default Input;
