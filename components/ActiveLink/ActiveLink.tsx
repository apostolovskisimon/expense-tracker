import React from "react";
import ALink from "./";
import { handleIcon } from "./helper";

import { ActiveLinkProps } from "./types";

const ActiveLink = ({
  href = "/dashboard",
  iconName,
  title,
}: ActiveLinkProps) => {
  return (
    <div className="sidemenu-link">
      <ALink activeClassName="active" href={href}>
        <div className="nav-link">
          {handleIcon(iconName)}
          <a className="sidemenu-title" title={title}>
            {title}
          </a>
        </div>
      </ALink>
    </div>
  );
};

export default ActiveLink;
