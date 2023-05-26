import clsx from "clsx";

type GlassPaneProps = {
  children: React.ReactNode;
  className?: string;
};

const GlassPane = ({ children, className }: GlassPaneProps) => {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200 h-screen",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassPane;
