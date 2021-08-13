import { Avatar } from "../Avatar/Avatar";
import { Langs } from "../Langs/Langs";
import { IconButton } from "../IconButton/IconButton";
import { CloseIcon } from "../Icons/CloseIcon";
import { SoundIcon } from "../Icons/SoundIcon";

export const Header = () => {
  return (
    <div className="w-full">
      <div className="bg-gray-100 py-2 px-3 md:rounded-t-xl flex items-center">
        <Avatar />
        <div className="px-3 flex-grow">
          <h3 className="text-lg font-medium">Kubota</h3>
          <div>
            <Langs languages={["gb", "ee"]} />
          </div>
        </div>
        <div className=" flex">
          <IconButton icon={<SoundIcon />} className="mr-3" />
          <IconButton icon={<CloseIcon />} />
        </div>
      </div>
    </div>
  );
};
