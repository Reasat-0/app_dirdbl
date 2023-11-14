import React from "react";

const ErrorAlert = ({ title, style, alignTextHorizontal }) => {
  return (
    <div
      className={`invalid-feedback d-block ${
        alignTextHorizontal ? alignTextHorizontal : "text-start"
      }`}
      style={{ marginLeft: "4px", ...style }}
    >
      {title}
    </div>
  );
};

export default ErrorAlert;
