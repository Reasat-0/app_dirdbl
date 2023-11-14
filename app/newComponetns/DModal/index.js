"use client";

import React, { useContext, useEffect, useState } from "react";
import Slider from "../Slider";

import Image from "next/image";

import onboarding1 from "../../../public/images/onboarding/Group1.png";
import onboarding2 from "../../../public/images/onboarding/Group2.png";
import onboarding3 from "../../../public/images/onboarding/Group3.png";
import CustomSlider from "../Slider";

import { Box, Modal } from "@mui/material";
import { useTranslations } from "next-intl";

const DModal = () => {
  const t = useTranslations("Index");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const sliderData = [
    {
      title: t("onBoarding.1stPage.title"),
      subTitle: t("onBoarding.1stPage.subTitle"),
      image: onboarding1,
    },
    {
      title: t("onBoarding.2ndPage.title"),
      subTitle: t("onBoarding.2ndPage.subTitle"),
      image: onboarding2,
    },
    {
      title: t("onBoarding.3rdPage.title"),
      subTitle: t("onBoarding.3rdPage.subTitle"),
      image: onboarding3,
    },
  ];

  // const images = [onboarding1, onboarding2, onboarding3];
  const [onboardingData, setOnBoardingData] = useState(sliderData);

  // const onboardingData = [
  //   {
  //     title: "Instant Savings Account",
  //     subTitle:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting",
  //     image: onboarding1,
  //   },
  //   {
  //     title: "Easy Money Transfer",
  //     subTitle:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting",
  //     image: onboarding2,
  //   },
  //   {
  //     title: "Bill Pay At Your Hand",
  //     subTitle:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting",
  //     image: onboarding3,
  //   },
  // ];
  const toggleModal = () => {
    setShowModal(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    // border: '2px solid #000',
    boxShadow: 24,
    padding: "24px",
  };

  useEffect(() => {
    // console.log(modalElement);
    handleOpen(true);
  }, []);
  return (
    <>
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button> */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CustomSlider
            data={onboardingData}
            buttonText={"BUtton"}
            toggleModal={toggleModal}
            handleClose={handleClose}
          />
        </Box>
      </Modal>
      {/* <div
        className={`modal fade ${
          showModal ? "d-block show" : "d-none"
        } custom-modal`}
        id="staticBackdrop"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          style={{
            width: "600px",
          }}
        >
          <div
            className="modal-content"
            style={{
              padding: "40px 24px",
            }}
          >
            <CustomSlider
              data={onboardingData}
              buttonText={buttonText}
              toggleModal={toggleModal}
            />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default DModal;
