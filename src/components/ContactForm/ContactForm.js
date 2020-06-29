import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";

const ContactForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/mlepnzay",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(
          true,
          "Your message has been sent. Thank you!",
          form
        );
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <div id="contact" className="component-container">
      <h3>Contact</h3>
      <form onSubmit={handleOnSubmit} className="form-container">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit" disabled={serverState.submitting}>
          Send
        </button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
