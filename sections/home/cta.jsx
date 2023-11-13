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
      title="Get in Touch"
      subtitle="Connect with Me"
      color="light"
      rounded
      card
      id="contact"
    >
      <Row>
        {socialLinksList.map(({ name, icon, link, color, label }, i) => (
          <Col md={3} key={i}>
            <a href={link} target="_blank">
              <Button
                style={{ backgroundColor: color }}
                className="w-100 p-3 my-3"
              >
                <Typography size={5} justify="center">
                  <FontAwesomeIcon icon={icon} /> {label}
                </Typography>
              </Button>
            </a>
          </Col>
        ))}

        <Col md={12}>
          <Typography
            size={3}
            justify="center"
            className="my-5"
            color="warning"
          >
            Or Reach Me Here
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
                <Button color="warning">Submit</Button>
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
