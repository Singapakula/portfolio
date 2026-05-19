import React from 'react';
import './contact.css';

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa';

const Contact = () => {

  return (
<section className="contact" id="contact">

      <div className="container">

        {/* HEADER */}
        <div className="contact-header">

          <div className="section-tag">
            CONTACT
          </div>

          <h2 className="contact-title">
            Let’s Build Something <span>Great</span>
          </h2>

          <p className="contact-subtitle">
            Have a project idea, startup vision, or business requirement?
            Let’s discuss and turn it into a scalable digital product.
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

              <a href="https://github.com/Singapakula">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/singapakula-vamshi-248486245?utm_source=share_via&utm_content=profile&utm_medium=member_android">
                <FaLinkedin />
              </a>

              <a href="https://www.instagram.com/leopard_vamshi?igsh=MWUzOXBjcnB0d3UwNg==">
                <FaInstagram />
              </a>


            <a href="mailto:vamshi.singapakula@gmail.com">
              <FaEnvelope />
            </a>

            </div>

            {/* RESUME BUTTON */}
            <button className="resume-download-btn">
               <a
              href="/Vamshi_Resume.pdf"
              download
            
            >

                Download Resume
                </a>
            </button>

          </div>

          {/* RIGHT SIDE */}
          <div className="contact-form-card">

            <form>

              <div className="input-group">

                <input
                  type="text"
                  placeholder="Your Name"
                />

              </div>

              <div className="input-group">

                <input
                  type="email"
                  placeholder="Your Email"
                />

              </div>

              <div className="input-group">

                <textarea
                  rows="6"
                  placeholder="Project Requirement..."
                ></textarea>

              </div>

              <button
                type="submit"
                className="submit-btn"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* FOOTER */}
        <footer className="footer">

          <p>
            © 2026 React Native Specialist.
            All Rights Reserved.
          </p>

        </footer>

      </div>

    </section>
  );
};

export default Contact;