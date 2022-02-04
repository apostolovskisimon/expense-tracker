import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  GithubAuthProvider,
} from "firebase/auth";
import Router, { Route } from "next/dist/server/router";
import { NextRouter, RouterEvent } from "next/router";
import { Dispatch } from "react";
import { resetUser } from "../../redux/slices/user";
import { FIREBASE_APP } from "../client";

const GoogleProvider = new GoogleAuthProvider();
const GitHubProvider = new GithubAuthProvider();

const providers = {
  google: GoogleProvider,
  github: GitHubProvider,
};

export const auth = getAuth(FIREBASE_APP);
// To apply the default browser preference instead of explicitly setting it.
auth.useDeviceLanguage();

export const PROVIDER_SIGN_IN = (
  provider: "github" | "google",
  router: NextRouter
) =>
  signInWithPopup(auth, providers[provider])
    .then((result) => {
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential?.accessToken;
      const user = result.user;
      console.log("R E S U L T", result);
      router.replace("/");
    })
    .catch((error) => {
      console.error("error", error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      // const credential = GoogleAuthProvider.credentialFromError(error);
    });

type signInProps = {
  email: string;
  password: string;
};

export const SIGN_IN_DEFAULT = ({ email, password }: signInProps) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log("SUCCESS", userCredential);
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      console.error("error", error);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

export const LOGOUT = (dispatch: Dispatch<any>, router: NextRouter): void => {
  router.replace("/login");
  auth.signOut().then(() => {
    dispatch(resetUser());
  });
};
