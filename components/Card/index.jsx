import Typography from "components/typography";
import { Card, CardBody, CardTitle } from "reactstrap";

const CardComp = ({ title, color = "white", onClick, image, children }) => {
  return (
    <Card
      className={`bg-transparent text-white border-${color} border-${
        onClick ? 1 : 5
      }`}
      onClick={onClick}
      role={onClick ? "button" : null}
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
