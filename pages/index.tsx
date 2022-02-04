import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/auth";
import { setUser } from "../redux/slices/user";

const Home = ({ name }: any) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const sub = auth.onAuthStateChanged((user) => {
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

  return null;
};

export default Home;
