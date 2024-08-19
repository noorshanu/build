import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

const RadioBox = ({
  id,
  label,
  name,
  onChange,
  checked,
  value,
  defaultChecked,
}: Props) => {
  return (
    <label className="cursor-pointer flex items-center relative">
      <input
        className="radiobutton-input absolute"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
        defaultChecked={defaultChecked}
      />

      <div className="custom-radiobutton"></div>

      {label && <span className="text-base">{label}</span>}
    </label>
  );
};

export default RadioBox;
