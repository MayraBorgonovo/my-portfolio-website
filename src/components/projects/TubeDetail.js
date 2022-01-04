import homeImg from "../../assets/tube-arrivals-1.png";
import detailImg from "../../assets/tube-arrivals-2.png";
import Modal from "../UI/Modal";
import ImageGallery from "../UI/ImageGallery";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import classes from "./ProjectDetail.module.css";

const TubeDetail = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.images}>
        <ImageGallery
          images={[homeImg, detailImg]}
          title="Tube Arrivals site screenshot"
        />
      </div>
      <div className={classes.content}>
        <h1>Tube Arrivals</h1>
        <p>
          A one-page application that displays London Underground arrivals by
          line and station using the Transport for London API. Built using
          React.js and CSS modules.
        </p>
        <a
          href="https://tube-arrivals.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiExternalLink /> Demo
        </a>
        <a
          href="https://github.com/MayraBorgonovo/london-api-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub /> Source
        </a>
      </div>
    </Modal>
  );
};

export default TubeDetail;
