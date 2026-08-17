import React from "react";
import "./IconWrapper.css";

interface IconWrapperProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  children,
  size = "md",
  className = "",
}) => {
  return (
    <span className={`icon-wrapper icon-wrapper--${size} ${className}`}>
      {children}
    </span>
  );
};

