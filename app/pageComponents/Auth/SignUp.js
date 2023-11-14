"use client";
// import AccountCreateOption from "./AccountCreateOptions";
import { signUpProcess } from "../../../app/Constants";

import React from "react";

import SignInImage from "../../../public/images/auth/signIn.png";

import Link from "next/link";

import {
  DTypography,
  PageTitle,
  IconCard,
  AuthFooter,
} from "@/app/utils/imports";
import { useTranslations } from "next-intl";
import { Grid, Stack } from "@mui/material";
import { UserIcon, AddIcon, RightArrow } from "@/app/utils/iconImports";

const SignUp = ({ langParam }) => {
  const t = useTranslations("Index");

  const signUpOptions = [
    // {
    //   title: t("auth.applyForNewAccCard"),
    //   subTitle: t("auth.newCustomer"),
    //   icon: <AddIcon />,
    //   url: "/create",
    // },
    {
      title: t("auth.createNewAcc"),
      subTitle: t("auth.justNeedToVerify"),
      icon: <UserIcon />,
      url: "/create",
    },
  ];

  // const searchParams = useSearchParams();

  const footerMenu = [
    {
      id: 0,
      title: t("auth.authFooterProduct"),
      url: "/parnters",
    },
    {
      id: 1,
      title: t("auth.authFooterPartner"),
      url: "/parnters",
    },
    {
      id: 2,
      title: t("auth.authFooterBranchAtmLocations"),
      url: "/branch-atm-locations",
    },
    {
      id: 3,
      title: t("auth.authFooterHowToRegister"),
    },
    {
      id: 4,
      title: t("auth.authContacts"),
    },
    {
      id: 5,
      title: t("auth.authFaq"),
      url: "/faq",
    },
  ];

  return (
    <>
      <Grid
        container
        justifyContent={{ sm: "center", md: "flex-start" }}
        alignItems={"center"}
      >
        <Grid item md={6}>
          <PageTitle
            variant={"title"}
            text={t("auth.welcomeMsg")}
            hasSubtitle={true}
            style={{ textAlign: { xxs: "center", md: "left" } }}
          />
          <PageTitle
            variant={"sub-title"}
            text={t("auth.signUpToDBL")}
            hasSubtitle={true}
            style={{ textAlign: { xxs: "center", md: "left" } }}
          />
          {signUpOptions.map((opt, idx) => (
            <Link href={`sign-up/${opt.url}`} key={idx}>
              <IconCard
                cardData={opt}
                navigateIcon={<RightArrow />}
                size={"large"}
              />
            </Link>
          ))}

          <Stack
            direction={"row"}
            spacing={"20"}
            justifyContent={{ xxs: "center", md: "flex-start" }}
            sx={{
              marginTop: "40px",
            }}
          >
            <DTypography
              textAccent={"normal"}
              variant={"mediumRegular"}
              text={t("auth.alreadyHaveAcc")}
              style={{ marginRight: "10px", textAlign: "right" }}
            />
            <Link href={"/sign-in"}>
              <DTypography
                textAccent={"gradient"}
                variant={"mediumBolder"}
                text={t("button.btnLogin")}
                style={{ textAlign: "right" }}
              />
            </Link>
          </Stack>
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 10px",
            display: {
              xxs: "none",
              md: "flex",
            },
          }}
        >
          <img
            style={{ width: "100%", maxWidth: "100%" }}
            src={SignInImage.src}
            alt="Picture of the author"
          />
        </Grid>
      </Grid>

      <Grid container justifyContent={"center"} style={{ marginTop: "145px" }}>
        <Grid item md={12}>
          <AuthFooter footerData={footerMenu} langParam={langParam} />
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp;
