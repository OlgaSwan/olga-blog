import React from "react";
import { auth } from "../model/auth";
import { signOut } from "firebase/auth";

export const signOutCustom = (
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
) => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      setIsAuth(false);
      localStorage.setItem("isAuth", "false");
    })
    .catch((error) => {
      // An error happened.
      console.log(error.message);
    });
};
