import { BranchesAtmLocations } from "@/app/utils/imports";
import React from "react";

const BranchLocations = ({ params }) => {
  // const fetchData = async () => {
  //   try {
  //     setLoading(true);
  //     const queryParams = {
  //       pageNo: pageNo,
  //       pageSize: 20,
  //       sortBy: "creationDate",
  //       ascOrDesc: "asc",
  //       [searchField]: searchParam,
  //     };
  //     const response = await makeApiCall(
  //       GetAllFaqWP,
  //       "GET",
  //       locale,
  //       null,
  //       {},
  //       queryParams
  //     );
  //     console.log("Response....", response);
  //     setTotalPages(response?.payload?.totalPages);
  //     setFaqData(response?.payload?.content);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  return <BranchesAtmLocations type={params?.type} locale={params?.locale} />;
};

export default BranchLocations;
