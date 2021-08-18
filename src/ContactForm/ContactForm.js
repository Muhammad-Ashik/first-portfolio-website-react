import React from "react";
import "./contact-form.css";

function ContactForm() {
  return (
    <div className="contact">
      <div className="contact-form" id="contact">
        <p>CONTACT ME</p>
        <div class="container form-container">
          <form action="">
            <label for="fname">Name*</label>
            <input type="text" id="fname" name="firstname" required />

            <label for="lname">Email Address*</label>
            <input type="email" id="mail" name="mail" required />

            <label for="subject">Message*</label>
            <textarea
              id="message"
              name="message"
              style={{ height: "120px" }}
              required
            ></textarea>

            <div className="submit-button">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
