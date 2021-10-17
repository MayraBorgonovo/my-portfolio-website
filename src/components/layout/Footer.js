import { FiGithub, FiMail } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import classes from './Footer.module.css';

const Footer = () => {

  return (
    <footer className={classes.footer}>
      <ul>
        <li><a href="http://github.com/MayraBorgonovo" target="_blank" rel="noopener noreferrer"><FiGithub /></a></li>
        <li><a href="https://www.linkedin.com/in/mayra-borgonovo/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
        <li><a href="mailto:mayra.borgonovo@gmail.com"><FiMail /></a></li>
      </ul>
      <p>&copy;2021 Mayra Borgonovo</p>
    </footer>
  );
};

export default Footer;