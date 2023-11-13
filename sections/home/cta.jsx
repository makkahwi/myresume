import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sendContacts } from "api";
import PageSection from "components/pageSection";
import Typography from "components/typography";
import { socialLinksList } from "pages/_document";
import { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const CtaSection = () => {
  const [sent, setSent] = useState(false);

  const formInputs = [
    { name: "name", title: "Name", required: true },
    { name: "org", title: "Organization", required: false },
    { name: "email", title: "Email", required: true },
    { name: "phone", title: "Phone", required: false },
    {
      name: "message",
      title: "Message",
      required: true,
      fullWidth: true,
      type: "textarea",
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    const data = formInputs.reduce((final, current) => {
      const value = e.target[current.name]["value"];
      return {
        ...final,
        [current.name]: value,
      };
    }, {});

    sendContacts(data);
    setSent(true);
  };

  return (
    <PageSection
      title="Interested To Support?"
      color="secondary"
      rounded
      card
      id="contact"
    >
      <Row>
        {socialLinksList.map(({ name, icon, link }, i) => (
          <Col md={3} key={i}>
            <Button>
              <FontAwesomeIcon icon={icon} />
            </Button>
          </Col>
        ))}

        <Col md={12}>
          <Typography size={5} justify="center" className="mb-5">
            You may contact directly for support or any other concern
          </Typography>

          <Form onSubmit={onSubmit}>
            <Row>
              {formInputs.map(
                ({ title, name, required, fullWidth, type }, i) => (
                  <Col md={fullWidth ? 12 : 3} className="my-1" key={i}>
                    <FormGroup>
                      <Label for={name}>{title + (required ? " *" : "")}</Label>
                      <Input
                        id={name}
                        name={name}
                        placeholder={title}
                        type={type}
                        className="py-3"
                      />
                    </FormGroup>
                  </Col>
                )
              )}

              <Col md={12} className="text-end">
                <Button color="light">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      {sent && (
        <Alert color="success" className="mt-5">
          Message has been sent successfully
        </Alert>
      )}
    </PageSection>
  );
};

export default CtaSection;
