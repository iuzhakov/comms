import cx from "classnames";

type ControlProps = {
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const IconButton = ({ icon, className, onClick }: ControlProps) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        "text-gray-400 hover:text-gray-500 cursor-pointer",
        className
      )}
    >
      {icon}
    </button>
  );
};
