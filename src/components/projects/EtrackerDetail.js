import Modal from "../UI/Modal";
import ImageGallery from "../UI/ImageGallery";
import homeDark from "../../assets/tracker-home-dark.png";
import homeLight from "../../assets/tracker-home-light.png";
import newDark from "../../assets/tracker-new-dark.png";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import classes from "./ProjectDetail.module.css";

const EtrackerDetail = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.images}>
        <ImageGallery
          images={[homeDark, homeLight, newDark]}
          title="eShop demo site screenshot"
        />
      </div>
      <div className={classes.content}>
        <h1>Expense Tracker</h1>
        <p>
          A one-page application that tracks the user's transactions and
          calculates the user's total balance based on entered income and
          expenses. The App was built with React.js and designed for tablet and
          mobile use. The technologies used include React Hooks, Local Storage,
          Context API, and Styled Components.
        </p>
        <a
          href="https://expense-tracker-9b607.web.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiExternalLink /> Demo
        </a>
        <a
          href="https://github.com/MayraBorgonovo/expense-tracker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub /> Source
        </a>
      </div>
    </Modal>
  );
};

export default EtrackerDetail;
