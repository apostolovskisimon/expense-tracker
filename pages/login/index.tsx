import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoginButtons from "../../components/Buttons/LoginButtons";
import Input from "../../components/Inputs/LoginInputs";
import { auth, PROVIDER_SIGN_IN, SIGN_IN_DEFAULT } from "../../firebase/auth";
import img from "../../public/run.gif";

type Provider = "google" | "github";

const Home = ({}) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<string>("");

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value.trim() }));
  };
  const router = useRouter();

  const handleLogin = (provider: Provider) => {
    setLoading(provider);
    PROVIDER_SIGN_IN(provider)
      .then((res) => {
        console.log("res", res);
        router.push("/");
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(""));
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div className="onboarding-bg">
        <div className="modal">
          <h2>Log in</h2>
          <p>Welcome, log in to continue to your personalized Tracker!</p>
          <div className="info">
            <Input
              name="username"
              onChange={handleChange}
              iconName="person"
              label="Username"
            />
            <Input
              name="password"
              onChange={handleChange}
              iconName="password"
              label="Password"
              type="password"
            />
            <p>Or log in directly using:</p>
            <div className="social">
              <LoginButtons
                onClick={() => handleLogin("google")}
                text="Google"
                iconName="google"
                light
                iconLeft
                loading={loading === "google"}
                disabled={!!loading}
              />
              <LoginButtons
                onClick={() => handleLogin("github")}
                text="GitHub"
                iconName="github"
                light
                disabled={!!loading}
                iconLeft
                loading={loading === "github"}
              />
            </div>
            <div className="to-reg">
              No account? Sign up by clicking <Link href="/register">here</Link>
              .
            </div>
          </div>
        </div>{" "}
        <div className="modal-desc">
          <h2>Expense Tracker</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            reprehenderit similique sunt quasi laudantium nostrum quibusdam
            error deleniti voluptas quae odit, in quis, saepe eius nam facere
            molestiae consectetur repellendus!
          </p>
          <div className="img">
            <Image src={img} alt="" layout="fill" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
