import RegisterForm from "@/Components/Auth/RegisterForm";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Register = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return <RegisterForm />;
};

export default Register;
