import projects from '../public/projects';
const Projects = () => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      {projects.map((project, idx) => {
        return (
          <div className="project" key={idx}>
            <h3>{project.name}</h3>
            <img src={project.imgSrc} alt="" />
            <p>{project.description}</p>
            <a href={project.github}>Github</a>
            <a href={project.deployment}>Deployment</a>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
