import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Hello Buds</h2>
        <h1>
          I am <span style={{ color: "#6c63ff" }}>Saeed Ibrahim</span>
        </h1>
        <h4>Full-stack Developer, AI/ML & Deep Learning Enthusiast</h4>
        <div className="underline"></div>
        <p>
          I’m a Full-Stack Web Developer and IT Support Specialist, currently
          wrapping up my Computer Science degree. I'm passionate about AI/ML &
          Deep Learning, and I love using my skills in JavaScript, React,
          Node.js (Express), Python and databases (SQL/NoSQL) to build web
          applications that are both functional and engaging.
        </p>
        <button>Download CV</button>
        <button>More</button>
      </div>
      <div className="hero-image">
        <img src="images/SaidPhoto.jpeg" alt="man in suit" />
      </div>

      <div className="social-media">
        <p>Find me on social media</p>
        <div className="icons">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.linkedin.com/in/sa-ibrahim/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/SaidIbraahim/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.instagram.com/saeedibrahim.tech?igsh=NnRhcDV0M3Z4aGs0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
