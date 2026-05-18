import React from 'react';
import './services.css';

import {
  FaProjectDiagram,
  FaMobileAlt,
  FaRocket,
  FaPalette,
  FaLaptopCode,
  FaHeadset
} from 'react-icons/fa';

const Services = () => {

  const services = [

    {
      icon: <FaProjectDiagram />,
      title: 'Analysis & Architecture',

      description:
        'Designing scalable, modular, and maintainable architectures with optimized state management, data flow, and secure foundations.'
    },

    {
      icon: <FaMobileAlt />,
      title: 'Mobile App Development',

      description:
        'Building high-performance cross-platform mobile applications for Android and iOS using React Native and modern ecosystems.'
    },

    {
      icon: <FaRocket />,
      title: 'App Deployment',

      description:
        'Managing complete Play Store and App Store deployment workflows, compliance handling, SDK updates, and release optimization.'
    },

    {
      icon: <FaPalette />,
      title: 'Branding Identity',

      description:
        'Crafting visually polished user experiences with modern UI systems, design consistency, and engaging interactions.'
    },

    {
      icon: <FaLaptopCode />,
      title: 'Responsive Design',

      description:
        'Creating responsive applications that deliver seamless experiences across desktop, tablet, and mobile platforms.'
    },

    {
      icon: <FaHeadset />,
      title: '24/7 Support',

      description:
        'Providing long-term maintenance, feature enhancements, bug fixing, and continuous product improvements.'
    }

  ];

  return (
<section className="services" id="services">

      <div className="container">

        {/* HEADER */}
        <div className="services-header">

          <div className="section-tag">
            SERVICES
          </div>

          <h2 className="services-title">
            What I <span>Deliver</span>
          </h2>

          <p className="services-subtitle">
            End-to-end mobile engineering solutions designed
            for performance, scalability, and business growth.
          </p>

        </div>

        {/* GRID */}
        <div className="services-grid">

          {services.map((service, index) => (

            <div className="service-card" key={index}>

              {/* ICON */}
              <div className="service-icon">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3>
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p>
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;