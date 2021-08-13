import cx from "classnames";
import { CircleFlag } from "react-circle-flags";

type LangsProps = {
  languages: string[];
};

export const Langs = ({ languages }: LangsProps) => {
  return (
    <div className="flex relative h-5">
      {languages.map((lang, idx) => (
        <div
          key={`${lang}_${idx}`}
          className={cx("rounded-full border border-gray-300 w-5 h-5", {
            "transform -translate-x-1/3": idx > 0,
          })}
        >
          <CircleFlag countryCode={lang} className={cx()} />
        </div>
      ))}
    </div>
  );
};
