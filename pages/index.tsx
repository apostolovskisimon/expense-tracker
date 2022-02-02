import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { auth } from "../firebase/auth";

type Props = {};

export const getStaticProps = () => {
  // console.log("current", auth.currentUser);

  // if (!auth.currentUser) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //       permament: "false",
  //     },
  //   };
  // }

  return {
    props: {
      name: "yo",
    },
  };
};

const Home = ({ name }: any) => {
  const router = useRouter();

  useEffect(() => {
    const sub = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.replace("/login");
      }
    });
  }, []);

  return (
    <div>
      home page !!!
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        sign out
      </button>
    </div>
  );
};

export default Home;
