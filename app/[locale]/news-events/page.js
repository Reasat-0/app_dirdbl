"use client";

import React, { Fragment, useEffect, useState } from "react";

import {
  ContentContainer,
  DImage,
  DPagination,
  DTypography,
  PageTitle,
} from "@/app/utils/imports";
import { useTranslations } from "next-intl";
import { Box, Card, Grid, Stack } from "@mui/material";

import Img from "@/public/images/dbl_go.png";
import Link from "next/link";
import { newsEventData } from "@/app/Constants";
import makeApiCall from "@/app/utils/makeApiCall";
import { GetAllPostsWP } from "@/app/requests/blog";
import PercentageCurveImg from "@/public/images/PercentageCurve.svg";

const NewsEventsPage = async ({ params: { locale } }) => {
  const t = useTranslations("Index");

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const [pageNo, setPageNo] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const handleChangePage = (event, newPage) => {
    console.log(newPage);
    setPageNo(newPage);
  };

  const fetchData = async () => {
    try {
      const queryParams = {
        pageNo: pageNo,
        pageSize: 20,
        sortBy: "creationDate",
        ascOrDesc: "asc",
        blogId: 1,
        // [searchField]: searchParam,
      };
      const response = await makeApiCall(
        GetAllPostsWP,
        "GET",
        locale,
        null,
        {},
        queryParams,
        ""
      );
      setTotalPages(response?.payload?.totalPages);
      setData(response?.payload?.content);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  return (
    <ContentContainer width="80%">
      <PageTitle
        variant={"title"}
        text={t("newsEvents.pageTitle")}
        hasSubtitle={false}
      />

      <Box>
        {data.map((item, idx) => (
          <Fragment key={idx}>
            <Link href={`/news-events/${item.slug}`}>
              <Card style={{ marginBottom: "24px", padding: "24px" }}>
                <Grid container>
                  <Grid item xxs>
                    <DTypography
                      text={item.title}
                      variant={"mediumBolder"}
                      textAccent={"darker"}
                      style={{
                        marginBottom: "16px",
                      }}
                    />
                    <DTypography
                      text={item.content}
                      variant={"smallRegular"}
                      textAccent={"darker"}
                      style={{
                        marginBottom: "26px",
                      }}
                    />
                    <Stack direction={"row"} spacing={"20"}>
                      <DTypography
                        text={item.date}
                        variant={"smallestNormal"}
                        textAccent={"normal"}
                      />
                      <DTypography
                        text={item.read}
                        variant={"smallestNormal"}
                        textAccent={"normal"}
                        style={{
                          paddingLeft: "16px",
                        }}
                      />
                    </Stack>
                  </Grid>
                  <Grid
                    item
                    xxs={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* <img src={Img.src} alt="" /> */}

                    <DImage
                      source={
                        item?.coverImage?.fileName || item?.coverImage !== null
                          ? `${process.env.NEXT_PUBLIC_FILE_FETCH_URL}?name=${item?.coverImage?.fileName}`
                          : PercentageCurveImg.src
                      }
                      alter={item?.title}
                    />
                  </Grid>
                </Grid>
              </Card>
            </Link>

            <DPagination
              totalPages={totalPages}
              handleChangePage={handleChangePage}
            />
          </Fragment>
        ))}
      </Box>
    </ContentContainer>
  );
};

export default NewsEventsPage;
