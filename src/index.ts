import dynamic from "next/dynamic";
import {AuthsignalProviderProps} from "./types";

export const AuthsignalProvider = dynamic<AuthsignalProviderProps>(
  () => import("./provider").then((mod) => mod.AuthsignalProvider),
  {ssr: false}
);

export {useAuthsignal} from "./hooks";
