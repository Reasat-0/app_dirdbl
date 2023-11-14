import React from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";

import { Global, PhoneIcon } from "@/app/utils/iconImports";
import PercentageCurveImg from "@/public/images/PercentageCurve.svg";
import {
  IconWrapper,
  PageTitle,
  DTypography,
  ContentContainer,
  DImage,
} from "@/app/utils/imports";

const SinglePage = ({
  fullWidthImg,
  pageTitle,
  pageSubTitle,
  footerOptions,

  singlePageData,
}) => {
  const hasImg =
    singlePageData?.fileObject?.fileName || singlePageData?.fileObject !== null;
  console.log(singlePageData);
  return (
    <ContentContainer width="700px">
      {pageTitle && (
        <PageTitle
          variant={"title"}
          text={pageTitle}
          hasSubtitle={pageSubTitle}
        />
      )}
      <Box sx={{ marginTop: !pageTitle ? "100px" : "0" }}>
        <Box
          sx={{
            // padding: "5px 10px",
            width: fullWidthImg ? "100%" : "160px",
            height: fullWidthImg ? "200px" : "100px",
            // height: fullWidthImg ? "" : "100px",
            margin: "0 auto",
          }}
        >
          <DImage
            source={
              hasImg
                ? `${process.env.NEXT_PUBLIC_FILE_FETCH_URL}?name=${singlePageData?.fileObject?.fileName}`
                : PercentageCurveImg.src
            }
            alter={singlePageData?.title}
            style={{ width: "100%", height: "100%", marginBottom: "8px" }}
          />
          {/* <img
            src={
              singlePageData.fileObject !== null
                ? singlePageData?.img.src
                : singlePageData?.pageImg?.src
            }
            alt={"pageTitle"}
          /> */}
        </Box>

        {singlePageData?.title && (
          <DTypography
            variant={"largeBolder"}
            textAccent={"darker"}
            text={singlePageData?.title}
            style={{
              textAlign: pageTitle ? "left" : "center",
              marginTop: "20px",
            }}
          />
        )}

        {singlePageData?.shortDescription && (
          <DTypography
            variant={"mediumBold"}
            textAccent={"darker"}
            text={singlePageData?.shortDescription}
            style={{ textAlign: "center", marginTop: "10px" }}
          />
        )}

        {singlePageData?.longDescription && (
          <DTypography
            variant={"smallRegular"}
            textAccent={"dark"}
            text={
              singlePageData?.longDescription ||
              "AirAsia, the world’s best low cost airline for nine consecutive years, recommenced direct flights from Dhaka to Kuala Lumpur with the slogan “Now everyone can fly” tapping into the vast market with over 18 million populations from 10 July 2015 onwards. With the aim of flying make affordable for everyone.At AirAsia, we see ourselves as not a typical airline operator but more of a people company that happens to be in the airline business. Understanding people enables us to realize the true needs of discerning traveler and provide paramount services and products to deliver utmost satisfaction to our guests. AirAsia has brought a revolution in air travel with more and more people around the region choosing it as their preferred choice of air transport. As we continuously strive to promote air travel, we also seek to create excitement amongst our guests with our range of innovative and personalized services."
            }
            style={{ marginTop: "48px" }}
          />
        )}

        <Grid
          container
          sx={{
            marginTop: "64px",
          }}
        >
          {singlePageData?.contacts?.map((option, idx) => (
            <Grid item xxs={12} sm={4} mb={10} key={idx}>
              <Link href={`${option.text}`} passHref={true}>
                <Grid
                  container
                  spacing={"10"}
                  alignItems={"center"}
                  sx={{
                    justifyContent: { xxs: "center", sm: "flex-start" },
                  }}
                >
                  <Grid item xxs={"auto"}>
                    <IconWrapper
                      useAsImage={false}
                      variant={"primary"}
                      size="small"
                    >
                      {option.type.toLowerCase() === "mobile" && <PhoneIcon />}
                    </IconWrapper>
                  </Grid>
                  <Grid item xxs={"auto"}>
                    <DTypography variant={"smallBold"} text={option.value} />
                  </Grid>
                </Grid>
              </Link>
            </Grid>
          ))}

          {singlePageData?.company && (
            <Grid item xxs={12} sm={4} mb={10}>
              <Link
                href={`${singlePageData?.company?.webAddress}`}
                passHref={true}
              >
                <Grid
                  container
                  spacing={"10"}
                  alignItems={"center"}
                  sx={{
                    justifyContent: { xxs: "center", sm: "flex-start" },
                  }}
                >
                  <Grid item xxs={"auto"}>
                    <IconWrapper
                      useAsImage={false}
                      variant={"primary"}
                      size="small"
                    >
                      <Global color="white" />
                    </IconWrapper>
                  </Grid>
                  <Grid item xxs={"auto"}>
                    <DTypography
                      variant={"smallBold"}
                      text={singlePageData?.company?.webAddress}
                    />
                  </Grid>
                </Grid>
              </Link>
            </Grid>
          )}
        </Grid>
      </Box>
    </ContentContainer>
  );
};

export default SinglePage;
