import { CarouselCaption, CarouselItem } from "reactstrap";

function CarouselSlide({ setAnimating }) {
  return (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
    >
      <img src={item.src} alt={item.title} />

      {item.title && (
        <CarouselCaption captionText={item.title} captionHeader={item.title} />
      )}
    </CarouselItem>
  );
}

export default CarouselSlide;
