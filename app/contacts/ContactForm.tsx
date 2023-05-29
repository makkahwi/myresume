"use client";
import { Fragment, useState } from "react";

const ContactForm = () => {
  const defaultFormData = {
    name: "",
    email: "",
    message: "",
    sent: false,
    error: false,
  };
  const [formData, setFormData] = useState(defaultFormData);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onFieldChange = (e) =>
    setFormData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <h4 className="text-theme my-4 mt-5 text-decoration-underline">
          Email Me Right Here
        </h4>

        <div className="row">
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={onFieldChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={onFieldChange}
            />
          </div>

          <div className="col-md-12">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              className="form-control"
              value={formData.message}
              onChange={onFieldChange}
            />
          </div>

          <div className="col-md-4 my-4">
            <button type="submit" className="btn btn-theme my-3 w-100">
              Submit
            </button>
          </div>

          {(formData.sent || formData.error) && (
            <div
              className={`col-md-8 my-4 alert alert-${
                formData.sent ? "success" : "danger"
              }`}
              role="alert"
            >
              {formData.sent
                ? "Received Successfully"
                : "It wasn't sent for some error, please try again."}
            </div>
          )}
        </div>
      </form>
    </Fragment>
  );
};

export default ContactForm;
