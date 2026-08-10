import React from "react";
import "./Input.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const Input = ({ hasError = false, ...props }: InputProps) => {
  return (
    <div className="input-group">
      <input
        className={`input-group__field ${hasError ? "input-group__field--error" : ""}`}
        {...props}
      />
    </div>
  );
};

export default Input;
