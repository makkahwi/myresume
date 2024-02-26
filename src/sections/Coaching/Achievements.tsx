import PageSection from "@/components/PageSection";
import { Col, ListGroup, ListGroupItem } from "react-bootstrap";

const SkillsSection = () => {
  const photos = [
    { width: 3, photo: "c.jpg" },
    { width: 5, photo: "IMG_7004.jpg" },
    { width: 4, photo: "48bfc81d-a0e9-4626-ad98-8b1a5ff09efd.jpg" },
  ];

  const achievements = [
    {
      content:
        "Empowered more than 100 business leaders to achieve remarkable growth by providing actionable insights and strategies during coaching sessions, resulting in the development of strong, high-performing teams.",
      fullWidth: true,
    },
    {
      content:
        "Honored to be recognized by the European Union as one of the most influential women in Jordan in 2020.",
    },
    {
      content:
        "Coached entrepreneurs to navigate complex challenges within our dynamic world, ensuring their success.",
    },
    {
      content:
        "Elevated the confidence and communication skills of business professionals, resulting in more successful negotiations, partnerships, and career advancements.",
    },
  ];

  return (
    <PageSection title="Achievements" color="secondary">
      {photos.map(({ width, photo }, i) => (
        <Col md={width} key={i}>
          <div
            style={{
              height: "25vh",
              backgroundImage: `url('/images/gallery/${photo}')`,
              backgroundPositionX: "center",
              backgroundPositionY: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-100 p-0 m-0"
          />
        </Col>
      ))}

      <Col xs={12} className="mt-5">
        <ListGroup className="rounded-5 border-danger">
          {achievements.map(({ content, fullWidth }, i) => (
            <ListGroupItem className="bg-transparent border-danger p-4" key={i}>
              <h5 className="text-dark text-block">{content}</h5>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
    </PageSection>
  );
};

export default SkillsSection;
