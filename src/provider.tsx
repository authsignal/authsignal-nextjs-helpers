import {Authsignal} from "@authsignal/browser";
import React from "react";

import {AuthsignalContext} from "./context";
import {AuthsignalProviderProps} from "./types";

export function AuthsignalProvider({children}: AuthsignalProviderProps) {
  const client = getClient();

  return <AuthsignalContext.Provider value={client}>{children}</AuthsignalContext.Provider>;
}

let _client: Authsignal | null = null;

function getClient(): Authsignal {
  if (_client === null) {
    const publishableKey = process.env.NEXT_PUBLIC_AUTHSIGNAL_PUBLISHABLE_KEY;

    if (!publishableKey) {
      throw new Error("NEXT_PUBLIC_AUTHSIGNAL_PUBLISHABLE_KEY is not set");
    }

    _client = new Authsignal({publishableKey});
  }

  return _client;
}
