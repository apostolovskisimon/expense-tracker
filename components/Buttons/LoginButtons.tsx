import React from "react";
import { FaGoogle, FaArrowCircleRight, FaGithub } from "react-icons/fa";
type Props = {
  text: string;
  type?: "button" | "submit";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  iconName?: string;
  light?: boolean;
  iconLeft?: boolean;
};

const LoginButtons = ({
  onClick,
  text = "",
  iconName,
  type = "button",
  light,
  iconLeft = false,
}: Props) => {
  const standardStyle = {
    color: light ? "black" : "white",
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
    <button
      onClick={onClick}
      type={type}
      className={`${light ? "bg-white" : "bg-violet-700"} rounded-lg
       flex pl-4 pr-4 justify-between items-center
        h-14 w-full hover:bg-violet-600 active:bg-violet-600 
        focus:outline-none focus:ring focus:ring-violet-500 duration-300 mt-5`}
    >
      <p className={`${light ? "text-black" : "text-white"} flex `}>
        {iconLeft && <span className="mr-5">{handleIcon()}</span>}
        {text}
      </p>
      {!iconLeft && <div>{handleIcon()}</div>}
    </button>
  );
};

export default LoginButtons;
