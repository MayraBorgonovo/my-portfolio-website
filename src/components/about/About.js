import { useInView } from 'react-intersection-observer'
import ParticlesAbout from "./ParticlesAbout";
import classes from "./About.module.css";

const About = () => {
    const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const scrollClasses = inView ? classes.visible : classes.hidden;

  return (
    <section id="about" className={classes.ctn}>
        <ParticlesAbout />
      <div ref={ref} className={`${classes.about} ${scrollClasses}`}>
          <h2>About Me</h2>
          <p>
            I'm an Argentine born Translator turned Web Developer. A strong
            advocate of the perpetual-student life, I'm always looking for ways
            of making my work better. I focus building front-end,
            user-friendly, dynamic applications with React. I've also dived
            in the back-end world, designing and creating MyQSL databases and 
            creating full-stack websites with PHP. We need more text here so 
            I'm just filling this for now.
          </p>
      </div>
    </section>
  );
};

export default About;
