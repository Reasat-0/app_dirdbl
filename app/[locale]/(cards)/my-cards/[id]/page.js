import React from "react";

import { ContentContainer, CardActions } from "@/app/utils/imports";

const CardPage = ({ params }) => {
  return (
    <ContentContainer>
      <CardActions params={params} />
    </ContentContainer>
  );
};

export default CardPage;
