import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import "./CSS Files/Navbar.css";
import Typewriter from "typewriter-effect/dist/core";
import { animateScroll as scroll } from "react-scroll";
import Pdf from "./Images/MyCv.pdf";
import MouseParticleTrail from "./MouseParticleTrail"; // Update the path as needed

function Navbar() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: [
        "I am a software engineer Student",
        "I like coding",
        "Keep scrolling!",
      ],
      autoStart: true,
      loop: true,
      typeSpeed: 30,
      deleteSpeed: 50,
    });

    typewriterRef.current.style.display = "flex";
    typewriterRef.current.style.flexWrap = "wrap";

    return () => {
      typewriter.stop();
    };
  }, []);

  const onResumeClick = () => {
    window.open(Pdf);
  };

  return (
    <nav id="navbar">
      <div className="container">
        <a className="Resume" onClick={onResumeClick}>
          My Resume
        </a>
      </div>

      <a
        href="https://www.linkedin.com/in/anas-benabdallah-4615a826b/"
        target="_blank"
        className="icons"
      >
        <FontAwesomeIcon icon={faLinkedin} size="4x" />
      </a>
      <a
        href="https://github.com/anasbenabdallah"
        target="_blank"
        className="icons"
      >
        <FontAwesomeIcon icon={faGithub} size="4x" />
      </a>

      <ul className="nav-links">
        <div className="name-box">
          <li className="Name">
            A <span className="period">.</span>
          </li>
        </div>
        <Link to="About" smooth={true} duration={500}>
          <li>About</li>
        </Link>
        <Link to="Projects" smooth={true} duration={500}>
          <li>Projects</li>
        </Link>
        <Link to="Contact" smooth={true} duration={500}>
          <li>Contact</li>
        </Link>
      </ul>
      <div className="Introduction">
        <h1>Hey, I'm Anas</h1>
        <h2>
          <span ref={typewriterRef}></span>
        </h2>
        <p>
          I'm currently a Full Stack Developer seeking many ways to improve my
          skills through problem-solving and creating various projects! Scroll
          down to learn more about me.
        </p>
        <Link to="Contact" smooth={true} duration={900}>
          <button>Contact Me</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
