import React from "react";
import "./Checkbox.css";
interface CheckboxProps {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
}) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={id}
        className="checkbox__input"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="checkbox__label">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
