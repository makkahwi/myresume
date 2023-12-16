import { CarouselCaption, CarouselItem } from "react-bootstrap";

interface props {
  setAnimating: (x: boolean) => void;
  src?: string;
  title?: string;
}

function CarouselSlide({ setAnimating, src, title }: props) {
  return (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
    >
      <img src={src} alt={title} />

      {title && <CarouselCaption captionText={title} captionHeader={title} />}
    </CarouselItem>
  );
}

export default CarouselSlide;
