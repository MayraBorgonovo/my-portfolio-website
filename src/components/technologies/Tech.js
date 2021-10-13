import { IconContext } from "react-icons/lib";
import { FaJs, FaReact, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiPhp, SiNextDotJs, SiJquery, SiBootstrap, SiFigma, SiAdobexd, SiRedux, SiFirebase } from "react-icons/si";
import Card from '../UI/Card';
import classes from "./Tech.module.css";

const Tech = () => {

  return (
    <IconContext.Provider value={{color: '#56e9f3', style: {marginRight: '10px', fontSize: '2rem'}}}>
    <section id="tech"  className={classes.techCtn}>
      <h2>Skills</h2>
      <p>Some technologies I've worked with:</p>
      <div className={classes.tech}>
        <Card  >
          <ul>
            <li><AiOutlineHtml5 />HTML</li>
            <li><FaCss3Alt />CSS</li>
            <li><FaJs /> JavaScript</li>
            <li><SiPhp />PHP</li>
          </ul>
        </Card>
        <Card >
          <ul >
            <li><FaReact /> React.js</li>
            <li><SiNextDotJs />Next.js</li>
            <li><SiRedux />Redux</li>
            <li><SiJquery />Jquery</li>
            <li><SiBootstrap />Bootstrap</li>
          </ul>
        </Card>
        <Card >
          <ul >
            <li><SiFigma />Figma</li>
            <li><SiAdobexd />XD</li>
            <li><SiFirebase />Firebase</li>
            <li><FaDatabase />MySQL</li>
          </ul>
        </Card>
      </div>
    </section>
    </IconContext.Provider>
  );
};

export default Tech;
