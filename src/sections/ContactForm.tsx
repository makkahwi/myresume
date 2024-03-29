"use client";

import { sendContacts } from "@/api";
import {
  Button,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";

const ContactForm = () => {
  const inputs = [
    { name: "name", title: "Name", type: "text", required: true },
    { name: "subject", title: "Subject", type: "text", required: false },
    {
      name: "message",
      title: "Message",
      type: "textarea",
      required: true,
      fullWidth: true,
    },
  ];

  const onSubmit = (e: any) => {
    e.preventDefault();

    const values = inputs.reduce(
      (final, current) => ({
        ...final,
        [current.name]: e.target[current.name].value,
      }),
      {}
    );

    sendContacts({ ...values, timestamp: new Date() })
      .then(() => alert("Your message has been sent. TQ :)"))
      .catch(() => alert("Something went wrong, plz try again. Sorry :("));
  };

  return (
    <form onSubmit={onSubmit}>
      <Row>
        {inputs.map(({ name, title, required, type, fullWidth }, i) => (
          <Col lg={fullWidth ? 12 : 6} className="mb-2" key={i}>
            <FormGroup>
              <FormLabel for={name} className="text-dark">
                {title}
                {required ? <span className="text-info">{" *"}</span> : ""}
              </FormLabel>
              <FormControl
                id={name}
                name={name}
                placeholder={title}
                className="py-3"
                as={type === "textarea" ? type : undefined}
                type={type}
                required={required}
              />
            </FormGroup>
          </Col>
        ))}

        <Col md={3} lg={2} className="float-end">
          <Button variant="info" className="p-3 rounded-5" type="submit">
            <h6 className="text-center p-0 m-0">Send</h6>
          </Button>
        </Col>
      </Row>
    </form>
  );
};

export default ContactForm;
