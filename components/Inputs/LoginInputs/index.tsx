import React from "react";
import { FaLock, FaMailBulk, FaUserCircle } from "react-icons/fa";

type Props = {
  type?: "text" | "password" | "email";
  name: string;
  placeholder?: string;
  iconName?: string;
  onChange: (name: string, value: string) => void;
  value?: string;
  label?: string;
};

const LoginInput = ({
  name = "",
  placeholder = "",
  type = "text",
  label = "",
  iconName,
  onChange,
  value,
}: Props) => {
  const handleIcon = () => {
    if (iconName) {
      switch (iconName) {
        case "person":
          return <FaUserCircle color="white" size={22} />;
        case "password":
          return <FaLock color="white" size={22} />;
        case "email":
          return <FaMailBulk color="white" size={22} />;
        default:
          return "";
      }
    }
    return "";
  };

  return (
    <div className="input-main">
      <label className="label">
        <p className="label-text">{label}</p>
        <div className="input-cont">
          <input
            className=""
            placeholder={placeholder}
            type={type}
            name={name}
            onInput={(e) => onChange(name, e.currentTarget.value)}
            value={value}
          />
          {/* <span className="icon">{handleIcon()}</span> */}
        </div>
      </label>
    </div>
  );
};

export default LoginInput;
