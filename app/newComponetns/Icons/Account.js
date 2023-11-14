import React from "react";

const Account = ({ innerFill }) => {
  return (
    <svg
      width="28"
      height="20"
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3C0 1.34315 1.34315 0 3 0H25C26.6569 0 28 1.34315 28 3V4H0V3ZM0 6H28V17C28 18.6569 26.6569 20 25 20H3C1.34315 20 0 18.6569 0 17V6ZM16 13C15.4477 13 15 13.4477 15 14C15 14.5523 15.4477 15 16 15H22C22.5523 15 23 14.5523 23 14C23 13.4477 22.5523 13 22 13H16Z"
        fill={innerFill || "white"}
      />
    </svg>
  );
};

export default Account;
