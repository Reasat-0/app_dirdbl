import React, { Fragment, useRef, useState } from "react";

import Slider from "react-slick";

import Link from "next/link";
import { Box } from "@mui/material";

import { OfferPromoCard } from "@/app/utils/imports";
import { RightArrow, LeftArrowIcon } from "@/app/utils/iconImports";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      // style={{ ...style, display: "block", background: "green" }}
      className="custom-arrow slick-next-arrow"
      onClick={onClick}
      style={{
        position: "absolute",
        top: "-60px",
        right: "12px",
        cursor: "pointer",
      }}
    >
      <RightArrow />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="custom-arrow slick-prev-arrow"
      // style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
      style={{
        width: "12px",
        height: "30px",
        position: "absolute",
        top: "-60px",
        right: "60px",
        cursor: "pointer",
      }}
    >
      <LeftArrowIcon />
    </div>
  );
}

const OfferPromoSlider = ({ data, buttonText, toggleModal, imageSmall }) => {
  const slider1 = useRef();
  const [slideIdx, setSlideIdx] = useState(0);

  const changeSlider = () => {
    if (slideIdx === data.length - 1) {
      toggleModal();
    }
    slider1.current.slickNext();
    setSlideIdx((prev) => {
      return prev + 1;
    });
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <Box>
      <Slider {...settings} ref={(slider) => (slider1.current = slider)}>
        {data?.map((item, i) => (
          <Fragment key={i}>
            <Link href={`/offers-promos/${item.id}`}>
              <div
                className="slider-item-container"
                style={{
                  marginRight: "12px",
                  marginLeft: "12px",
                }}
              >
                <OfferPromoCard item={item} imageSmall={imageSmall} />
              </div>
            </Link>
          </Fragment>
        ))}
      </Slider>
    </Box>
  );
};

export default OfferPromoSlider;
