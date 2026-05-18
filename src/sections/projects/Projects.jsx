import React from 'react';
import './projects.css';

import {
  FaGithub,
  FaExternalLinkAlt
} from 'react-icons/fa';

const Projects = () => {

  const projects = [

    {
      title: 'Fintech Banking Application',

      image:
        'https://images.unsplash.com/photo-1556740749-887f6717d7e4',

      description:
        'Secure and scalable fintech platform with payment gateway integrations, fraud detection systems, and offline transaction handling.',

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
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',

      description:
        'Cross-platform health application featuring workout streaming, Health Connect integration, nutrition tracking, and offline workout modules.',

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