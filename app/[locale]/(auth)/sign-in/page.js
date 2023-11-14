import React, { useContext } from "react";

import { SignIn } from "@/app/utils/imports";

const SignInPage = async ({ params }) => {
  return <SignIn langParam={params?.locale} />;
};

export default SignInPage;
