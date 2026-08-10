import React from "react";
import "./Badge.css";

interface BadgeProps {
  text: string;
  variant: "hot" | "sale" | "new" | "discount";
}

const Badge: React.FC<BadgeProps> = ({ text, variant }) => {
  return <span className={`badge badge--${variant}`}>{text}</span>;
};

export default Badge;
