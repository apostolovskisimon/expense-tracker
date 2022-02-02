import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoginButtons from "../../components/Buttons/LoginButtons";
import LoginInput from "../../components/Inputs/LoginInputs";
import { auth, PROVIDER_SIGN_IN, SIGN_IN_DEFAULT } from "../../firebase/auth";

// : InferGetServerSidePropsType<typeof getServerSideProps>

const Home = ({}) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value.trim() }));
  };
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Expense Tracker</title>
      </Head>
      <div className="w-screen h-screen bg-black flex justify-center items-center">
        <div className="h-full w-5/6 text-center p-8 flex flex-col">
          <h1 className="text-white font-bold text-4xl">
            Login to Your Account
          </h1>
          <p className="text-gray-300 m-6 ">
            You will be able to enter and account for your all of your expenses
          </p>
          <div className="mt- flex items-center justify-evenly w-full h-3/6">
            <div className="text-white w-2/5 h-3/6 flex flex-col justify-center ">
              <LoginInput
                name="email"
                type="email"
                placeholder="E-Mail"
                iconName="person"
                onChange={handleChange}
                value={values.email}
              />
              <LoginInput
                iconName="password"
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={values.password}
              />
              <LoginButtons
                onClick={() => {
                  const { email, password } = values;
                  SIGN_IN_DEFAULT({ email, password });
                }}
                text="Sign in"
                iconName="arrow-right"
              />
              {/* <LoginInput name="email" type="email" placeholder="Your E-Mail" /> */}
            </div>

            <div className="text-white w-2/5 h-3/6  flex flex-col justify-center ">
              <LoginButtons
                onClick={() => PROVIDER_SIGN_IN("google", router)}
                text="Sign in with google instead"
                iconName="google"
                light
                iconLeft
              />
              <LoginButtons
                onClick={() => PROVIDER_SIGN_IN("github", router)}
                text="Sign in with github instead"
                iconName="github"
                light
                iconLeft
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
