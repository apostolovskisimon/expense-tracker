import React from "react";
import { FaGoogle, FaArrowCircleRight, FaGithub } from "react-icons/fa";
import Loader from "../Loader";
type Props = {
  text: string;
  type?: "button" | "submit";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  iconName?: string;
  light?: boolean;
  iconLeft?: boolean;
  loading?: boolean;
  disabled?: boolean;
};

const LoginButtons = ({
  onClick,
  text = "",
  iconName,
  type = "button",
  light,
  iconLeft = false,
  loading = false,
  disabled = false,
}: Props) => {
  const standardStyle = {
    color: "white",
    size: 22,
  };
  const handleIcon = () => {
    if (iconName) {
      switch (iconName) {
        case "google":
          return <FaGoogle {...standardStyle} />;
        case "github":
          return <FaGithub {...standardStyle} />;
        case "arrow-right":
          return <FaArrowCircleRight {...standardStyle} />;
        default:
          return "";
      }
    }
    return "";
  };
  return (
    <button onClick={onClick} type={type} className="btn-o" disabled={disabled}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <p className="btn-text">
            {iconLeft && <span className="icon">{handleIcon()}</span>}
            {text}
          </p>
          {!iconLeft && <div>{handleIcon()}</div>}
        </>
      )}
    </button>
  );
};

export default LoginButtons;
