import projects from '../public/projects';
const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div id="projects">
        {projects.map((project, idx) => {
          return (
            <div
              className={idx % 2 === 0 ? 'project-even' : 'project-odd'}
              key={idx}
            >
              <h2>{project.name}</h2>
              <img src={project.imgSrc} alt="" />
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.github}>Github</a>
                <a href={project.deployment}>Deployment</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
