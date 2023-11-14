async function makeApiCall(
  url,
  method = "GET",
  locale = "en",
  data = null,
  headers = {},
  queryParams,
  id
) {
  try {
    const qParamsWithLanguage = { languageCode: locale, ...queryParams };
    const queryString = new URLSearchParams(qParamsWithLanguage).toString();
    const apiUrl =
      method === "GET"
        ? id
          ? `${process.env.NEXT_PUBLIC_BASE_URL}/${url}/${id}?${queryString}`
          : `${process.env.NEXT_PUBLIC_BASE_URL}/${url}?${queryString}`
        : url;

    const options = {
      method,
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
    };
    console.log(options);

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(apiUrl, options);
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || "Something went wrong!");
    }

    return responseData;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

export default makeApiCall;

// export const requestHandleFn = async ({
//   url,
//   searchParams,
//   type = "GET",
//   token,
//   fileUpload = false,
//   inputData,
// }) => {
//   let params = "";

//   if (searchParams) {
//     params = Object.keys(searchParams)
//       .map((key) => {
//         const searchURL = `${key}=${encodeURIComponent(
//           searchParams[key] ? searchParams[key] : ""
//         )}`;

//         return decodeURIComponent(searchURL);
//       })
//       .join("&");
//   }

//   if (type === "POST") {
//     if (url) {
//       let response = await fetch(
//         params
//           ? `${process.env.REACT_APP_API_BASE_URL}${url}?${params}`
//           : `${process.env.REACT_APP_API_BASE_URL}${url}`,
//         fileUpload
//           ? {
//               method: "POST",
//               headers: {
//                 credentials: "include",
//                 Authorization: `Bearer ${window.localStorage.getItem(
//                   "accessToken"
//                 )}`,
//               },
//               body: inputData,
//             }
//           : {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//                 credentials: "include",
//                 Authorization:
//                   token ??
//                   `Bearer ${window.localStorage.getItem("accessToken")}`,
//               },
//               body: JSON.stringify(inputData),
//             }
//       );

//       let jsonEncoded = await response.json();

//       return { data: jsonEncoded };
//     }
//   } else if (type === "PUT") {
//     if (url) {
//       let response = await fetch(
//         params
//           ? `${process.env.REACT_APP_API_BASE_URL}${url}?${params}`
//           : `${process.env.REACT_APP_API_BASE_URL}${url}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             credentials: "include",
//             Authorization:
//               token ?? `Bearer ${window.localStorage.getItem("accessToken")}`,
//           },
//           body: JSON.stringify(inputData),
//         }
//       );

//       let jsonEncoded = await response.json();

//       return { data: jsonEncoded };
//     }
//   } else if (type === "DELETE") {
//     if (url) {
//       let response = await fetch(
//         `${process.env.REACT_APP_API_BASE_URL}${url}`,
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//             credentials: "include",
//             Authorization:
//               token ?? `Bearer ${window.localStorage.getItem("accessToken")}`,
//           },
//           body: null,
//         }
//       );

//       let jsonEncoded = await response.json();

//       return { data: jsonEncoded };
//     }
//   } else {
//     if (url) {
//       let response = await fetch(
//         params
//           ? `${process.env.REACT_APP_API_BASE_URL}${url}?${params}`
//           : `${process.env.REACT_APP_API_BASE_URL}${url}`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             credentials: "include",
//             Authorization:
//               token ?? `Bearer ${window.localStorage.getItem("accessToken")}`,
//           },
//         }
//       );

//       let jsonEncoded = await response.json();

//       return { data: jsonEncoded };
//     } else {
//       return { data: "Url Not Correct." };
//     }
//   }
// };
