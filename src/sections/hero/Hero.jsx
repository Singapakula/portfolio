import React from 'react';
import './hero.css';

import { motion } from 'framer-motion';

import {
  FaDownload,
  FaArrowDown,
} from 'react-icons/fa';

import Profile from '../../assets/images/Profile3.png';

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

      {/* BACKGROUND BLUR */}
      <div className="hero-bg-blur"></div>

      <div className="container hero-container">

        {/* PROFILE IMAGE */}
        <motion.div
          className="hero-image-section"

          initial={{ opacity: 0, y: -50 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}
        >

          <motion.div
            className="hero-image-wrapper"

            animate={{
              y: [0, -10, 0]
            }}

            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >

            <img
              src={Profile}
              alt="Vamshi"
              className="hero-image"
            />

          </motion.div>

        </motion.div>

        {/* CONTENT */}
        <motion.div
          className="hero-content"

          initial={{ opacity: 0, y: 40 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}
        >

          {/* TITLE */}
          <h1 className="hero-title">

            Hi, I'm <span>Vamshi</span>

          </h1>

          {/* ROLE */}
          <h2 className="hero-role">

      Software Engineer at
            <span> URLIFE LIFESTYLE WELLNESS LIMITED</span>

          </h2>

          {/* LOCATION */}
          <div className="hero-location">

            📍 Hyderabad, India

          </div>

          {/* DESCRIPTION */}
          <p className="hero-description">

            {/* A highly skilled and experienced developer
            specializing in building robust and scalable
            mobile and web applications using technologies
            like React Native, Redux, Redux-Thunk,
            JavaScript, TypeScript, React Query,
            Redux Toolkit,for Android & iOS platforms */}
            Results-driven React Native Mobile Application Developer with 3+ years of experience in designing, developing, and deploying high-performance cross-platform mobile applications for Android and iOS. Skilled in building scalable, maintainable, and user-centric applications using React Native, JavaScript, TypeScript, Redux, Redux Toolkit, Redux-Thunk, React Query, and modern mobile development practices. Experienced in API integration, state management, performance optimization, reusable component architecture, third-party integrations, and publishing applications to App Store and Play Store. Passionate about delivering clean UI/UX experiences, writing efficient code, and continuously exploring modern technologies to build impactful mobile solutions.

          </p>

        

          {/* BUTTONS */}
          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={scrollToProjects}
            >

              View My Work

            </button>

            <a
              href="/Vamshi_Resume.pdf"
              download
              className="secondary-btn"
            >

              <FaDownload />

              Download CV

            </a>

          </div>

          {/* DOWN ICON */}
          <div className="scroll-down">

            <FaArrowDown />

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;