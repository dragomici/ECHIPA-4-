import React from 'react';
import './HeaderAction.css';

interface HeaderActionProps {
  icon: React.ReactNode;
  text: string;
  badgeCount?: number;
}

const HeaderAction: React.FC<HeaderActionProps> = ({ icon, text, badgeCount }) => {
  return (
    <div className="header-action">
      <div className="header-action__icon-wrapper">
        {icon}
        {badgeCount !== undefined && badgeCount > 0 && (
          <span className="header-action__badge">{badgeCount}</span>
        )}
      </div>
      <span className="header-action__text">{text}</span>
    </div>
  );
};

export default HeaderAction;
