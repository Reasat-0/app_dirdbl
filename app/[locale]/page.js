import Link from "next-intl/link";

import "@/app/styles/app.scss";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { Home } from "../utils/imports";
import React from "react";

export default function Index() {
  // const t = useTranslations("Index");
  return (
    <>
      {/* <div className="" style={{ padding: "10px", margin: "10px" }}>
        <Link href="/" locale="en">
          English
        </Link>
        <Link href="/" locale="bn">
          Bangla
        </Link>
      </div> */}
      {/* <h1>{t("title")}</h1> */}
      <Home />
    </>
  );
}
