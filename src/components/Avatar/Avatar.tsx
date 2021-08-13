import { Status } from "../Status/Status";
import { StatusEnum } from "../../types/Status";

export const Avatar = () => (
  <div className="relative">
    <img
      src="https://i.pravatar.cc/50"
      className="rounded-full w-12 h-12"
      alt="Avatar"
    />
    <Status type={StatusEnum.ONLINE} />
  </div>
);
