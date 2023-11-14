import React from "react";
import { SignUpForm } from "@/app/utils/imports";

const AccountCreateVia = ({ params }) => {
  return <SignUpForm signInVia={params?.signInVia} />;
};

export default AccountCreateVia;
