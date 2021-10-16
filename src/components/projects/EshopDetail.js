import homeImg from "../../assets/eshop-home.png";
import detailImg from "../../assets/eshop-detail.png";
import bagImg from "../../assets/eshop-bag.png";
import Modal from "../UI/Modal";
import ImageGallery from "../UI/ImageGallery";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import classes from "./ProjectDetail.module.css";

const EshopDetail = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.images}>
        <ImageGallery
          images={[homeImg, detailImg, bagImg]}
          title="eShop demo site screenshot"
        />
      </div>
      <div className={classes.content}>
        <h1>eShop Demo</h1>
        <p>
          An e-commerce demo App built with React.js and integrated with
          Firebase and Stripe. Other technologies used include React Hooks,
          Redux Toolkit, Redux Persist, and Axios. This is a simple application
          built as a template for an E-commerce website. The application loads
          products to a Firebase database and displays them. Users can view
          products displayed in two categories. Users can click on any product
          to get more information including pricing, size, an description. Users
          can select items, add them to their shopping cart, checkout. Users can
          view their order history from their dashboard.
        </p>
        <a
          href="http://ecommerce-site-d9c6c.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiExternalLink /> Demo
        </a>
        <a
          href="https://github.com/MayraBorgonovo/eShop-Demo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub /> Source
        </a>
      </div>
    </Modal>
  );
};

export default EshopDetail;
