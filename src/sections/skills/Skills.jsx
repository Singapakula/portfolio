import React from 'react';
import './skills.css';

const Skills = () => {

  const coreSkills = [
    'React Native',
    'JavaScript',
    'TypeScript',
    'React JS',
    'Node.js',
    'Redux',
    'Recoil',
    'Native Android',
    'REST APIs',
    'HTML',
    'CSS',
    'UI/UX'
  ];

  const tools = [
    'GitHub',
    'GitLab',
    'Firebase',
    'Figma',
    'Jira',
    'Atlassian',
    'TestFlight',
    'Xcode',
    'Android Studio'
  ];

  const aiTools = [
    'ChatGPT',
    'Gemini',
    'Tabnine',
    'GitHub Copilot',
    'Claude'
  ];

  return (
<section className="skills" id="skills">

      <div className="container">

        {/* SECTION HEADER */}
        <div className="skills-header">

          <div className="section-tag">
            TECH STACK
          </div>

          <h2 className="skills-title">
            Technical <span>Arsenal</span>
          </h2>

          <p className="skills-subtitle">
            Expertise built on modern mobile and web technologies,
            powered by scalable architecture and AI-assisted workflows.
          </p>

        </div>

        {/* CORE SKILLS */}
        <div className="skills-group">

          <h3 className="group-title">
            Core Engineering
          </h3>

          <div className="skills-pills">

            {coreSkills.map((skill, index) => (
              <div className="skill-pill" key={index}>
                {skill}
              </div>
            ))}

          </div>

        </div>

        {/* CARDS */}
        <div className="skills-cards">

          {/* TOOLS */}
          <div className="skills-card">

            <h3>Tools & Platforms</h3>

            <div className="card-pills">

              {tools.map((tool, index) => (
                <div className="small-pill" key={index}>
                  {tool}
                </div>
              ))}

            </div>

          </div>

          {/* AI */}
          <div className="skills-card">

            <h3>AI Assisted Workflow</h3>

            <div className="card-pills">

              {aiTools.map((tool, index) => (
                <div className="small-pill" key={index}>
                  {tool}
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;