// import React from "react";
// import "./projects.css";

// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Kanexy Pvt Ltd",
//       image: require("../../assets/images/kanexy_logo.png"),
//       description:
//         "Kanexy, your one-stop-shop for consulting, technology, and outsourcing services. We specialize in delivering top-notch digital transformation and fintech solutions that help businesses thrive in today Secure and scalable fintech platform with payment gateway integrations, fraud detection systems, and offline transaction handling. https://kanexy.com/",
//       technologies: ["React Native", "Redux", "Node.js", "SQLite", "REST APIs"],
//       web_url: "https://kanexy.com/",
//     },

//     {
//       title: "Health & Fitness Platform",
//       image: require("../../assets/images/urlife_logo.png"),
//       description:
//         "UR.Life is a comprehensive health and wellness technology platform that offers digital healthcare, fitness, mental wellness, nutrition, and corporate wellness services through mobile and web applications. The platform integrates wellness programs, healthcare services, activity tracking, teleconsultation, and personalized health solutions to deliver a seamless user experience across Android and iOS ecosystems.The company focuses on:Digital WellnessCorporate Wellness,Fitness & NutritionMental Health Preventive Healthcare, Teleconsultation Health, TrackingHealthcare Integrations,Wellness Programs Mobile Health Solutions",
//       technologies: ["React Native", "Health Connect", "Firebase", "Redux"],
//       web_url: "https://ur.life/",
//     },
//     {
//       title: "Lucid Study-Learning App",
//       image: require("../../assets/images/lucid_logo.png"),
//       description:
//         "A bilingual online learning platform for Classes 6–10 state syllabus students and competitive exam aspirants (JEE, NEET, UPSC, UGC-NET, Olympiads). Features live classes, conceptual video lessons, mock tests, quizzes, and individual progress reports — built to make learning affordable, accessible, and genuinely enjoyable.",
//       technologies: ["React Native", "Redux", "Firebase"],
//       web_url: "https://lucidstudy.com/",
//     },
//     {
//       title: "E-Learning Ecosystem",
//       image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
//       description:
//         "Interactive education platform with attendance systems, exams, result modules, mock tests, and scalable architecture.",

//       technologies: ["React JS", "Node.js", "MongoDB", "Redux"],
//       web_url: "https://lucidstudy.com/",
//     },
//   ];

//   return (
//     <section className="projects" id="projects">
//       <div className="container">
//         {/* HEADER */}
//         <div className="projects-header">
//           <div className="section-tag">FEATURED WORK</div>

//           <h2 className="projects-title">
//             Recent <span>Projects</span>
//           </h2>

//           <p className="projects-subtitle">
//             A collection of scalable, production-grade applications crafted for
//             real-world business challenges.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="projects-grid">
//           {projects.map((project, index) => (
//             <div className="project-card" key={index}>
//               {/* IMAGE */}
//               <div className="project-image">
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     height: "100%",
//                   }}
//                 >
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     style={{
//                       width: "90%",
//                       height: "90%",
//                       objectFit: "contain",
//                     }}
//                   />
//                 </div>
//                 {/* OVERLAY */}
//                 <div className="project-overlay">
//                   <button>
//                     <FaExternalLinkAlt
//                       onClick={() =>
//                         window.open(
//                           `${project?.web_url}`,
//                           "_blank",
//                           "noopener,noreferrer",
//                         )
//                       }
//                     />
//                   </button>
//                 </div>
//               </div>

//               {/* CONTENT */}
//               <div className="project-content">
//                 <h3>{project.title}</h3>

//                 <p>{project.description}</p>

//                 {/* TECH */}
//                 <div className="tech-stack">
//                   {/* {project.technologies.map((tech, i) => (
//                     <span key={i}>
//                       {tech}
//                     </span>
//                   ))} */}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React from "react";
import "./projects.css";

import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const experience = [
    {
      title: "Kanexy Pvt Ltd",
      role: "Software Engineer",
      image: require("../../assets/images/kanexy_logo.png"),
      description:
        "Kanexy delivers consulting, technology, and outsourcing services, specializing in digital transformation and fintech solutions. Contributed to a secure, scalable fintech platform with payment gateway integrations, fraud detection systems, and offline transaction handling.",
      technologies: ["React Native", "Redux", "Node.js", "SQLite", "REST APIs"],
      web_url: "https://kanexy.com/",
    },
    {
      title: "UR.Life",
      role: "Software Engineer",
      image: require("../../assets/images/urlife_logo.png"),
      description:
        "UR.Life is a health and wellness technology platform offering digital healthcare, fitness, mental wellness, nutrition, and corporate wellness services across web and mobile. Worked on wellness programs, activity tracking, teleconsultation, and health integrations for a seamless Android and iOS experience.",
      technologies: ["React Native", "Health Connect", "Firebase", "Redux"],
      web_url: "https://ur.life/",
    },
    // {
    //   title: "Lucid Study",
    //   role: "Software Engineer",
    //   image: require("../../assets/images/lucid_logo.png"),
    //   description:
    //     "A bilingual online learning platform for Classes 6–10 state syllabus students and competitive exam aspirants (JEE, NEET, UPSC, UGC-NET, Olympiads). Built features including live classes, conceptual video lessons, mock tests, quizzes, and individual progress reports.",
    //   technologies: ["React Native", "Redux", "Firebase"],
    //   web_url: "https://lucidstudy.com/",
    // },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        {/* HEADER */}
        <div className="projects-header">
          <div className="section-tag">WHERE I'VE WORKED</div>

          <h2 className="projects-title">
            Professional <span>Journey</span>
          </h2>

          <p className="projects-subtitle">
            Companies I've contributed to, building scalable, production-grade
            applications for real-world business challenges.
          </p>
        </div>

        {/* GRID */}
        <div className="projects-grid">
          {experience.map((company, index) => (
            <div className="project-card" key={index}>
              {/* IMAGE */}
              <div className="project-image">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <img
                    src={company.image}
                    alt={company.title}
                    style={{
                      width: "90%",
                      height: "90%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                {/* OVERLAY */}
                <div className="project-overlay">
                  <button
                    onClick={() =>
                      window.open(
                        company.web_url,
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                    aria-label={`Visit ${company.title} website`}
                  >
                    <FaExternalLinkAlt />
                  </button>
                </div>
              </div>

              {/* CONTENT */}
              <div className="project-content">
                <h3>{company.title}</h3>
                {company.role && (
                  <span className="company-role">{company.role}</span>
                )}

                <p>{company.description}</p>

                {/* TECH */}
                <div className="tech-stack">
                  {company.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
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
