import React from 'react';
import './about.css';

import { motion } from 'framer-motion';

import { fadeLeft, fadeRight } from '../../utils/motion';

const About = () => {

  return (

    <section className="about" id="about">

      <div className="container about-container">

        {/* LEFT SIDE */}
<motion.div
  className="about-left"

  variants={fadeLeft(0.2)}

  initial="hidden"

  whileInView="visible"

  viewport={{ once: true }}
>

  <div className="section-tag">
    ABOUT ME
  </div>

  <h2 className="about-title">
    Passionate <span>Mobile Application Developer</span>
  </h2>

  <p className="about-description">

    Passionate and results-driven React Native Developer
    with 3+ years of professional experience building
    scalable, high-performance, and user-centric mobile
    applications for Android and iOS platforms.

  </p>

  <p className="about-description">

    Specialized in developing modern cross-platform
    applications using React Native and React.js with
    clean architecture, optimized performance,
    responsive UI systems, and seamless user experiences.

  </p>

  <p className="about-description">

    Experienced in handling the complete application
    lifecycle — from requirement gathering, research,
    UI implementation, architecture planning, and API
    integration to deployment, maintenance, and production
    support for both Play Store and App Store.

  </p>

  <p className="about-description">

    Skilled in building secure and maintainable
    applications across Fintech, Health & Fitness,
    E-Learning, Events, and Enterprise domains with a
    strong focus on scalability, performance optimization,
    and real-world business solutions.

  </p>

  <p className="about-description">

    Proficient in React Native, React.js, JavaScript,
    TypeScript, Redux, Node.js, Firebase, SQLite,
    REST APIs, GitHub, Android Studio, Xcode, and modern
    development workflows with a passion for creating
    impactful digital experiences.

  </p>

</motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="about-right"

          variants={fadeRight(0.4)}

          initial="hidden"

          whileInView="visible"

          viewport={{ once: true }}
        >

       

          {/* STATS */}
          <div className="stats-container">

            <div className="stat-card">

              <h3>3+</h3>

              <p>Years Experience</p>

            </div>

            <div className="stat-card">

              <h3>10+</h3>

              <p>Projects Completed</p>

            </div>

            <div className="stat-card">

              <h3>5+</h3>

              <p>Happy Clients</p>

            </div>

            <div className="stat-card">

              <h3>10+</h3>

              <p>Technologies</p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default About;