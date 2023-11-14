import React from "react";

import { SignUp } from "@/app/utils/imports";

const SignUpPage = async ({ params }) => {
  return <SignUp langParam={params?.locale} />;
};

export default SignUpPage;
