import { knowledge, learning } from '../public/skills';

const About = () => {
  return (
    <div id="about">
      <h1>I'm Colin, and I build sleek, responsive, full-stack web apps</h1>
      <div id="about-me">
        <p>
          I love full-stack development because it allows me to indulge my
          creative side while also giving my brain a workout and letting me
          solve real-world problems. I'm interested in the journey that data
          takes, from the frontend to the backed, and to all points in-between.
          As a lifelong learner, I'm constantly trying to hone my skills and
          pick up new ones.
        </p>

        <p>
          When I'm not coding, you can find me chilling with a book, gaming,
          jamming with friends, climbing the nearest mountain, planning a trip
          to some strange, far-off land, or putting way too many commas in my
          sentences.
        </p>
      </div>
      <h1>What I Know</h1>
      <div id="knowledge">
        {knowledge.map((skill) => {
          return (
            <div className="skill">
              <div className="skill-img">
                <img src={skill.imgUrl} />
              </div>
              <h5>{skill.name}</h5>
            </div>
          );
        })}
      </div>
      <h1>What I'm Learning</h1>
      <div id="learning">
        {learning.map((skill) => {
          return (
            <div className="skill">
              <div className="skill-img" id={skill.name}>
                <img src={skill.imgUrl} />
              </div>
              <h5>{skill.name}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
