import { useCallback, ChangeEvent, useState, KeyboardEvent } from "react";

import { SmileIcon } from "../Icons/SmileIcon";
import { PaperclipIcon } from "../Icons/PaperclipIcon";
import { IconButton } from "../IconButton/IconButton";
import { Input } from "../Form/Input";

type FooterProps = {
  disabled?: boolean;
  onSend: (message: string) => void;
};

export const Footer = ({ disabled, onSend }: FooterProps) => {
  const [message, setMessage] = useState("");

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }, []);

  const sendMessage = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const trimmedMessage = message.trim();
      if (e.key === "Enter" && trimmedMessage.length > 0) {
        onSend(trimmedMessage);
        setMessage("");
      }
    },
    [message, onSend]
  );

  return (
    <div className="p-4 md:rounded-b-xl">
      <div className="flex items-center">
        <div className="flex-grow mr-4">
          <Input
            className="w-full p-2 outline-none text-gray-500"
            name="message"
            value={message}
            disabled={disabled}
            placeholder="Message"
            onChange={onChange}
            maxlength={250} // just example
            onKeyPress={sendMessage}
          />
        </div>
        <div className="flex">
          <IconButton icon={<SmileIcon />} className="mr-3" />
          <IconButton icon={<PaperclipIcon />} />
        </div>
      </div>
    </div>
  );
};
