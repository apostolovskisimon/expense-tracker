import React, { useState } from "react";
import {
  FaCog,
  FaDoorOpen,
  FaHamburger,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import Link from "next/link";
import { NavProps } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { LOGOUT } from "../../firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";

const NavBar = ({ openMenu, toggleBurger }: NavProps) => {
  const { user } = useSelector((state: RootState) => state);

  const [toggle, setToggle] = useState(false);

  const { displayName, photoUrl } = user;

  console.log("current user", user);
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <nav className="navbar">
      <div className="logo">
        <h2 title="Tracker">Tracker</h2>
      </div>

      <div className={`nav `}>
        <div className="links">
          <Link href="/">
            <a className="inline-link">
              <MdLanguage size={25} />
            </a>
          </Link>
          <Link href="/">
            <a className="inline-link">
              <IoMdNotifications size={25} />
            </a>
          </Link>

          <div className="profile hoverable" onClick={() => setToggle(!toggle)}>
            {!!photoUrl && (
              <Image
                src={photoUrl as string}
                layout="fixed"
                width={45}
                height={45}
                alt=""
                className="profileImg"
              />
            )}
          </div>
          {toggle && (
            <div className={`menu`}>
              <Link href={"/profile"} passHref>
                <a className="profile-link">
                  <FaUser />
                  <p>{displayName}</p>
                </a>
              </Link>

              <Link href={"/profile"} passHref>
                <a className="profile-link">
                  <FaCog />
                  <p>Settings</p>
                </a>
              </Link>
              <button
                className="profile-link"
                onClick={() => LOGOUT(dispatch, router)}
              >
                <FaDoorOpen color="red" /> <p>Logout</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
