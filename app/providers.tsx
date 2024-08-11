"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

//I made this AuthProvider in this way in order to use "use client" without doing so in the layout file.

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
