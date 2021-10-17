import { useInView } from "react-intersection-observer";
import ParticlesAbout from "./ParticlesAbout";
import classes from "./About.module.css";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const scrollClasses = inView ? classes.visible : classes.hidden;

  return (
    <section id="about" className={classes.ctn}>
      <ParticlesAbout />
      <div ref={ref} className={`${classes.about} ${scrollClasses}`}>
        <h2>About Me</h2>
        <p>
          I started my career as a Translator and Project Manager, where I
          discovered that my passion was actually coding. A few years later,
          settled in Australia, I left the world of translation behind and
          started the journey towards a web development career. Today, I build
          front-end applications with React.js. Apps that are dynamic, user-friendly,
          and accessible. I've also taken a dip in the back end of things,
          having built PHP and MySQL powered full-stack websites. A strong
          believer in a life of learning, I am always looking for new ideas and
          concepts to integrate into my work.
        </p>
      </div>
    </section>
  );
};

export default About;
