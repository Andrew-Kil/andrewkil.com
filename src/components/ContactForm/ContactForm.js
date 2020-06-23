import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ContactForm.css";

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const [fieldErrors, setFieldErrors] = useState({});

  const validationRules = {
    email: (val) => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    message: (val) => !!val,
  };

  const validate = () => {
    let errors = {};
    let hasErrors = false;
    for (let key of Object.keys(inputs)) {
      errors[key] = !validationRules[key](inputs[key]);
      hasErrors |= errors[key];
    }
    setFieldErrors((prev) => ({ ...prev, ...errors }));
    return !hasErrors;
  };

  const renderFieldError = (field) => {
    if (fieldErrors[field]) {
      return <p className="errorMsg">Please enter a valid {field}.</p>;
    }
  };

  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setFieldErrors({});
      setInputs({
        email: "",
        message: "",
      });
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    setServerState({ submitting: true });
    axios({
      method: "POST",
      url: "https://formspree.io/mlepnzay",
      data: inputs,
    })
      .then((r) => {
        handleServerResponse(true, "Your message has been sent. Thank you!");
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error);
      });
  };

  useEffect(() => {
    if (Object.keys(fieldErrors).length > 0) {
      validate();
    }
  }, [inputs]);

  return (
    <div id="contact" className="component-container">
      <h3>Contact</h3>

      <form
        onSubmit={handleOnSubmit}
        noValidate
        action="https://formspree.io/mlepnzay"
        method="POST"
        className="form-container">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={handleOnChange}
          value={inputs.email}
          className={fieldErrors.email ? "error" : ""}
        />
        {renderFieldError("email")}
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          value={inputs.message}
          className={fieldErrors.message ? "error" : ""}></textarea>
        {renderFieldError("message")}
        <button type="submit" disabled={serverState.submitting}>
          Send
        </button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : "success"}>
            {serverState.status.msg}
          </p>
        )}
      </form>

      <div className="contact-buttons-container">
        <a
          href="https://github.com/Andrew-Kil"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-buttons">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/andrew-kil/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-buttons">
          LinkedIn
        </a>
      </div>

      <div className="codewars-badge-container">
        <a
          href="https://www.codewars.com/users/AndrewKil"
          target="_blank"
          rel="noopener noreferrer">
          <img
            src="https://www.codewars.com/users/AndrewKil/badges/large"
            alt="Codewars badge"></img>
        </a>
      </div>
    </div>
  );
};

export default ContactForm;