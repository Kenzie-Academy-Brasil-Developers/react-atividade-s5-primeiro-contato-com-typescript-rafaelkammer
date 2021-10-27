import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
}

const Input = ({ placeholder, label, onChange }: InputProps) => {
  return (
    <div>
      {<label>{label}</label>}
      <input placeholder={placeholder} onChange={onChange} />
    </div>
  );
};
export default Input;
