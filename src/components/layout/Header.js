import React, { useEffect, useState } from "react";
import {Link} from 'react-scroll'; 
import Logo from '../../assets/logo.png';
import MobileMenu from "./MobileMenu";
import classes from './Header.module.css';

const Header = () => {
   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
      setScrolled(window.pageYOffset > 10)
      );
    }

    return () => {
      window.removeEventListener('scroll', () => setScrolled(false));
    }
  }, []);

  return (
    <header className={`${classes.header} ${
      scrolled ? classes.scrolled : ""
    }`}>
      <div className={classes.logo}><img src={Logo} alt="mb" /></div>
        <MobileMenu />
      <nav className={classes.nav}>
        <ul>
          <li><Link to="about" spy={true} smooth={true} >About</Link></li>
          <li><Link to="tech" spy={true} smooth={true}>Skills</Link></li>
          <li><Link to="projects" spy={true} smooth={true}>Projects</Link></li>
          <li><a href="mailto:mayra.borgonovo@gmail.com">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;