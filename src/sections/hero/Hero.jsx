import React from 'react';
import './hero.css';

import { motion } from 'framer-motion';

import {
  FaDownload,
  FaArrowRight
} from 'react-icons/fa';

import Profile from '../../assets/images/Profile1.png';

import {
  fadeLeft,
  fadeRight
} from '../../utils/motion';

const Hero = () => {

  const scrollToProjects = () => {

    const section = document.getElementById('experience');

    if (section) {

      section.scrollIntoView({
        behavior: 'smooth'
      });

    }
  };

  return (

    <section className="hero" id="home">

      <div className="container hero-container">

        {/* RIGHT */}
        <motion.div
          className="hero-right"

          variants={fadeRight(0.4)}

          initial="hidden"

          whileInView="visible"

          viewport={{ once: true }}
        >

          <motion.div
            className="hero-image-wrapper"

            animate={{
              y: [0, -15, 0]
            }}

            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >

            {/* GLOW */}
            <div className="hero-glow"></div>

            {/* IMAGE */}
            <img
              src={Profile}
              alt="Vamshi"
              className="hero-image"
            />

          </motion.div>

        </motion.div>

        {/* LEFT */}
        <motion.div
          className="hero-left"

          variants={fadeLeft(0.2)}

          initial="hidden"

          whileInView="visible"

          viewport={{ once: true }}
        >

          {/* SMALL TAG */}
          <div className="hero-tag">
            Senior Software Engineer
          </div>

          {/* TITLE */}
          <h1 className="hero-title">

            Hi, I'm <span>Vamshi</span>

          </h1>

          {/* ROLE */}
          <h2 className="hero-role">
                      {/* Senior */}
                      Software Engineer at ur.life pvt ltd
          </h2>

          {/* LOCATION */}
          <div className="hero-location">
            📍 Hyderabad, India
          </div>

          {/* DESCRIPTION */}
          <p className="hero-description">

            A highly skilled and experienced developer
            specializing in building robust and scalable
            mobile and web applications using technologies
            like React Native, Redux,
            Redux-Thunk, Java Script, Type Script,React-Query, Redux-Toolkit and  React.js for Android & iOS platforms.

          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">

            {/* VIEW WORK */}
            <button
              className="primary-btn"
              onClick={scrollToProjects}
            >

              View My Work

              <FaArrowRight />

            </button>

            {/* DOWNLOAD CV */}
            <a
              href="/src/assets/Vamshi_Singapakula_Resume.pdf"
              download
              className="secondary-btn"
            >

              Download CV

              <FaDownload />

            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;