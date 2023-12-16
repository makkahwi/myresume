import { Carousel } from "react-bootstrap";

interface props {
  items: React.ReactNode[];
  controls?: boolean;
  indicators?: boolean;
}

function CarouselComp({
  items,
  controls = false,
  indicators = false,
  ...rest
}: props) {
  return (
    <Carousel controls={controls} indicators={indicators} {...rest}>
      {items.map((slide, i) => (
        <Carousel.Item key={i}>{slide}</Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComp;
