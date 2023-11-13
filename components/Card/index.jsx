import Typography from "components/typography";
import { Card, CardBody, CardTitle } from "reactstrap";

const CardComp = ({ title, color = "white", children }) => {
  return (
    <Card className={`bg-transparent text-white border-${color} border-5`}>
      {title && (
        <CardTitle>
          <Typography size={3} justify="center" className="my-4">
            {title}
          </Typography>
        </CardTitle>
      )}

      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default CardComp;
