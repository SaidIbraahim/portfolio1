import React from "react";

function Projects() {
  const projects = [
    { name: "Chatbot", imgSrc: "images/Bot.png" }, // Replace with actual image paths
    { name: "Movie Finder App", imgSrc: "images/Movie.png" },
    { name: "Book Notes App", imgSrc: "images/Note.png" },
  ];

  return (
    <section className="projects">
      <h2>Latest Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <div className="project-image">
              <img src={project.imgSrc} alt={`${project.name} screenshot`} />
            </div>
            <div className="project-details">
              <h3>{project.name}</h3>
              <button className="view-details">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
