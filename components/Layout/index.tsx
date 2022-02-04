import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase/auth";
import { setUser } from "../../redux/slices/user";
import { RootState } from "../../redux/store";
import NavBar from "../Navigation";
import SideMenu from "../SideMenu";
import { LayoutProps } from "./types";

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state);

  const { displayName, photoUrl, loading } = user;

  const [openMenu, setOpenMenu] = useState(false);
  const [openSideMenu, setSideMenu] = useState(true);

  const toggleBurger = () => setOpenMenu((prev) => !prev);
  const toggleMenu = () => setSideMenu((prev) => !prev);

  useEffect(() => {
    const sub = auth.onAuthStateChanged((user) => {
      console.log("user", user);
      if (!user) {
        router.replace("/login");
      } else {
        dispatch(
          setUser({ displayName: user.displayName, photoUrl: user.photoURL })
        );
        router.replace("/dashboard");
      }
    });

    return sub;
  }, []);

  if (loading) {
    return <div>wait please</div>;
  }

  return (
    <div className={`container`}>
      <div className={openMenu ? "overlay" : ""}>
        <NavBar openMenu={openMenu} toggleBurger={toggleBurger} />
        <main className="content">
          <SideMenu openSideMenu={openSideMenu} toggleMenu={toggleMenu} />
          <div className="main-contnet">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
