import { useInView } from "react-intersection-observer";
import { IconContext } from "react-icons/lib";
import { FaJs, FaReact, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiMongodb, SiPhp, SiNextDotJs, SiJquery, SiBootstrap, SiFigma, SiAdobexd, SiRedux, SiFirebase } from "react-icons/si";
import { Parallax } from "react-parallax";
import blob from '../../assets/about-blob.png'
import classes from "./Tech.module.css";


const Tech = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const scrollClasses = inView ? classes.visible : classes.hidden;

  return (
    <IconContext.Provider value={{style: {color: '#56e9f3', margin: '0 auto', fontSize: '4rem', display: 'block'}}}>
      <Parallax strength={200} bgImage={blob} bgClassName={classes.image}>
    <section id="tech"  className={classes.techCtn}>
      <h2>Technology Stack</h2>
      <p>Some things I've worked with.</p>
      <div className={classes.list}>
          <ul ref={ref} className={scrollClasses}>
            <li><AiOutlineHtml5 />HTML</li>
            <li><FaCss3Alt />CSS</li>
            <li><FaJs />JavaScript</li>
            <li><SiPhp />PHP</li>
            <li><FaReact />React.js</li>
            <li><SiNextDotJs />Next.js</li>
            <li><SiRedux />Redux</li>
            <li><SiJquery />JQuery</li>
            <li><SiBootstrap />Bootstrap</li>
            <li><SiFigma />Figma</li>
            <li><SiAdobexd />XD</li>
            <li><SiFirebase />Firebase</li>
            <li><FaDatabase />MySQL</li>
            <li><SiMongodb />MongoDB</li>
          </ul>
      </div>
    </section>
      </Parallax>
    </IconContext.Provider>
  );
};

export default Tech;
