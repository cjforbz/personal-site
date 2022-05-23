import EmailButton from '../components/EmailButton';

const Contact = () => {
  return (
    <div id="contact">
      <h1>Get In Touch</h1>
      <div id="contact-info">
        <div className="social-link">
          <div className="socials-home-icon" id="linked-in-contact">
            <a href="https://www.linkedin.com/in/colin-j-forbes/">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="linked in"
              />
            </a>
          </div>
          <p>LinkedIn</p>
        </div>
        <div className="social-link">
          <div className="socials-home-icon">
            <a href="https://github.com/cjforbz">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="github"
              />
            </a>
          </div>
          <p>Github</p>
        </div>
        <EmailButton />
      </div>
    </div>
  );
};

export default Contact;
