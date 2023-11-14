import React from "react";

import { Global } from "@/app/utils/iconImports";

import { SinglePage } from "@/app/utils/imports";
import { offersPromos } from "@/app/Constants";
import { GetOfferPromosById } from "@/app/requests/offerPromos";
import makeApiCall from "@/app/utils/makeApiCall";

const fetchData = async (locale, id) => {
  try {
    const response = await makeApiCall(
      GetOfferPromosById,
      "GET",
      locale,
      null,
      {},
      "",
      id
    );
    return response?.payload;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const SingleOfferPromoPage = async ({ params: { id, locale } }) => {
  const singlePageData = await fetchData(locale, id);
  const footerOptions = [
    {
      id: 1,
      icon: <Global color="white" />,
      text: "https://google.com",
      useAsUrl: true,
    },
  ];

  // const offerObj = offersPromos[0]["offers"].find(
  //   (item) => item.id === parseInt(id)
  // );
  return (
    <SinglePage
      // pageTitle={offerObj.title}
      footerOptions={footerOptions}
      singlePageData={{
        ...singlePageData,
      }}
    />
  );
};

export default SingleOfferPromoPage;
