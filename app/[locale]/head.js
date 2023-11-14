"use client";

import { useEffect } from "react";

export default function Head() {
  useEffect(() => {
    import("bootstrap");
  }, []);

  return (
    <>
      <title>{`DBL Go`}</title>
      <meta
        name="description"
        content="This is the web version of DBL Mobile banking app...."
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
