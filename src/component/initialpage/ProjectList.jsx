function ProjectList(){
    const name = "John Doe";
    const profession = "Full Stack Developer ";
    const projects = [
        {
          title: "Project One",
          description: "A web application using react and nodejs",
          link: "#",
        },
        {
          title: "Project Two",
          description: "E-commerce plateform build using Django",
          link: "#",
        }
      ];
    return (
        <section id="projects" className="projects-section">
        <h2>Project</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <h3>{project.description}</h3>
              <a href={project.link} target='_blank' rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
}

export default ProjectList;