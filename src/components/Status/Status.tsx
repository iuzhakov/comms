import cx from "classnames";

import { StatusEnum } from "../../types/Status";

type StatusProps = {
  type: StatusEnum;
};

const colorsMap = {
  [StatusEnum.ONLINE]: "bg-green-500",
  [StatusEnum.OFFLINE]: "bg-gray-300",
  [StatusEnum.AWAY]: "bg-yellow-500",
};

export const Status = ({ type }: StatusProps) => {
  return (
    <div
      className={cx(
        "rounded-full w-3 h-3 absolute bottom-0.5 right-0 border border-white",
        colorsMap[type]
      )}
    />
  );
};
