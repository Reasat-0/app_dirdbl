"use client";

// import useSort from "./useSort";
// import useFilter from "./useFilter";
import useSearch from "./useSearch";

/***
 * Search Filter
 * @param sorts
 * @param filters
 * @param searchByItems
 * @returns {{sortParam: string, searchField: string, sortType: string, searchParam: string, sortRender, filterField: string, filterParam: string, filterRender, searchRender}}
 */
const useSearchFilter = (sorts = [], filters = [], searchByItems = []) => {
  //   const { sortRender, sortType, sortParam } = useSort(sorts);
  //   const { filterRender, filterField, filterParam } = useFilter(filters);
  //   console.log(searchByItems);

  const { searchRender, searchField, searchParam } = useSearch(searchByItems);

  return {
    // sortRender,
    // sortType,
    // sortParam,
    // filterRender,
    // filterField,
    // filterParam,
    // --- needed below ----
    searchRender,
    searchField,
    searchParam,
  };
};

export default useSearchFilter;
