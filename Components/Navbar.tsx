import React from "react";
import Link from "next/link";
import UserLogin from "./UserLogin";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        Testerino
      </Link>
      <UserLogin />
    </nav>
  );
};

export default Navbar;
