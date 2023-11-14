"use client";

import React, { useState } from "react";
// import { debounce } from "../utils/debounce";

import { DInputField } from "@/app/utils/imports";
import { useTranslations } from "next-intl";
import { SearchIcon } from "../utils/iconImports";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const useSearch = (searchByFields = []) => {
  const t = useTranslations("Index");
  const [showCross, setShowCross] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchParam, setSearchParam] = useState("");
  const [searchField, setSearchField] = useState(searchByFields[0].field);
  // serchByFields = [{label: 'Title', field: 'title'}]

  const handleSearch = (event) => {
    // const value = event.target.value;
    setSearchParam(searchValue);
    setShowCross(true);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setShowCross(false);
  };

  const handleCross = () => {
    setSearchValue("");
    setShowCross(false);
    setSearchParam("");
  };

  //   const handleSearchBy = (event) => {
  //     const value = event.target.value;
  //     setSearchField(value);
  //   };

  return {
    searchParam,
    searchField,
    searchRender: (
      <DInputField
        value={searchValue}
        name={"search"}
        placeholder={t("common.placeholderSearch")}
        style={{ marginBottom: "1.5rem" }}
        icon={showCross ? <HighlightOffIcon /> : <SearchIcon />}
        // handleChange={(e) => setSearchQuery(e.target.value)}
        handleChange={handleChange}
        handleIconClick={!showCross ? handleSearch : handleCross}
      />
    ),
  };
};

export default useSearch;
