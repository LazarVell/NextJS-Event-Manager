"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const UserLogin = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-center gap-5">
      {session ? (
        <>
          <div className="text-white">
            Welcome, <span className="font-bold">{session.user?.name}</span>
          </div>
          <Link className="bg-white font-bold px-6 py-2" href={"/AddEvent"}>
            Add Event
          </Link>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white font-bold px-6 py-2"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link
            className="bg-green-600 text-white font-bold px-6 py-2"
            href={"/login"}
          >
            Log in
          </Link>
          <Link
            className="bg-blue-600 text-white font-bold px-6 py-2"
            href={"/register"}
          >
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default UserLogin;
