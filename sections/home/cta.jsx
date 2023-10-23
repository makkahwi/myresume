import PageSection from "components/pageSection";
import Typography from "components/typography";
import {
  Button,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";

const CtaSection = () => {
  const products = [
    { name: "Semesteer", link: "https://www.semesteer.com/" },
    { name: "TeamsLine", link: "http://teamsline.com/" },
    { name: "Learngine", link: "https://www.alembicsoft.com/" },
  ];

  const formInputs = [
    { name: "name", title: "Name", required: true },
    { name: "org", title: "Organization", required: false },
    { name: "message", title: "Message", required: true, fullWidth: true },
  ];

  return (
    <PageSection title="Interested To Support?" color="warning">
      <Row>
        <Col md={12}>
          <Typography size={5} justify="center" className="my-5">
            You may visit product websites to learn more and support the
            products
          </Typography>

          <Row className="my-5">
            {products.map(({ name, link }, i) => (
              <Col md={4} key={i}>
                <a
                  href={link}
                  target="_blank"
                  className="text-decoration-none text-dark"
                >
                  <Typography size={5} justify="center">
                    {name}
                  </Typography>
                </a>
              </Col>
            ))}
          </Row>
        </Col>

        <Col md={12} className="mt-5">
          <Typography size={5} justify="center" className="my-5">
            You may contact directly for support or any other concern
          </Typography>

          <Form>
            <Row>
              {formInputs.map(({ title, name, required, fullWidth }, i) => (
                <Col md={fullWidth ? 12 : 6} className="my-1" key={i}>
                  <FormGroup>
                    <Label for={name}>{title + (required ? " *" : "")}</Label>
                    <Input id={name} name={name} placeholder={title} />
                  </FormGroup>
                </Col>
              ))}

              <Col md={12}>
                <Button color="light">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </PageSection>
  );
};

export default CtaSection;
