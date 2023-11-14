"use client";

// Normal Components...
import CustomContainer from "../newComponetns/Container";
import ContentContainer from "../newComponetns/ContentContainer";
import DAutoComplete from "../newComponetns/DAutoComplete";
import DButton from "../newComponetns/DButton";
import DDatePicker from "../newComponetns/DDatePicker";
import DImage from "../newComponetns/DImage";
import DInputField from "../newComponetns/DInputField";
import DSelect from "../newComponetns/DSelect";
import DTypography from "../newComponetns/DTypography/indedx";
import ErrorAlert from "../newComponetns/ErrorAlert";
import PageTitle from "../newComponetns/PageTitle";
import IconWrapper from "../newComponetns/IconWrapper";
import IconImageWrapper from "../newComponetns/IconImageWrapper";
import DAccordion from "../newComponetns/DAccordion";
import DRadioBtn from "../newComponetns/DRadioBtn";
import DPagination from "../newComponetns/DPagination";

import DTable from "../newComponetns/DTable";
import CustomTab from "../newComponetns/CustomTab";
// Cards...
import AccountInfoCard from "../newComponetns/Cards/AccountInfoCard";
import BeneficiaryCard from "../newComponetns/Cards/BeneficiaryCard";
import ImageCard from "../newComponetns/Cards/ImageCard";
import IconCard from "../newComponetns/Cards/IconCard";
import MainCard from "../newComponetns/Cards/MainCard";
import SimpleCard from "../newComponetns/Cards/SimpleCard";
import OfferPromoCard from "../newComponetns/Cards/OfferPromoCard";
import BranchCard from "../newComponetns/Cards/BranchCard";
// Sliders...
import OfferPromoSlider from "../newComponetns/OfferPromoSlider";

// Page Components ==================== >>>>>>>>>>>>>>>
import Home from "../pageComponents/Home";
import Nav from "../newComponetns/Nav";
import Partners from "../pageComponents/Partners";
import SinglePage from "../pageComponents/SinglePage";
import BranchesAtmLocations from "../pageComponents/BranchAtmLocations";
import MyCards from "../pageComponents/MyCards";
import CardActions from "../pageComponents/MyCards/Actions";
import RequestEStatement from "../pageComponents/CommonPages/RequestEStatement";
import CheckLimit from "../pageComponents/CheckLimit";
import TemporaryLock from "../pageComponents/CommonPages/TemporaryLock";
import LostOrLock from "../pageComponents/CommonPages/ReportLostOrStolen";
import RequestAChequebook from "../pageComponents/CommonPages/RequestAChequebook";
import Last5Transactions from "../pageComponents/CommonPages/Last5Transactions";
import Products from "../pageComponents/Products";

// auth....
import SignIn from "../pageComponents/Auth/SignIn";
import SignUp from "../pageComponents/Auth/SignUp";
import AuthFooter from "../newComponetns/AuthFooter";
import CreateGoAccount from "../pageComponents/Auth/CreateGoAccount";
import VerificationWithOTP from "../pageComponents/Verification/VerificationWithOtp";
import VerificationSuccess from "../pageComponents/Verification/VerificationSuccess";
import SignUpForm from "../pageComponents/Auth/CreateGoAccount/SignUpForm";
import SetUpProfile from "../pageComponents/CommonPages/SetUpProfile";

// Accounts
import Accounts from "../pageComponents/Accounts";
import SingleAccount from "../pageComponents/Accounts/SingleAccount";

// Upcomming Bills...
import UpcomingBills from "../pageComponents/UpcommingBills";

// Bill pAYMENT
import BillPayment from "../pageComponents/BillPayment";
import PayAction from "../pageComponents/BillPayment/payAction";

// Fund transfer...
import FundTransfer from "../pageComponents/FundTransfer";
import RegularTransfer from "../pageComponents/FundTransfer/RegularTransfer";
import EftnTransfer from "../pageComponents/FundTransfer/EftnTransfer";

import Beneficiary from "../pageComponents/Beneficiary";
import AddBeneficiary from "../pageComponents/Beneficiary/AddBeneficiary";

import FileComplaint from "../pageComponents/FileComplaint";
import DblContact from "../pageComponents/DblContact";

import Settings from "@/app/pageComponents/Settings";

export {
  CustomContainer,
  ContentContainer,
  DAutoComplete,
  DButton,
  DDatePicker,
  DImage,
  DInputField,
  DSelect,
  DTypography,
  ErrorAlert,
  PageTitle,
  IconWrapper,
  DAccordion,
  DRadioBtn,
  DPagination,
  DTable,
  CustomTab,

  //   ----
  AccountInfoCard,
  BeneficiaryCard,
  ImageCard,
  IconCard,
  IconImageWrapper,
  MainCard,
  SimpleCard,
  OfferPromoCard,
  BranchCard,

  // ---
  OfferPromoSlider,

  //   ----
  Home,
  Nav,
  Partners,
  SinglePage,
  BranchesAtmLocations,
  MyCards,
  CardActions,
  // common pages
  RequestEStatement,
  CheckLimit,
  LostOrLock,
  RequestAChequebook,
  Last5Transactions,
  Products,
  TemporaryLock,
  SignIn,
  SignUp,
  SignUpForm,
  SetUpProfile,
  AuthFooter,
  CreateGoAccount,

  // Verification
  VerificationWithOTP,
  VerificationSuccess,

  // accounts
  Accounts,
  SingleAccount,

  // upcomming
  UpcomingBills,

  // Bill payment
  BillPayment,
  PayAction,

  // Fund transfer
  FundTransfer,
  RegularTransfer,
  EftnTransfer,

  // Beneficiay...
  Beneficiary,
  AddBeneficiary,
  //
  FileComplaint,
  DblContact,
  Settings,
};
