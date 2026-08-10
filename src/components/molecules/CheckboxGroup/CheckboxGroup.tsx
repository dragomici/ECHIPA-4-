import React from "react";
import Checkbox from "../../atoms/Checkbox";
import "./CheckboxGroup.css";

export interface CheckboxOption {
  id: string;
  label: string;
  checked?: boolean;
}

interface CheckboxGroupProps {
  title?: string;
  options: CheckboxOption[];
  onChange?: (id: string, e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  title,
  options,
  onChange,
}) => {
  return (
    <div className="checkbox-group">
      {title && <label className="checkbox-group__title">{title}</label>}
      <div className="checkbox-group__list">
        {options.map((option) => (
          <Checkbox
            key={option.id}
            id={option.id}
            label={option.label}
            checked={option.checked}
            onChange={onChange ? (e) => onChange(option.id, e) : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
