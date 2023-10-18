import PageSection from "components/pageSection";
import Typography from "components/typography";
import { Card, CardBody, Col, Row } from "reactstrap";

const StatsSection = () => {
  const stats = [
    { text: "Experience Years", count: 8 },
    { text: "Solutions Designed", count: 15 },
    { text: "Products Built", count: 25 },
    { text: "Open-Source Contributions", count: 100 },
  ];

  return (
    <PageSection>
      <Row>
        {stats.map(({ text, count }, i) => (
          <Col md={3} key={i}>
            <Card className="my-2" color="warning" inverse>
              <CardBody>
                <Typography size={2} justify="center">
                  {count}
                </Typography>

                <Typography size={5} justify="center">
                  {text}
                </Typography>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

export default StatsSection;
