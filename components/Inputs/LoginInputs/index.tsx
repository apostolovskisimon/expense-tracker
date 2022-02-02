import React from "react";
import { FaLock, FaMailBulk, FaUserCircle } from "react-icons/fa";

type Props = {
  type?: "text" | "password" | "email";
  name: string;
  placeholder?: string;
  iconName?: string;
  onChange: (name: string, value: string) => void;
  value?: string;
};

const LoginInput = ({
  name = "",
  placeholder = "",
  type = "text",
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
    <div>
      <label className="relative block w-full ">
        <input
          className="placeholder:italic mb-6 text-black placeholder:text-black block w-full h-14 border border-gray-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder={placeholder}
          type={type}
          name={name}
          onInput={(e) => onChange(name, e.currentTarget.value)}
          value={value}
        />
        <span className="absolute inset-y-0 right-4 flex items-center pl-2">
          {handleIcon()}
        </span>
      </label>
    </div>
  );
};

export default LoginInput;
