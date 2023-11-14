import React from "react";

import OffersPromos from "../../pageComponents/OffersPromos";
import { GetAllOfferPromos } from "@/app/requests/offerPromos";
import makeApiCall from "@/app/utils/makeApiCall";

const fetchData = async (locale) => {
  try {
    // const queryParams = {
    //   pageNo: pageNo,
    //   pageSize: 20,
    //   sortBy: "creationDate",
    //   ascOrDesc: "asc",
    //   [searchField]: searchParam,
    // };
    const response = await makeApiCall(
      GetAllOfferPromos,
      "GET",
      locale,
      null,
      {},
      ""
    );
    return response?.payload;
    // const branchLocationRes = response?.payload?.content;

    // const locationData = await makeApiCall(
    //   fetchLocation,
    //   "GET",
    //   locale,
    //   null,
    //   {},
    //   ""
    // );
    // const locationRes = locationData.payload;
    // setTotalPages(response?.payload?.totalPages);
    // setData({
    //   branchLocationData: branchLocationRes,
    //   locationData: locationRes,
    // });
    // setLoading(false);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const OfferPromosPage = async ({ params: { locale } }) => {
  const data = await fetchData(locale);
  return <OffersPromos data={data} />;
};

export default OfferPromosPage;
