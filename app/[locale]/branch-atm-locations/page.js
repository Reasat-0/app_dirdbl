import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

import {
  ActiveLocation,
  InactiveLocation,
  RightArrow,
} from "@/app/utils/iconImports";
import {
  ContentContainer,
  IconCard,
  PageTitle,
  BranchCard,
} from "@/app/utils/imports";

const Post = () => {
  const t = useTranslations("Index");

  const data = [
    {
      title: t("branchAtmLocations.branchesTitle"),
      subTitle: t("branchAtmLocations.branchSubTitle"),
      icon: <ActiveLocation />,
    },
    {
      title: t("branchAtmLocations.atmsTitle"),
      subTitle: t("branchAtmLocations.atmsSubTitle"),
      icon: <InactiveLocation />,
    },
  ];
  return (
    <ContentContainer>
      <PageTitle
        variant={"title"}
        hasSubtitle={true}
        text={t("branchAtmLocations.pageTitle")}
      />
      <PageTitle
        variant={"sub-title"}
        text={t("branchAtmLocations.locationOnMap")}
      />

      <div className="card-section mt-3">
        {data.map((item, idx) => (
          <Link
            href={{
              pathname: "/branch-atm-locations/branches-atm",
              query: { type: idx === 0 ? "branches" : "atm" },
            }}
            passHref
            className="next-link"
            key={idx}
          >
            <IconCard
              size="large"
              cardData={item}
              navigateIcon={<RightArrow />}
            />
          </Link>
        ))}
      </div>
    </ContentContainer>
  );
};

export default Post;
