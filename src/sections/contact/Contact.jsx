// export default Contact;
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

// TODO: replace these three with your own EmailJS values (emailjs.com dashboard)
const SERVICE_ID = "service_lr4q1iq";
const TEMPLATE_ID = "template_2oo83hf";
const PUBLIC_KEY = "zMBVAWLT7_RuQEfd9";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // '', 'sending', 'sent', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus("sent");
        form.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        {/* HEADER */}
        <div className="contact-header">
          <div className="section-tag">CONTACT</div>

          <h2 className="contact-title">
            Let’s Build Something <span>Great</span>
          </h2>

          <p className="contact-subtitle">
            Have a project idea, startup vision, or business requirement? Let’s
            discuss and turn it into a scalable digital product.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="contact-grid">
          {/* LEFT SIDE */}
          <div className="contact-info">
            {/* CARD */}
            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <p>vamshi.singapakula@gmail.com</p>
              </div>
            </div>

            {/* CARD */}
            <div className="info-card">
              <div className="info-icon">
                <FaPhoneAlt />
              </div>
              <div>
                <h4>Phone</h4>
                <p>+91 9505481298</p>
              </div>
            </div>

            {/* CARD */}
            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Location</h4>
                <p>Hyderabad, Telangana, India</p>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="social-links">
              <a
                href="https://github.com/Singapakula"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/singapakula-vamshi-248486245?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/leopard_vamshi?igsh=MWUzOXBjcnB0d3UwNg=="
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

              <a href="mailto:vamshi.singapakula@gmail.com">
                <FaEnvelope />
              </a>
            </div>

            {/* RESUME BUTTON */}
            <a
              href="/S_Vamshi_Resume.pdf"
              download
              className="resume-download-btn"
            >
              Download Resume
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-form-card">
            <form ref={form} onSubmit={sendEmail}>
              <div className="input-group">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="input-group">
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Project Requirement..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "sent" && (
                <p className="form-status success">
                  Message sent. I’ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="form-status error">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="footer">
          <p>© 2026 React Native Specialist. All Rights Reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
