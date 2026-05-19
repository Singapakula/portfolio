import React from 'react';
import './projects.css';

import {
  FaGithub,
  FaExternalLinkAlt
} from 'react-icons/fa';

const Projects = () => {

  const projects = [

    {
      title: 'Kanexy Pvt Ltd',

      image:
        'data:image/jpeg;base64,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',

      description:
        'Kanexy, your one-stop-shop for consulting, technology, and outsourcing services. We specialize in delivering top-notch digital transformation and fintech solutions that help businesses thrive in today Secure and scalable fintech platform with payment gateway integrations, fraud detection systems, and offline transaction handling. https://kanexy.com/',

      technologies: [
        'React Native',
        'Redux',
        'Node.js',
        'SQLite',
        'REST APIs'
      ]
    },

    {
      title: 'Health & Fitness Platform',

      image:
        'data:image/png;base64,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',

   description:
        'UR.Life is a comprehensive health and wellness technology platform that offers digital healthcare, fitness, mental wellness, nutrition, and corporate wellness services through mobile and web applications. The platform integrates wellness programs, healthcare services, activity tracking, teleconsultation, and personalized health solutions to deliver a seamless user experience across Android and iOS ecosystems.The company focuses on:Digital WellnessCorporate Wellness,Fitness & NutritionMental Health Preventive Healthcare, Teleconsultation Health, TrackingHealthcare Integrations,Wellness Programs Mobile Health Solutions',

      technologies: [
        'React Native',
        'Health Connect',
        'Firebase',
        'Redux'
      ]
    },

    {
      title: 'E-Learning Ecosystem',

      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',

      description:
        'Interactive education platform with attendance systems, exams, result modules, mock tests, and scalable architecture.',

      technologies: [
        'React JS',
        'Node.js',
        'MongoDB',
        'Redux'
      ]
    }

  ];

  return (
<section className="projects" id="projects">

      <div className="container">

        {/* HEADER */}
        <div className="projects-header">

          <div className="section-tag">
            FEATURED WORK
          </div>

          <h2 className="projects-title">
            Recent <span>Projects</span>
          </h2>

          <p className="projects-subtitle">
            A collection of scalable, production-grade applications
            crafted for real-world business challenges.
          </p>

        </div>

        {/* GRID */}
        <div className="projects-grid">

          {projects.map((project, index) => (

            <div className="project-card" key={index}>

              {/* IMAGE */}
              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                {/* OVERLAY */}
                <div className="project-overlay">

                  <button>
                    <FaGithub />
                  </button>

                  <button>
                    <FaExternalLinkAlt />
                  </button>

                </div>

              </div>

              {/* CONTENT */}
              <div className="project-content">

                <h3>{project.title}</h3>

                <p>
                  {project.description}
                </p>

                {/* TECH */}
                <div className="tech-stack">

                  {project.technologies.map((tech, i) => (
                    <span key={i}>
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;