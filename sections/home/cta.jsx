import PageSection from "components/pageSection";
import Typography from "components/typography";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const CtaSection = () => {
  const formInputs = [
    { name: "name", title: "Name", required: true },
    { name: "org", title: "Organization", required: false },
    {
      name: "message",
      title: "Message",
      required: true,
      fullWidth: true,
      type: "textarea",
    },
  ];

  return (
    <PageSection title="Interested To Support?" color="warning" rounded card>
      <Row>
        <Col md={12}>
          <Typography size={5} justify="center" className="mb-5">
            You may contact directly for support or any other concern
          </Typography>

          <Form>
            <Row>
              {formInputs.map(
                ({ title, name, required, fullWidth, type }, i) => (
                  <Col md={fullWidth ? 12 : 6} className="my-1" key={i}>
                    <FormGroup>
                      <Label for={name}>{title + (required ? " *" : "")}</Label>
                      <Input
                        id={name}
                        name={name}
                        placeholder={title}
                        type={type}
                      />
                    </FormGroup>
                  </Col>
                )
              )}

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
