import React from "react";
import "./CSS Files/projects.css";

import medical from "./Images/medical.png";
import fault from "./Images/FaultFinder.png";
import calendar from "./Images/Calendar.png";
import tensor from "./Images/TensorFlow.jpg";
import skillRISE from "./Images/skillrise.png";
import picture from "./Images/Better.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectCard({
  title,
  imageSrc,
  githubLink,
  technologies,
  description,
}) {
  return (
    <div className="project">
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img className="images" src={imageSrc} alt={title} />
      </a>
      <div className="project-info">
        <div className="project-title">
          <h2>{title}</h2>
          <div className="liness"></div>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <h3>
          <span style={{ color: "#FF004F" }}>{technologies}</span>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div id="Projects">
      <h1 className="title">
        My Projects <span style={{ color: "#FF004F" }}>.</span>{" "}
      </h1>
      <div className="projects-wrapper">
        <ProjectCard
          title=" Proactive & Automated STB log analysis tool using machine learning"
          imageSrc={medical}
          githubLink="https://github.com/anasbenabdallah/stage2023/tree/master"
          technologies="MERN Stack + Python"
          description="Being able to effectively parse and understand logs is of paramount importance. Our solution was conceived and developed with the intention of addressing this critical need. Transforming logs stored in the database into visually comprehensible charts provides stakeholders with an immediate, intuitive grasp of their data, enhancing informed decision-making. Additionally, to ensure efficient troubleshooting and issue-tracking, each log message is automatically mapped to its respective Jira ticket, based on established patterns."
        />

        <ProjectCard
          title="SkillRise Platform"
          imageSrc={skillRISE}
          githubLink="https://github.com/anasbenabdallah/SkillRisee"
          technologies="NodeJS, Astro/React, HTML/CSS, JS/JSX, Python, Figma"
          description="The purpose of SkillRise is to address the problem of unemployment and skills gap among youth in Tunisia by creating sustainable work opportunities through virtual challenges offered by startups. The goal is to bridge the skills gap, provide young people with work experience, and support their success in the workforce.."
        />
      </div>
    </div>
  );
}

export default Projects;
