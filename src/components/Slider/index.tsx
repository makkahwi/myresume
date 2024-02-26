import React from "react";
import { Slide } from "react-slideshow-image";

const Slider = ({
  slides,
  indicators = false,
  navigation = false,
  slidesCount = 1,
  duration = 5000,
}: {
  slides: any;
  indicators?: boolean;
  navigation?: boolean;
  slidesCount?: number;
  duration?: number;
}) => {
  return (
    <Slide
      slidesToScroll={1}
      duration={duration}
      transitionDuration={250}
      indicators={indicators}
      arrows={navigation}
      infinite
      responsive={[
        {
          breakpoint: 768,
          settings: {
            slidesToShow: slidesCount,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ]}
    >
      {slides}
    </Slide>
  );
};

export default Slider;
