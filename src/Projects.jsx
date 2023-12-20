import "./CSS Files/projects.css";

import medical from "./Images/medical.png";

import skillRISE from "./Images/skillrise.png";

import laravel from "./Images/laravel.png";
import semantic from "./Images/semenatique.png";
import Quiz from "./Images/Quiz.png";
import Portfolio from "./Images/portoflllio.png";

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
          title="Proactive & Automated STB Log Analysis Tool"
          imageSrc={medical}
          githubLink="https://github.com/anasbenabdallah/stage2023/tree/master"
          technologies="MERN Stack + Python"
          description="This project aims to analyze and understand logs effectively. It transforms database logs into visually comprehensible charts, providing stakeholders with immediate insights. Each log message is automatically mapped to its respective Jira ticket for efficient troubleshooting and issue tracking."
        />

        <ProjectCard
          title="SkillRise Platform"
          imageSrc={skillRISE}
          githubLink="https://github.com/anasbenabdallah/SkillRisee"
          technologies="NodeJS, Astro/React, HTML/CSS, JS/JSX, Python, Figma"
          description="SkillRise addresses youth unemployment and skills gap in Tunisia by providing work opportunities through virtual challenges offered by startups. It aims to bridge the skills gap, provide work experience, and support success in the workforce."
        />

        <ProjectCard
          title="Laravel Freelancing Website"
          imageSrc={laravel}
          githubLink="https://github.com/anasbenabdallah/Laravel-Freelance"
          technologies="Laravel"
          description="The purpose of this project is to help people find work offers and enhance their skills. It serves as a platform connecting freelancers with potential employers, facilitating collaboration and skill development."
        />

        <ProjectCard
          title="Web Semantics"
          imageSrc={semantic}
          githubLink="https://github.com/anasbenabdallah/ProjetWebSemantique"
          technologies="SpringBOOT, ReactJs, SPARQL Protocol, RDF Query Language, OWL (Web Ontology Language)"
          description="Web Semantics project involves utilizing Spring Boot and ReactJs to implement semantic web technologies such as SPARQL and RDF. The goal is to enhance data interoperability and understanding on the web by adding a semantic layer to the information."
        />

        <ProjectCard
          title="Quiz Website"
          imageSrc={Quiz}
          githubLink="https://github.com/anasbenabdallah/SpringQuiz"
          technologies="Springboot, ReactJs, NoSQL"
          description="The Quiz Website serves as a platform for practicing quizzes and interacting with professors. Built using Spring Boot and ReactJs, it provides a dynamic and interactive environment for both students and educators to engage in quiz-based learning."
        />

        <ProjectCard
          title="Portfolio"
          imageSrc={Portfolio}
          githubLink="https://github.com/anasbenabdallah/Portfolio"
          technologies="ReactJs, VERCEL (deploy)"
          description="The Portfolio project showcases the developer's skills and projects. Developed using ReactJs and deployed on Vercel, it serves as a personal website highlighting achievements, skills, and projects in an organized and visually appealing manner."
        />
      </div>
    </div>
  );
}

export default Projects;
