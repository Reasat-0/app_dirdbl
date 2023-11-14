import React from "react";

import DTypography from "../DTypography/indedx";

const PageTitle = ({ variant, text, style, hasSubtitle, utilClasses }) => {
  return (
    <>
      {variant === "title" && (
        <DTypography
          variant={"largerBolder"}
          textAccent={"darker"}
          text={text}
          style={{
            marginBottom: hasSubtitle ? "16px" : "48px",
            textAlign: "center",
            ...style,
          }}
        />
      )}

      {variant === "sub-title" && (
        <DTypography
          variant="subtitleNormal"
          style={{
            marginBottom: "48px",
            textAlign: "center",
            ...style,
          }}
          text={text}
          textAccent={"normal"}
        />
      )}
    </>
  );
};

export default PageTitle;
