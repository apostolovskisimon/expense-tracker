import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import { SideMenuProps } from "./types";

const SideMenu = ({ openSideMenu, toggleMenu }: SideMenuProps) => {
  return (
    <aside className="sidemenu">
      <div className="sidemenu-section">
        <h3 className="sidemenu-section-title" title="Main">
          Main
        </h3>
        <ActiveLink href="/dashboard" iconName="dashboard" title="Dashboard" />
        <ActiveLink
          href="/dashboard/calendar"
          iconName="calendar"
          title="Calendar"
        />
        <ActiveLink href="/dashboard/emails" iconName="email" title="Emails" />
      </div>
    </aside>
  );
};

export default SideMenu;
