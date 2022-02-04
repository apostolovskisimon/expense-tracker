import { MdDashboard, MdCalendarToday, MdEmail } from "react-icons/md";
import { Icons } from "./types";

export const handleIcon = (name: Icons): React.ReactNode => {
  const iconProps = {
    size: 34,
    className: "sidemenu-icon",
    color: "black",
  };

  switch (name) {
    case "dashboard":
      return <MdDashboard {...iconProps} />;

    case "calendar":
      return <MdCalendarToday {...iconProps} />;

    case "email":
      return <MdEmail {...iconProps} />;

    default:
      return <MdCalendarToday {...iconProps} />;
  }
};
