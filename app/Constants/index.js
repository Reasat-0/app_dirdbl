import card1 from "../../public/images/cards/Group 230.svg";
import card2 from "../../public/images/cards/Group 231.svg";
// import card3 from "../../public/images/cards/Group 232.svg";

import bkash from "../../public/images/mobile-banking/bkash.svg";
import upay from "../../public/images/mobile-banking/upay.svg";
import nagad from "../../public/images/mobile-banking/nagad.svg";

import bill1 from "../../public/images/partners.png";
import partnerImage from "@/public/images/partners.png";
import TkIcon from "@/app/newComponetns/Icons/TkIcon";
import rocket from "@/public/images/mobile-banking/rocket.svg";
import news from "@/public/images/news.svg";
import offerImg from "@/public/images/offer.png";

import {
  Account,
  EducationICon,
  ElectricityIcon,
  GasIcon,
  Global,
  PercentageIcon,
  PercentageWithCurve,
  WaterIcon,
} from "@/app/utils/iconImports";

import {
  TransferIcon,
  BillIcon,
  CardIcon,
  UserIcon,
  GlobalLargeIcon,
} from "@/app/utils/iconImports";

export const languages = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "bn",
    label: "বাংলা",
  },
];

export const signUpProcess = [
  {
    name: "process",
    slug: "new_account_card",
    options: [
      {
        name: "apply",
        slug: "apply",
      },
      {
        name: "create_go",
        slug: "create",
      },
    ],
  },
  {
    name: "create_via",
    slug: "create_via",
    options: [
      {
        name: "have_account",
        slug: "account",
      },
      {
        name: "have_card",
        slug: "card",
      },
    ],
  },
];

export const myCards = [
  {
    id: 1,
    image: {
      fileUrl: card1,
    },
  },
  {
    id: 2,
    image: {
      fileUrl: card2,
    },
  },
  {
    id: 3,
    image: {
      fileUrl: card1,
    },
  },
];

export const cardActions = [
  {
    slug: "request-e-statement",
    url: "/",
  },
  {
    slug: "check-limit",
    url: "/",
  },
  {
    slug: "report-lost-stolen",
    url: "/",
  },
  {
    slug: "temporary-lock",
    url: "/",
  },
];

export const upcommingBills = [
  {
    id: 0,
    title: "Electricity Bill",
    subTitle: "10th Janurary 2023",
    imgSrc: bill1.src,
  },
  {
    id: 1,
    title: "Electricity Bill",
    subTitle: "10th Janurary 2023",
    imgSrc: bill1.src,
  },
];

export const favouriteTransfers = [
  {
    id: 0,
    title: "Electricity Bill",
    subTitle: "10th Janurary 2023",
    imgSrc: bill1.src,
  },
  {
    id: 1,
    title: "Electricity Bill",
    subTitle: "10th Janurary 2023",
    imgSrc: bill1.src,
  },
];

export const beneficiaryData = {
  regularAccount: [
    {
      id: 1,
      name: "HAbibul Bashar Sumon",
      accountNumber: "1232423234",
      transferType: "EFTN To Other Bank",
    },
    {
      id: 2,
      name: "HAbibul Bashar Sumon",
      accountNumber: "1232423234",
      transferType: "EFTN To Other Bank",
    },
    {
      id: 3,
      name: "HAbibul Bashar Sumon",
      accountNumber: "1232423234",
      transferType: "EFTN To Other Bank",
    },
  ],
  mobileWallet: [
    {
      id: 1,
      name: "HAbibul Bashar Sumon",
      accountNumber: "1232423234",
      transferType: "Bkash",
    },
    {
      id: 2,
      name: "HAbibul Bashar Sumon",
      accountNumber: "1232423234",
      transferType: "Nagad",
    },
  ],
};

export const mblBankingOptions = [
  {
    id: 1,
    name: "Bkash",
    value: "bkash",
    img: bkash.src,
  },
  {
    id: 2,
    name: "Upay",
    value: "upay",
    img: upay.src,
  },
  {
    id: 3,
    name: "Nagad",
    value: "nagad",
    img: nagad.src,
  },
  {
    id: 4,
    name: "Rocket",
    value: "rocket",
    img: rocket.src,
  },
];

export const accounts = [
  {
    id: 0,
    title: "Savings Account",
    accountNumber: "434354544354",
    balance: "5400.00",
    icon: <TkIcon />,
  },
  {
    id: 1,
    title: "Current Account",
    accountNumber: "434354544354",
    balance: "5400.00",
    icon: <TkIcon />,
  },
];

export const actions = {
  requestEStatement: "e-statement",
  requestAChequeBook: "request-chequebook",
  last5Transactions: "last-5-transactions",
  temporaryLock: "temporary-lock",
};

export const last5transactions = [
  {
    id: 1,
    title: "ATM Withdrawal",
    type: "credit",
    amount: "5000.00",
    date: "12-01-2022",
    time: "10:34 PM",
  },
  {
    id: 2,
    title: "ATM Withdrawal1",
    type: "credit",
    amount: "5000.00",
    date: "12-01-2022",
    time: "10:34 PM",
  },
  {
    id: 3,
    title: "ATM Withdrawal2",
    type: "debit",
    amount: "5000.00",
    date: "12-01-2022",
    time: "10:34 PM",
  },
  {
    id: 4,
    title: "ATM Withdrawal3",
    type: "credit",
    amount: "5000.00",
    date: "12-01-2022",
    time: "10:34 PM",
  },
];

export const billPaymentOrganizations = [
  { id: 1, title: "Education", image: <EducationICon /> },
  { id: 2, title: "Electricity", image: <ElectricityIcon /> },
  { id: 3, title: "Water", image: <WaterIcon /> },
  { id: 4, title: "Gas", image: <GasIcon /> },
  { id: 5, title: "Credit Card", image: <Account /> },
  { id: 6, title: "Internet", image: <GlobalLargeIcon /> },
];

export const quickLinks = [
  {
    id: 0,
    name: "Fund Transfers",
    slug: "fund-transfer",
    image: <TransferIcon />,
  },
  {
    id: 1,
    name: "Bill Payments",
    slug: "bill-payment",
    image: <BillIcon />,
  },
  {
    id: 2,
    name: "My Cards",
    slug: "my-cards",
    image: <CardIcon />,
  },
  {
    id: 3,
    name: "My Accounts",
    slug: "accounts",
    image: <UserIcon />,
  },
];

export const partnerType = [
  {
    id: 1,
    title: "Discount Partners",
    subTitle: "A line of text will be here",
    slug: "discount",
    icon: <PercentageIcon />,
  },
  {
    id: 2,
    title: "0% Swipeit Partners",
    subTitle: "A line of text will be here",
    slug: "swipeit",
    icon: <PercentageWithCurve />,
  },
];

export const newsEventData = [
  {
    id: 0,
    title: "Time to Celebrate 25th Year Anniversary  of Dhaka Bank",
    longDescription:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    date: "12th October",
    read: "12 min read",
    img: news,
  },
  {
    id: 1,
    title: "Time to Celebrate 25th Year Anniversary  of Dhaka Bank",
    longDescription:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    date: "12th October",
    read: "12 min read",
    img: news,
  },
];

export const discountPartners = [
  {
    id: 1,
    title: "Total Air Service",
    shortDescription: "A line of text",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi ex, dictum sagittis quam eget, accumsan sodales odio. Etiam scelerisque libero ac lacus ultrices, vel sagittis urna hendrerit. Aliquam diam eros, ullamcorper sed pellentesque ut, laoreet eu libero. In ac dolor lorem. Cras tempus porttitor ex, condimentum porta sapien aliquet ut. Aenean pulvinar enim vitae dui laoreet fermentum. Quisque tempus luctus nulla, a mattis nunc rhoncus eget. Nulla eleifend rutrum massa, nec bibendum nisl consectetur porttitor. Vestibulum efficitur dui massa, ac fringilla est lobortis vitae. Phasellus nulla augue, hendrerit venenatis vehicula a, porttitor in tortor. Vivamus facilisis massa magna, blandit fermentum neque ornare vel. Curabitur fringilla ligula ut ligula pellentesque, nec eleifend diam pellentesque. Integer scelerisque, justo at commodo faucibus, sem elit fringilla enim, sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi ex, dictum sagittis quam eget, accumsan sodales odio. Etiam scelerisque libero ac lacus ultrices, vel sagittis urna hendrerit. Aliquam diam eros, ullamcorper sed pellentesque ut, laoreet eu libero. In ac dolor lorem. Cras tempus porttitor ex, condimentum porta sapien aliquet ut. Aenean pulvinar enim vitae dui laoreet fermentum. Quisque tempus luctus nulla, a mattis nunc rhoncus eget. Nulla eleifend rutrum massa, nec bibendum nisl consectetur porttitor. Vestibulum efficitur dui massa, ac fringilla est lobortis vitae. Phasellus nulla augue, hendrerit venenatis vehicula a, porttitor in tortor. Vivamus facilisis massa magna, blandit fermentum neque ornare vel. Curabitur fringilla ligula ut ligula pellentesque, nec eleifend diam pellentesque. Integer scelerisque, justo at commodo faucibus, sem elit fringilla enim, sit amet ",
    img: partnerImage,
    company: {
      id: 1,
      name: "WASA",
      webAddress: "www.wasa.com",
      fileObject: null,
    },
    contacts: [
      {
        id: 17,
        type: "phone",
        value: "01761783743",
      },
    ],
  },
  {
    id: 2,
    title: "Total Air Service",
    shortDescription: "A line of text",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi ex, dictum sagittis quam eget, accumsan sodales odio. Etiam scelerisque libero ac lacus ultrices, vel sagittis urna hendrerit. Aliquam diam eros, ullamcorper sed pellentesque ut, laoreet eu libero. In ac dolor lorem. Cras tempus porttitor ex, condimentum porta sapien aliquet ut. Aenean pulvinar enim vitae dui laoreet fermentum. Quisque tempus luctus nulla, a mattis nunc rhoncus eget. Nulla eleifend rutrum massa, nec bibendum nisl consectetur porttitor. Vestibulum efficitur dui massa, ac fringilla est lobortis vitae. Phasellus nulla augue, hendrerit venenatis vehicula a, porttitor in tortor. Vivamus facilisis massa magna, blandit fermentum neque ornare vel. Curabitur fringilla ligula ut ligula pellentesque, nec eleifend diam pellentesque. Integer scelerisque, justo at commodo faucibus, sem elit fringilla enim, sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi ex, dictum sagittis quam eget, accumsan sodales odio. Etiam scelerisque libero ac lacus ultrices, vel sagittis urna hendrerit. Aliquam diam eros, ullamcorper sed pellentesque ut, laoreet eu libero. In ac dolor lorem. Cras tempus porttitor ex, condimentum porta sapien aliquet ut. Aenean pulvinar enim vitae dui laoreet fermentum. Quisque tempus luctus nulla, a mattis nunc rhoncus eget. Nulla eleifend rutrum massa, nec bibendum nisl consectetur porttitor. Vestibulum efficitur dui massa, ac fringilla est lobortis vitae. Phasellus nulla augue, hendrerit venenatis vehicula a, porttitor in tortor. Vivamus facilisis massa magna, blandit fermentum neque ornare vel. Curabitur fringilla ligula ut ligula pellentesque, nec eleifend diam pellentesque. Integer scelerisque, justo at commodo faucibus, sem elit fringilla enim, sit amet ",
    img: partnerImage,
    company: {
      id: 1,
      name: "WASA",
      webAddress: "www.wasa.com",
      fileObject: null,
    },
    contacts: [
      {
        id: 17,
        type: "phone",
        value: "01761783743",
      },
    ],
  },
  {
    id: 3,
    title: "Total Air Service",
    shortDescription: "A line of text",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi ex, dictum sagittis quam eget, accumsan sodales odio. Etiam scelerisque libero ac lacus ultrices, vel sagittis urna hendrerit. Aliquam diam eros, ullamcorper sed pellentesque ut, laoreet eu libero. In ac dolor lorem. Cras tempus porttitor ex, condimentum porta sapien aliquet ut. Aenean pulvinar enim vitae dui laoreet fermentum. Quisque tempus luctus nulla, a mattis nunc rhoncus eget. Nulla eleifend rutrum massa, nec bibendum nisl consectetur porttitor. Vestibulum efficitur dui massa, ac fringilla est lobortis vitae. Phasellus nulla augue, hendrerit venenatis vehicula a, porttitor in tortor. Vivamus facilisis massa magna, blandit fermentum neque ornare vel. Curabitur fringilla ligula ut ligula pellentesque, nec eleifend diam pellentesque. Integer scelerisque, justo at commodo faucibus, sem elit fringilla enim, sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi ex, dictum sagittis quam eget, accumsan sodales odio. Etiam scelerisque libero ac lacus ultrices, vel sagittis urna hendrerit. Aliquam diam eros, ullamcorper sed pellentesque ut, laoreet eu libero. In ac dolor lorem. Cras tempus porttitor ex, condimentum porta sapien aliquet ut. Aenean pulvinar enim vitae dui laoreet fermentum. Quisque tempus luctus nulla, a mattis nunc rhoncus eget. Nulla eleifend rutrum massa, nec bibendum nisl consectetur porttitor. Vestibulum efficitur dui massa, ac fringilla est lobortis vitae. Phasellus nulla augue, hendrerit venenatis vehicula a, porttitor in tortor. Vivamus facilisis massa magna, blandit fermentum neque ornare vel. Curabitur fringilla ligula ut ligula pellentesque, nec eleifend diam pellentesque. Integer scelerisque, justo at commodo faucibus, sem elit fringilla enim, sit amet ",
    img: partnerImage,
    company: {
      id: 1,
      name: "WASA",
      webAddress: "www.wasa.com",
      fileObject: null,
    },
    contacts: [
      {
        id: 17,
        type: "phone",
        value: "01761783743",
      },
    ],
  },
  {
    id: 4,
    title: "Total Air Service",
    shortDescription: "A line of text",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi ex, dictum sagittis quam eget, accumsan sodales odio. Etiam scelerisque libero ac lacus ultrices, vel sagittis urna hendrerit. Aliquam diam eros, ullamcorper sed pellentesque ut, laoreet eu libero. In ac dolor lorem. Cras tempus porttitor ex, condimentum porta sapien aliquet ut. Aenean pulvinar enim vitae dui laoreet fermentum. Quisque tempus luctus nulla, a mattis nunc rhoncus eget. Nulla eleifend rutrum massa, nec bibendum nisl consectetur porttitor. Vestibulum efficitur dui massa, ac fringilla est lobortis vitae. Phasellus nulla augue, hendrerit venenatis vehicula a, porttitor in tortor. Vivamus facilisis massa magna, blandit fermentum neque ornare vel. Curabitur fringilla ligula ut ligula pellentesque, nec eleifend diam pellentesque. Integer scelerisque, justo at commodo faucibus, sem elit fringilla enim, sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi ex, dictum sagittis quam eget, accumsan sodales odio. Etiam scelerisque libero ac lacus ultrices, vel sagittis urna hendrerit. Aliquam diam eros, ullamcorper sed pellentesque ut, laoreet eu libero. In ac dolor lorem. Cras tempus porttitor ex, condimentum porta sapien aliquet ut. Aenean pulvinar enim vitae dui laoreet fermentum. Quisque tempus luctus nulla, a mattis nunc rhoncus eget. Nulla eleifend rutrum massa, nec bibendum nisl consectetur porttitor. Vestibulum efficitur dui massa, ac fringilla est lobortis vitae. Phasellus nulla augue, hendrerit venenatis vehicula a, porttitor in tortor. Vivamus facilisis massa magna, blandit fermentum neque ornare vel. Curabitur fringilla ligula ut ligula pellentesque, nec eleifend diam pellentesque. Integer scelerisque, justo at commodo faucibus, sem elit fringilla enim, sit amet ",
    img: partnerImage,
    company: {
      id: 1,
      name: "WASA",
      webAddress: "www.wasa.com",
      fileObject: null,
    },
    contacts: [
      {
        id: 17,
        type: "phone",
        value: "01761783743",
      },
    ],
  },
  {
    id: 5,
    title: "Total Air Service",
    shortDescription: "A line of text",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi ex, dictum sagittis quam eget, accumsan sodales odio. Etiam scelerisque libero ac lacus ultrices, vel sagittis urna hendrerit. Aliquam diam eros, ullamcorper sed pellentesque ut, laoreet eu libero. In ac dolor lorem. Cras tempus porttitor ex, condimentum porta sapien aliquet ut. Aenean pulvinar enim vitae dui laoreet fermentum. Quisque tempus luctus nulla, a mattis nunc rhoncus eget. Nulla eleifend rutrum massa, nec bibendum nisl consectetur porttitor. Vestibulum efficitur dui massa, ac fringilla est lobortis vitae. Phasellus nulla augue, hendrerit venenatis vehicula a, porttitor in tortor. Vivamus facilisis massa magna, blandit fermentum neque ornare vel. Curabitur fringilla ligula ut ligula pellentesque, nec eleifend diam pellentesque. Integer scelerisque, justo at commodo faucibus, sem elit fringilla enim, sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi ex, dictum sagittis quam eget, accumsan sodales odio. Etiam scelerisque libero ac lacus ultrices, vel sagittis urna hendrerit. Aliquam diam eros, ullamcorper sed pellentesque ut, laoreet eu libero. In ac dolor lorem. Cras tempus porttitor ex, condimentum porta sapien aliquet ut. Aenean pulvinar enim vitae dui laoreet fermentum. Quisque tempus luctus nulla, a mattis nunc rhoncus eget. Nulla eleifend rutrum massa, nec bibendum nisl consectetur porttitor. Vestibulum efficitur dui massa, ac fringilla est lobortis vitae. Phasellus nulla augue, hendrerit venenatis vehicula a, porttitor in tortor. Vivamus facilisis massa magna, blandit fermentum neque ornare vel. Curabitur fringilla ligula ut ligula pellentesque, nec eleifend diam pellentesque. Integer scelerisque, justo at commodo faucibus, sem elit fringilla enim, sit amet ",
    img: partnerImage,
    company: {
      id: 1,
      name: "WASA",
      webAddress: "www.wasa.com",
      fileObject: null,
    },
    contacts: [
      {
        id: 17,
        type: "phone",
        value: "01761783743",
      },
    ],
  },
];

export const productsType = [
  {
    id: 1,
    title: "Savings Account",
    subTitle: "It is designed to meet up your business financial needs.",
    slug: "discount",
    icon: <PercentageIcon />,
  },
  {
    id: 2,
    title: "Current Account",
    subTitle: "It is designed to meet up your business financial needs.",
    slug: "swipeit",
    icon: <PercentageWithCurve />,
  },
  {
    id: 3,
    title: "Car Loans",
    subTitle: "It is designed to meet up your business financial needs.",
    slug: "discount",
    icon: <PercentageIcon />,
  },
  {
    id: 4,
    title: "Home Loans",
    subTitle: "It is suitable for most of the individuals",
    slug: "swipeit",
    icon: <PercentageWithCurve />,
  },
  {
    id: 5,
    title: "Corporate Banking",
    subTitle: "It is suitable for most of the individuals.",
    slug: "discount",
    icon: <PercentageIcon />,
  },
];

export const offersPromos = [
  {
    offers: [
      {
        id: 0,
        title: "Title Text",
        subTitle: "A line of text will be here",
        description:
          "AirAsia, the world’s best low cost airline for nine consecutive years, recommenced direct flights from Dhaka to Kuala Lumpur with the slogan “Now everyone can fly” tapping into the vast market with over 18 million populations from 10 July 2015 onwards. With the aim of flying make affordable for everyone. At AirAsia, we see ourselves as not a typical airline operator but more of a people company that happens to be in the airline business. Understanding people enables us to realize the true needs of discerning traveler and provide paramount services and products to deliver utmost satisfaction to our guests. AirAsia has brought a revolution in air travel with more and more people around the region choosing it as their preferred choice of air transport. As we continuously strive to promote air travel, we also seek to create excitement amongst our guests with our range of innovative and personalized services",
        img: offerImg,
      },
      {
        id: 1,
        title: "Title Text",
        subTitle: "A line of text will be here",
        description:
          "AirAsia, the world’s best low cost airline for nine consecutive years, recommenced direct flights from Dhaka to Kuala Lumpur with the slogan “Now everyone can fly” tapping into the vast market with over 18 million populations from 10 July 2015 onwards. With the aim of flying make affordable for everyone. At AirAsia, we see ourselves as not a typical airline operator but more of a people company that happens to be in the airline business. Understanding people enables us to realize the true needs of discerning traveler and provide paramount services and products to deliver utmost satisfaction to our guests. AirAsia has brought a revolution in air travel with more and more people around the region choosing it as their preferred choice of air transport. As we continuously strive to promote air travel, we also seek to create excitement amongst our guests with our range of innovative and personalized services",
        img: offerImg,
      },
      ,
      {
        id: 2,
        title: "Title Text",
        subTitle: "A line of text will be here",
        description:
          "AirAsia, the world’s best low cost airline for nine consecutive years, recommenced direct flights from Dhaka to Kuala Lumpur with the slogan “Now everyone can fly” tapping into the vast market with over 18 million populations from 10 July 2015 onwards. With the aim of flying make affordable for everyone. At AirAsia, we see ourselves as not a typical airline operator but more of a people company that happens to be in the airline business. Understanding people enables us to realize the true needs of discerning traveler and provide paramount services and products to deliver utmost satisfaction to our guests. AirAsia has brought a revolution in air travel with more and more people around the region choosing it as their preferred choice of air transport. As we continuously strive to promote air travel, we also seek to create excitement amongst our guests with our range of innovative and personalized services",
        img: offerImg,
      },
      {
        id: 3,
        title: "Title Text",
        subTitle: "A line of text will be here",
        description:
          "AirAsia, the world’s best low cost airline for nine consecutive years, recommenced direct flights from Dhaka to Kuala Lumpur with the slogan “Now everyone can fly” tapping into the vast market with over 18 million populations from 10 July 2015 onwards. With the aim of flying make affordable for everyone. At AirAsia, we see ourselves as not a typical airline operator but more of a people company that happens to be in the airline business. Understanding people enables us to realize the true needs of discerning traveler and provide paramount services and products to deliver utmost satisfaction to our guests. AirAsia has brought a revolution in air travel with more and more people around the region choosing it as their preferred choice of air transport. As we continuously strive to promote air travel, we also seek to create excitement amongst our guests with our range of innovative and personalized services",
        img: offerImg,
      },
      {
        id: 4,
        title: "Title Text",
        subTitle: "A line of text will be here",
        description:
          "AirAsia, the world’s best low cost airline for nine consecutive years, recommenced direct flights from Dhaka to Kuala Lumpur with the slogan “Now everyone can fly” tapping into the vast market with over 18 million populations from 10 July 2015 onwards. With the aim of flying make affordable for everyone. At AirAsia, we see ourselves as not a typical airline operator but more of a people company that happens to be in the airline business. Understanding people enables us to realize the true needs of discerning traveler and provide paramount services and products to deliver utmost satisfaction to our guests. AirAsia has brought a revolution in air travel with more and more people around the region choosing it as their preferred choice of air transport. As we continuously strive to promote air travel, we also seek to create excitement amongst our guests with our range of innovative and personalized services",
        img: offerImg,
      },
      {
        id: 5,
        title: "Title Text",
        subTitle: "A line of text will be here",
        description:
          "AirAsia, the world’s best low cost airline for nine consecutive years, recommenced direct flights from Dhaka to Kuala Lumpur with the slogan “Now everyone can fly” tapping into the vast market with over 18 million populations from 10 July 2015 onwards. With the aim of flying make affordable for everyone. At AirAsia, we see ourselves as not a typical airline operator but more of a people company that happens to be in the airline business. Understanding people enables us to realize the true needs of discerning traveler and provide paramount services and products to deliver utmost satisfaction to our guests. AirAsia has brought a revolution in air travel with more and more people around the region choosing it as their preferred choice of air transport. As we continuously strive to promote air travel, we also seek to create excitement amongst our guests with our range of innovative and personalized services",
        img: offerImg,
      },
    ],
    promos: [
      {
        id: 0,
        title: "Title Text",
        subTitle: "A line of text will be here",
        img: offerImg.src,
      },
      {
        id: 1,
        title: "Title Text",
        subTitle: "A line of text will be here",
        img: offerImg.src,
      },
      ,
      {
        id: 2,
        title: "Title Text",
        subTitle: "A line of text will be here",
        img: offerImg.src,
      },
      {
        id: 3,
        title: "Title Text",
        subTitle: "A line of text will be here",
        img: offerImg.src,
      },
    ],
  },
];
