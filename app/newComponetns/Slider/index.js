import React, { useRef, useState } from "react";

import Slider from "react-slick";
// import Button from "@mui/material";
import { Box, Grid } from "@mui/material";
import { DButton, DTypography } from "@/app/utils/imports";
import { useTranslations } from "next-intl";

const arrowPseudoStyle = {
  color: "#c9c1c1",
  fontSize: "28px",
};
const arrowBtnStyle = {
  display: "block",
  background: "red",
  width: "30px",
  height: "30px",
  ":before": {
    color: "#c9c1c1",
    fontSize: "28px",
  },
};
function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

// function ButtonNext(props) {
//   const { className, style, onClick } = props;

//   return (
//     <Button
//       className={"btn"}
//       variant="btn-contianed"
//       btnGradient={"btn-gradient-primary"}
//       onClick={onClick}
//       label={"Next"}
//     />
//   );
// }

const CustomSlider = ({ data, buttonText, toggleModal, handleClose }) => {
  const slider1 = useRef();
  const [slideIdx, setSlideIdx] = useState(0);
  const t = useTranslations("Index");

  const changeSlider = () => {
    console.log(slideIdx);
    console.log(data);
    if (slideIdx === data.length - 1) {
      handleClose();
    }
    slider1.current.slickNext();
    setSlideIdx((prev) => {
      return prev + 1;
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <Box>
        <Slider {...settings} ref={(slider) => (slider1.current = slider)}>
          {data.map((item, i) => (
            <div key={i}>
              <div className="">
                <Box
                  style={{
                    width: "308px",
                    height: "308px",
                    margin: "35px auto 30px auto",
                  }}
                >
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={item.image.src}
                    alt="Picture of the author"
                  />
                </Box>

                <div
                  className=""
                  style={{
                    padding: "40px 0",
                  }}
                >
                  <DTypography
                    variant="medium2Bolder"
                    textAccent="darker"
                    text={item.title}
                    style={{
                      textAlign: "center",
                      marginBottom: "20px",
                    }}
                  />

                  <DTypography
                    variant="mediumNormal"
                    textAccent="light"
                    text={item.subTitle}
                    style={{
                      textAlign: "center",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <Grid
          container
          // style={{
          //   zIndex: "9",
          // }}
        >
          <Grid item xxs={6}>
            <DButton
              variant=""
              onClick={handleClose}
              label={t("button.btnSkip")}
            />
            {/* <Button className={"btn btn-light"} onClickButton={toggleModal}>
              <Typography
                size={typographyClasses.size.medium}
                variant={typographyClasses.variant.semibold}
                utilClasses={"mb-0"}
                inButton={true}
                text={buttonText.skip}
              />
            </Button> */}
          </Grid>
          <Grid item xxs={6}>
            {/* <Button
              className={"btn ms-auto"}
              variant="btn-contained"
              btnGradient={"btn-gradient-primary"}
              onClickButton={changeSlider}
            >
              <Typography
                size={typographyClasses.size.medium}
                inButton={true}
                variant={typographyClasses.variant.bold}
                text={
                  slideIdx + 1 === data.length
                    ? buttonText.finish
                    : buttonText.next
                }
                utilClasses={"mb-0"}
              />
            </Button> */}

            <DButton
              variant="primary-gradient-btn"
              onClick={changeSlider}
              label={slideIdx === 2 ? t("button.btnFinish") : t("button.next")}
              style={{ marginRight: "0", marginLeft: "auto" }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CustomSlider;
