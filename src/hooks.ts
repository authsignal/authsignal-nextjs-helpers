import {useContext} from "react";
import {AuthsignalContext} from "./context";

export const useAuthsignal = () => {
  const context = useContext(AuthsignalContext);

  if (context === undefined) {
    throw new Error("useAuthsignal must be used inside AuthsignalProvider");
  }

  return context;
};
