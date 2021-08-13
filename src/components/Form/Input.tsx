import { ChangeEvent, KeyboardEvent } from "react";

type InputProps = {
  className?: string;
  name?: string;
  placeholder?: string;
  value: string;
  maxlength?: number;
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
};

export const Input = ({
  className,
  name,
  placeholder,
  value,
  maxlength = 1000,
  disabled = false,
  onChange,
  onKeyPress,
}: InputProps) => (
  <input
    type="text"
    value={value}
    disabled={disabled}
    className={className}
    placeholder={placeholder}
    name={name}
    maxLength={maxlength}
    onChange={onChange}
    onKeyPress={onKeyPress}
  />
);
