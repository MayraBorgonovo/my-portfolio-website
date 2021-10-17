import Button from "../UI/Button";
import ParticlesHero from "./ParticlesHero";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.container}>
      <ParticlesHero />
      <div className={classes.intro}>
        <p>Hi,</p>
        <h1>I'm Mayra</h1>
        <p>I'm a Front-End Developer based in Sydney.</p>
        <Button><a href="mailto:mayra.borgonovo@gmail.com">Contact Me</a></Button>
      </div>
    </section>
  );
};

export default Hero;
