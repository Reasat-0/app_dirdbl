"use client";

import { Box, Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";

import {
  DAccordion,
  DInputField,
  DTypography,
  PageTitle,
} from "../../utils/imports";
import { useTranslations } from "next-intl";
import makeApiCall from "@/app/utils/makeApiCall";
import { GetAllFaqWP } from "@/app/requests/faq";
import Loader from "../loading";
import useSearchFilter from "@/app/hooks/useSearchFilter";

const FaqPage = ({ params: { locale } }) => {
  const t = useTranslations("Index");
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [pageNo, setPageNo] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const handleChangePage = (event, newPage) => {
    console.log(newPage);
    setPageNo(newPage);
  };

  const searchByFields = [{ label: "", field: "question" }];

  const { searchRender, searchParam, searchField } = useSearchFilter(
    [],
    [],
    searchByFields
  );

  const fetchData = async () => {
    try {
      setLoading(true);
      const queryParams = {
        pageNo: pageNo,
        pageSize: 20,
        sortBy: "creationDate",
        ascOrDesc: "asc",
        [searchField]: searchParam,
      };
      const response = await makeApiCall(
        GetAllFaqWP,
        "GET",
        locale,
        null,
        {},
        queryParams
      );
      console.log("Response....", response);
      setTotalPages(response?.payload?.totalPages);
      setFaqData(response?.payload?.content);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    // const response = await fetch("https://api.publicapis.org/entries");
    // const data = await response.json();
  };
  const handleSearch = () => {
    fetchData();
  };
  useEffect(() => {
    fetchData();
  }, [pageNo, searchParam]);

  return (
    <Box
      sx={{
        textAlign: "center",
        // padding: ".625rem 4.375rem",
      }}
    >
      <PageTitle
        variant={"title"}
        text={t("faq.pageTitle")}
        hasSubtitle={false}
        utilClasses={"text-center"}
        style={{ marginBottom: "3rem" }}
      />
      <Grid container justifyContent={"flex-end"}>
        <Grid item xs={12} sm={"auto"}>
          {searchRender}
          {/* <DInputField
                value={searchQuery}
                name={"search"}
                placeholder={t("common.placeholderSearch")}
                style={{ marginBottom: "1.5rem" }}
                icon={<SearchIcon />}
                handleChange={(e) => setSearchQuery(e.target.value)}
                handleIconClick={handleSearch}
              /> */}
        </Grid>
      </Grid>
      {faqData.length < 1 ? (
        <>
          <DTypography
            text={t("notFound.nothingFound")}
            variant={"largeBolder"}
            textAccent={"normal"}
            style={{
              marginTop: "50px",
            }}
          />
        </>
      ) : (
        <>
          {loading && <Loader />}

          <Grid container justifyContent={"center"}>
            <Grid item xxs={12}>
              {faqData?.map((item, idx) => (
                <Box key={idx} style={{ marginBottom: "1.5rem" }}>
                  <DAccordion
                    data={{ title: item.question, description: item.answer }}
                  />
                </Box>
              ))}
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              justifyContent: {
                xxs: "center",
                cmd: "flex-end",
              },
            }}
          >
            <Grid item xxs={12} md={6} lg={4}>
              <Pagination
                sx={{
                  ul: {
                    justifyContent: "flex-end",
                  },
                }}
                count={totalPages}
                onChange={handleChangePage}
              />
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
};

export default FaqPage;
