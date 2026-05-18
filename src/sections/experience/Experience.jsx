import React from 'react';
import './experience.css';

import { motion } from 'framer-motion';

import {
  FaWallet,
  FaHeartbeat,
  FaGraduationCap,
  FaBookOpen,
  FaCode,
  FaBriefcase,
  FaBuilding,
  FaRocket
} from 'react-icons/fa';

import { fadeUp } from '../../utils/motion';

const Experience = () => {

  /* =========================
      DOMAIN EXPERTISE
  ========================== */

  const domains = [

    {
      icon: <FaWallet />,
      title: 'Fintech Solutions',

      items: [
        'Secure Payments Integration',
        'Fraud Detection Systems',
        'SQLite / Offline Storage',
        'Regulatory Compliance',
        'Dynamic Payment Flows'
      ]
    },

    {
      icon: <FaHeartbeat />,
      title: 'Health & Fitness',

      items: [
        'Health Connect Integration',
        'Offline Video Workouts',
        'Nutrition Tracking',
        'Personalized Plans',
        'SQLite Offline Mode'
      ]
    },

    {
      icon: <FaGraduationCap />,
      title: 'E-Learning Platforms',

      items: [
        'Interactive Study Materials',
        'Exam Schedules',
        'Student Progress Tracking',
        'Scalable Architecture',
        'Quiz Systems'
      ]
    },

    {
      icon: <FaBookOpen />,
      title: 'Civils Preparation Apps',

      items: [
        'Timetable Modules',
        'Practice Tests',
        'Attendance Systems',
        'Homework Tracking',
        'Mock Testing Modules'
      ]
    },

    {
      icon: <FaCode />,
      title: 'Custom Node Modules',

      items: [
        'Reusable Utilities',
        'Performance Optimization',
        'Secure Architecture',
        'Open Source Ready',
        'Scalable Logic'
      ]
    }

  ];

  /* =========================
      PROFESSIONAL EXPERIENCE
  ========================== */

  const experiences = [

    {
      company: 'Kanexy',

      role: 'Junior Mobile Developer',

      location: 'Hyderabad, India',

      duration: '2022 - 2024',

      icon: <FaBuilding />,

      project: 'Dhigna Events',

      description:
        'Started my professional journey as a Junior Mobile Developer at Kanexy, contributing to scalable cross-platform mobile applications using React Native. Worked on building production-ready applications with modern UI systems, API integrations, push notifications, routing, deployment workflows, and performance optimization.',

     responsibilities: [

  'Developed scalable and high-performance cross-platform mobile applications using React Native for Android and iOS platforms.',

  'Integrated RESTful APIs, authentication systems, push notifications, offline storage, and scalable state management workflows.',

  'Built responsive and reusable UI components with optimized performance, clean architecture, and seamless user experience.',

  'Handled complete Play Store and App Store deployment lifecycle including builds, keystores, certificates, and production releases.',

  'Collaborated with designers, backend teams, and stakeholders to deliver secure, maintainable, and business-focused mobile solutions.'

],

      technologies: [
        'React Native',
        'JavaScript',
        'Axios',
        'React Query',
        'REST APIs',
        'Firebase',
        'Android Studio',
        'Xcode',
        'Git'
      ]
    },

    {
      company: 'UR.Life',

      role: 'React Native Developer',

      location: 'Hyderabad, India',

      duration: '2024 - Present',

      icon: <FaRocket />,

      project: 'Lifestyle Fitness Studio',

      description:
        'Currently working as a React Native Developer at UR.Life, handling end-to-end mobile application development, deployment management, architecture planning, API integrations, and performance optimization for large-scale wellness and fitness platforms.',

    responsibilities: [

  'Developed scalable and high-performance cross-platform mobile applications using React Native for Android and iOS platforms.',

  'Integrated RESTful APIs, authentication systems, push notifications, offline storage, and scalable state management workflows.',

  'Built responsive and reusable UI components with optimized performance, clean architecture, and seamless user experience.',

  'Handled complete Play Store and App Store deployment lifecycle including builds, keystores, certificates, and production releases.',

  'Collaborated with designers, backend teams, and stakeholders to deliver secure, maintainable, and business-focused mobile solutions.'

],

      technologies: [
        'React Native',
        'JavaScript',
        'TypeScript',
        'Redux',
        'React Query',
        'REST APIs',
        'Firebase',
        'SQLite',
        'Android Studio',
        'Xcode',
        'GitHub'
      ]
    }

  ];

  return (

    <section
      className="experience"
      id="experience"
    >

      <div className="container">

        {/* =========================
            HEADER
        ========================== */}

        <div className="experience-header">

          <div className="section-tag">
            EXPERIENCE & EXPERTISE
          </div>

          <h2 className="experience-title">
            My Professional <span>Journey</span>
          </h2>

          <p className="experience-subtitle">
            Building scalable, secure, and high-performance
            applications across Fintech, Fitness,
            Healthcare, Education, and Event platforms.
          </p>

        </div>

        {/* =========================
            DOMAIN EXPERTISE
        ========================== */}

        <div className="experience-grid">

          {domains.map((domain, index) => (

            <motion.div
              className="experience-card"

              key={index}

              variants={fadeUp(index * 0.1)}

              initial="hidden"

              whileInView="visible"

              viewport={{ once: true }}
            >

              {/* ICON */}
              <div className="experience-icon">
                {domain.icon}
              </div>

              {/* TITLE */}
              <h3>
                {domain.title}
              </h3>

              {/* ITEMS */}
              <ul>

                {domain.items.map((item, i) => (

                  <li key={i}>
                    {item}
                  </li>

                ))}

              </ul>

            </motion.div>

          ))}

        </div>

        {/* =========================
            EXPERIENCE TIMELINE
        ========================== */}

        <div className="timeline-wrapper">

          <div className="timeline-heading">

            <h2>
              Work <span>Experience</span>
            </h2>

            <p>
              My professional experience building scalable
              and production-grade mobile applications.
            </p>

          </div>

          <div className="timeline">

            {experiences.map((item, index) => (

              <motion.div
                className="timeline-card"

                key={index}

                variants={fadeUp(index * 0.15)}

                initial="hidden"

                whileInView="visible"

                viewport={{ once: true }}
              >

                {/* LEFT */}
                <div className="timeline-left">

                  <div className="company-icon">
                    {item.icon}
                  </div>

                  <h3>
                    {item.company}
                  </h3>

                  <span className="role">
                    {item.role}
                  </span>

                  <span className="duration">
                    {item.duration}
                  </span>

                  <span className="location">
                    {item.location}
                  </span>

                </div>

                {/* RIGHT */}
                <div className="timeline-right">

                  {/* PROJECT */}
                  <div className="project-header">

                    <FaBriefcase />

                    <h4>
                      {item.project}
                    </h4>

                  </div>

                  {/* DESCRIPTION */}
                  <p className="experience-description">
                    {item.description}
                  </p>

                  {/* RESPONSIBILITIES */}
                  <div className="responsibilities">

                    <h5>
                      Key Responsibilities
                    </h5>

                    <ul>

                      {item.responsibilities.map((responsibility, i) => (

                        <li key={i}>
                          {responsibility}
                        </li>

                      ))}

                    </ul>

                  </div>

                  {/* TECHNOLOGIES */}
                  <div className="technology-section">

                    <h5>
                      Technologies Used
                    </h5>

                    <div className="tech-stack">

                      {item.technologies.map((tech, i) => (

                        <span key={i}>
                          {tech}
                        </span>

                      ))}

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Experience;