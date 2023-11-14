"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { newsEventData } from "@/app/Constants";

import { SinglePage } from "@/app/utils/imports";
import { useTranslations } from "next-intl";
import makeApiCall from "@/app/utils/makeApiCall";
import { GetPostBySlug } from "@/app/requests/blog";

const NewsEventsSinglePage = ({ params }) => {
  const slug = params?.slug;
  const locale = params?.locale;
  // const data = await fetchData(locale, slug);
  const t = useTranslations("Index");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      // const queryParams = {
      //   pageNo: pageNo,
      //   pageSize: 20,
      //   sortBy: "creationDate",
      //   ascOrDesc: "asc",
      // };
      const response = await makeApiCall(
        GetPostBySlug,
        "GET",
        locale,
        null,
        {},
        "",
        slug
      );
      console.log(response);
      setData(response?.payload);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   const searchParams = useSearchParams();
  //   const id = searchParams.get("id");
  return (
    <SinglePage
      pageTitle={t("newsEvents.pageTitle")}
      singlePageData={{
        ...data,
        longDescription: data.content,
        fileObject: data.coverImage,
      }}
      fullWidthImg={true}
    />
  );
};

export default NewsEventsSinglePage;
