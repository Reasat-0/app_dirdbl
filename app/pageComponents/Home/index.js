"use client";

// Vendor Imports
import React, { Fragment, useEffect, useState } from "react";
import { Box, Card, Grid } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

// Self Imports
import {
  MainCard,
  DImage,
  DTypography,
  DButton,
  ImageCard,
  IconWrapper,
} from "../../utils/imports";

import { quickLinks, upcommingBills } from "@/app/Constants";

// ---- Image Imports....
import card1 from "../../../public/images/cards/Group 230.svg";
import discount from "@/public/images/discount.svg";
import loan from "@/public/images/loan_elig.svg";
import bad_exp from "@/public/images/bad_exp.svg";
import {
  accountsDir,
  favouriteTransfer,
  fileComplaintDir,
  offerPromosDir,
  signInDir,
  upcomingBillDir,
} from "@/app/utils/moduleDirectories";
import DModal from "@/app/newComponetns/DModal";
import { useDispatch, useSelector } from "react-redux";

const Home = ({ langJson }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const showModal = searchParams.get("showModal");
  const userData = useSelector((state) => state.persistedReducer);
  const [loadPage, setLoadPage] = useState(false);

  // Translators....
  const t = useTranslations("Index");

  const accounts = [
    {
      name: "General Savings A/C",
      accountNumber: "3435435435435",
      balance: "6000,66546",
    },
  ];

  const myCards = [
    {
      name: "this card",
      imgSrc: card1,
    },
  ];

  const navigateTo = (url) => {
    console.log(url);
    router.replace(url);
  };

  useEffect(() => {
    if (!userData?.isLoggedIn) {
      router.replace(signInDir);
    } else {
      setLoadPage(true);
    }
  }, []);

  return (
    <>
      {loadPage && (
        <>
          {showModal && <DModal />}

          <Grid
            container
            justifyContent={"center"}
            columnSpacing={30}
            // sx={{ marginTop: "-160px" }}
          >
            <Grid item md={12} cmd={6}>
              {/*  Quick Links */}
              <MainCard
                cardTitle={t("home.quickLinks")}
                buttonLabel={t("button.viewAllBtn")}
              >
                <Grid container rowSpacing={10} justifyContent={"center"}>
                  {quickLinks.map((link, idx) => (
                    <Grid
                      item
                      xxs={6}
                      xs
                      key={idx}
                      sx={{
                        marginBottom: {
                          xxs: "10px",
                        },
                      }}
                    >
                      <IconWrapper variant={"primary"}>
                        {link.image}
                      </IconWrapper>
                      <Link href={`/${link.slug}`}>
                        <DTypography
                          variant={"smallerBolder"}
                          textAccent={"dark"}
                          text={link.name}
                          style={{ marginTop: "8px", textAlign: "center" }}
                        />
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </MainCard>

              {/* My Accounts */}
              <MainCard
                cardTitle={t("home.myAccounts")}
                hasViewAllBtn={true}
                buttonLabel={t("button.viewAllBtn")}
                buttonNavigation={() => navigateTo(`${accountsDir}`)}
              >
                {accounts.map((acc, idx) => (
                  <Fragment key={idx}>
                    <Box>
                      <Grid
                        container
                        sx={{ marginBottom: "23px" }}
                        justifyContent={"space-between"}
                      >
                        <Grid item xl lg={12}>
                          <DTypography
                            variant={"medium2Bolder"}
                            textAccent={"dark"}
                            text={`${acc.name}`}
                            className={"text-uppercase"}
                            style={{
                              textTransform: "uppercase",
                            }}
                          />
                        </Grid>
                        <Grid item xl="auto" lg={12}>
                          <DTypography
                            variant={"mediumBold"}
                            textAccent={"dark"}
                            text={acc.accountNumber}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                    <Box>
                      <DTypography
                        variant={"largeBolder"}
                        textAccent={"gradient"}
                        text={`${acc.balance}`}
                      />
                    </Box>
                  </Fragment>
                ))}
              </MainCard>

              {/* My Cards */}
              <MainCard
                cardTitle={t("home.myCards")}
                hasViewAllBtn={true}
                buttonLabel={t("button.viewAllBtn")}
                utilClasses={"position-relative"}
                buttonNavigation={() => navigateTo(`/my-cards`)}
              >
                <Box>
                  {myCards.map((card, idx) => (
                    <Fragment key={idx}>
                      <DImage source={card.imgSrc.src} alter={card.name} />
                    </Fragment>
                  ))}
                </Box>
              </MainCard>
            </Grid>

            <Grid item md={12} cmd={6}>
              {/* Upcomming bills */}
              <MainCard
                cardTitle={t("upcommingBills.pageTitle")}
                hasViewAllBtn={true}
                buttonLabel={t("button.viewAllBtn")}
                buttonNavigation={() => router.push(upcomingBillDir)}
                noBorder={true}
              >
                {upcommingBills.map((item, idx) => (
                  <Link
                    href={{
                      pathname: "/",
                      // query: { name: "test" },
                    }}
                    key={idx}
                  >
                    <ImageCard
                      cardData={item}
                      lastItem={idx === upcommingBills.length - 1}
                      size={"small"}
                    />
                  </Link>
                ))}
              </MainCard>

              {/* Favorite Transfers */}
              <MainCard
                cardTitle={t("favouriteTransfers.pageTitle")}
                hasViewAllBtn={true}
                buttonLabel={t("button.viewAllBtn")}
                buttonNavigation={() => router.push(favouriteTransfer)}
                noBorder={true}
              >
                {upcommingBills.map((item, idx) => (
                  <Link
                    href={{
                      pathname: "/favourite-transfers",
                    }}
                    key={idx}
                  >
                    <ImageCard
                      cardData={item}
                      lastItem={idx === upcommingBills.length - 1}
                      size={"small"}
                    />
                  </Link>
                ))}
              </MainCard>

              {/* Discount */}
              <Card variant={"parent-card"} style={{ marginBottom: "40px" }}>
                <Grid container>
                  <Grid item xxs>
                    <DTypography
                      variant={"largeBolder"}
                      textAccent={"dark"}
                      text={t("home.discountOffer")}
                      style={{ marginBottom: "8px" }}
                    />

                    <DTypography
                      variant={"mediumNormal"}
                      textAccent={"dark"}
                      text={t("home.availGreatDeals")}
                    />
                    <DButton
                      variant="primary-gradient-btn"
                      onClick={() => navigateTo(offerPromosDir)}
                      label={t("button.viewAllOffers")}
                      style={{
                        padding: "12px 21px",
                        marginTop: "24px",
                      }}
                    />
                  </Grid>
                  <Grid item xxs="auto">
                    <DImage source={discount.src} alt="discount offer" />
                  </Grid>
                </Grid>
              </Card>

              {/* Complain */}
              <Card variant={"parent-card"} style={{ marginBottom: "40px" }}>
                <Grid container>
                  <Grid item xxs>
                    <DTypography
                      variant={"largeBolder"}
                      textAccent={"dark"}
                      text={t("home.thinkingOfGettingLoan")}
                    />
                    <DButton
                      variant="primary-gradient-btn"
                      style={{
                        padding: "12px 21px",
                        marginTop: "36px",
                      }}
                      onClick={() => navigateTo("/discount")}
                      label={t("button.checkElegibilityNow")}
                    />
                  </Grid>
                  <Grid item xxs="auto">
                    <DImage source={loan.src} alt="discount offer" />
                  </Grid>
                </Grid>
              </Card>

              <Card variant={"parent-card"} style={{ marginBottom: "40px" }}>
                <Grid container>
                  <Grid item xxs>
                    <DTypography
                      variant={"largeBolder"}
                      textAccent={"dark"}
                      text={t("home.badExperienceSoFar")}
                    />
                    <Link href={fileComplaintDir}>
                      <DTypography
                        variant={"smallBolder"}
                        textAccent={"gradient"}
                        text={t("button.fileAComplaint")}
                        style={{ marginTop: "12px", letterSpacing: "1.5px" }}
                      />
                    </Link>
                  </Grid>
                  <Grid item xxs="auto" style={{ position: "relative" }}>
                    <DImage source={bad_exp.src} alt="bad exp offer" />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default Home;
