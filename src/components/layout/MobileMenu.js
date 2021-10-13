import { Link } from "react-scroll";
import { useState } from "react";
import classes from "./MobileMenu.module.css";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`${classes.mobile} ${isOpen ? classes.visible : ""}`}>
          <button className= {`${classes.burger} ${isOpen ? classes.visible : ''}`} onClick={() => setIsOpen((prevState) => !prevState)}>
      <div />
      <div />
      <div />
    </button>
    <nav
      className={`${classes.mobileNav} ${isOpen ? classes.visible : ""}`}
    >
      <Link to="about" spy={true} smooth={true}>
        About
      </Link>
      <Link to="tech" spy={true} smooth={true}>
        Skills
      </Link>
      <Link to="projects" spy={true} smooth={true}>
        Projects
      </Link>
      <a href="mailto:mayra.borgonovo@gmail.com">Contact</a>
    </nav>
    </div>
  );
};

export default MobileMenu;
