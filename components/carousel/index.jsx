import { Fragment, useState } from "react";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";

function CarouselComp({ items, controls, indicators, ...rest }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items?.map((item, i) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={i}
      >
        {item}
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...rest}
    >
      {slides}

      {indicators && (
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
          className="bg-warning position-relative mt-5 px-5"
        />
      )}

      {controls && (
        <Fragment>
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
            className="bg-warning"
          />

          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
            className="bg-warning"
          />
        </Fragment>
      )}
    </Carousel>
  );
}

export default CarouselComp;
