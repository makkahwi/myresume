import PageSection from "@/components/PageSection";
import {
  faBriefcase,
  faBullseye,
  faFaceGrinStars,
  faHandHoldingDollar,
  faLightbulb,
  faPersonChalkboard,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardBody,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

const UniqueProgramsSection = () => {
  const programGroups = [
    {
      icon: faUsers,
      programs: [
        "Leadership and Executive Development",

        "Emotional Intelligence for Leaders",

        "Leadership Communication Skills",

        "Building High Performance Teams",
      ],
    },
    {
      icon: faBullseye,
      programs: [
        "Strategic Thinking for Leaders",

        "Leading Change",

        "Problem Solving and Decision Making",
      ],
    },
    {
      icon: faFaceGrinStars,
      programs: [
        "Personal Branding for Leaders",

        "Master Speaker and Storyteller",

        "Productivity and Time Management",
      ],
    },
    {
      icon: faHandHoldingDollar,
      programs: [
        "Negotiation Skills",

        "Selling and Negotiating Techniques",

        "Customer Service",
      ],
    },
    {
      icon: faPersonChalkboard,
      programs: ["Train the Trainer", "Coaching Skills for Leaders"],
    },
    {
      icon: faLightbulb,
      programs: [
        "Innovation and Creative Leadership",

        "Facilitation Using Lego Serious Play Methodology",
      ],
    },
    {
      icon: faBriefcase,
      programs: ["Employability Skills "],
    },
  ];

  return (
    <PageSection title="Unique Programs">
      <Col xs={12}>
        <Card className="border border-danger border-2 rounded-5 py-4 my-3 w-100">
          <CardBody>
            <Row className="justify-content-center">
              {programGroups.map(({ icon, programs }, i) => (
                <Col className="mb-5" lg={6} xl={i < 3 ? 4 : 3} key={i}>
                  <h1 className="text-center mb-4 text-danger display-3">
                    <FontAwesomeIcon icon={icon} />
                  </h1>

                  <ListGroup variant="flush">
                    {programs.map((program, y) => (
                      <ListGroupItem key={y}>
                        <h5 className="text-center my-1 text-dark">
                          {program}
                        </h5>
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                </Col>
              ))}
            </Row>
          </CardBody>
        </Card>
      </Col>
    </PageSection>
  );
};

export default UniqueProgramsSection;
