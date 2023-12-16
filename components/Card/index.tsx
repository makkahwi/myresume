import Typography from "@/components/typography";
import { Card, CardBody, CardTitle } from "react-bootstrap";

interface props {
  title?: string | React.ReactNode;
  color?: string;
  onClick?: () => void;
  image?: string;
  children: React.ReactNode;
}

const CardComp = ({
  title,
  color = "white",
  onClick,
  image,
  children,
}: props) => {
  return (
    <Card
      className={`bg-transparent text-white w-100 border-${color} border-${
        onClick ? 1 : 5
      }`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
    >
      {image && <img alt="Sample" src={image} width="100%" />}

      {title && (
        <CardTitle>
          <Typography size={3} justify="center" className="my-4" color={color}>
            {title}
          </Typography>
        </CardTitle>
      )}

      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default CardComp;
