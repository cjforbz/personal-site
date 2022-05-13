const HomePage = () => {
  return (
    <div id="home">
      <div id="home-title">
        <h1>Colin Forbes</h1>
        <h3>Full-Stack Software Developer</h3>
        <div id="socials-home">
          <div className="socials-home-icon">
            <a href="https://www.linkedin.com/in/colin-j-forbes/">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="linked in"
              />
            </a>
          </div>
          <div className="socials-home-icon">
            <a href="https://github.com/cjforbz">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="linked in"
              />
            </a>
          </div>
        </div>
      </div>
      <div id="portrait">
        <img src="/images/myface.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
