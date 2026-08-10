import React from 'react';
import './HeaderAction.css';

interface HeaderActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  text: string;
  badgeCount?: number;
}

const HeaderAction: React.FC<HeaderActionProps> = ({ icon, text, badgeCount, ...props }) => {
  return (
    <button type="button" className="header-action" data-tooltip={text} {...props}>
      <div className="header-action__icon-wrapper">
        {icon}
        {badgeCount !== undefined && badgeCount > 0 && (
          <span className="header-action__badge">{badgeCount}</span>
        )}
      </div>
      <span className="header-action__text">{text}</span>
    </button>
  );
};

export default HeaderAction;
