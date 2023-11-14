"use client";

import {
  Account,
  UserIcon,
  TransferIcon,
  PercentageIcon,
  BillIcon,
  CardIcon,
  HomeIcon,
  PercentageWithCurve,
  HandIcon,
  NewspaperIcon,
  ContactIcon,
  FaqIcon,
  SettingsIcon,
  BellIcon,
  MapIcon,
} from "@/app/utils/iconImports";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";

const {
  accountsDir,
  myCardsDir,
  offerPromosDir,
  partnersDir,
  branchAtmLocationDir,
  faqDir,
  fundTransferDir,
  billPaymentDir,
  newsEventDir,
  contactDir,
  settingsDir,
  productsDir,
} = require("./moduleDirectories");

const useDashboard = () => {
  const t = useTranslations("Index");
  // const userData = useSelector((state) => state?.persistedReducer);
  const isLoggedIn = useSelector(
    (state) => state?.persistedReducer?.isLoggedIn
  );
  // console.log(userData);
  return [
    {
      title: t("home.pageTitle"),
      href: "/",
      section: null,
      icon: <HomeIcon />,
      header: false,
      hidden: !isLoggedIn,
    },
    {
      title: t("accounts.pageTitle"),
      href: accountsDir,
      icon: <UserIcon />,
      header: "Manage My Money",
      hidden: !isLoggedIn,
    },
    {
      title: t("myCards.myCard"),
      href: myCardsDir,
      section: "Manage My Money",
      icon: <CardIcon />,
      hidden: !isLoggedIn,
    },
    {
      title: t("fundTransfer.pageTitle"),
      href: fundTransferDir,
      section: "Manage My Money",
      icon: <TransferIcon />,
      hidden: !isLoggedIn,
    },
    {
      title: t("billPayment.pageTitle"),
      href: billPaymentDir,
      section: "Manage My Money",
      icon: <BillIcon />,
      hidden: !isLoggedIn,
    },
    //   Product & Services
    {
      title: t("offersPromos.pageTitle"),
      href: offerPromosDir,
      section: "Product & Services",
      header: "Product & Services",
      icon: <PercentageWithCurve />,
      hidden: false,
    },
    // {
    //   title: "Products",
    //   href: "/",
    //   href: accountsDir,
    //   icon: <Account />,
    // },
    {
      title: t("auth.authFooterProduct"),
      href: productsDir,
      section: "Product & Services",
      icon: <HandIcon />,
      hidden: false,
    },
    {
      title: t("newsEvents.pageTitle"),
      href: newsEventDir,
      section: "Product & Services",
      icon: <NewspaperIcon />,
      hidden: false,
    },

    //  Asssistance
    {
      title: t("contact.pageTitle"),
      href: contactDir,
      section: "Assistance",
      header: "Assistance",
      icon: <ContactIcon />,
      hidden: false,
    },
    {
      title: t("branchAtmLocations.pageTitle"),
      href: branchAtmLocationDir,
      section: "Assistance",
      icon: <MapIcon />,
      hidden: false,
    },
    {
      title: t("faq.pageTitle"),
      href: faqDir,
      section: "Assistance",
      icon: <FaqIcon />,
      hidden: false,
    },
    //

    // {
    //   title: "Notifications",
    //   href: "/",
    //   icon: <BellIcon />,
    // },
    {
      title: t("settings.pageTitle"),
      href: settingsDir,
      section: "Assistance",
      icon: <SettingsIcon />,
      hidden: !isLoggedIn,
    },
  ];
};

export default useDashboard;
