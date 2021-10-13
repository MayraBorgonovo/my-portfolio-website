import homeImg from '../../assets/eshop-home.png';
import detailImg from '../../assets/eshop-detail.png';
import bagImg from '../../assets/eshop-bag.png';
import Modal from '../UI/Modal'
import ImageGallery from '../UI/ImageGallery';
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import classes from './ProjectDetail.module.css';

const EshopDetail = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.images}>
        <ImageGallery 
        images={[homeImg, detailImg, bagImg]} 
        title= 'eShop demo site screenshot' />
      </div>
      <div className={classes.content}>
        <h1>eShop Demo</h1>
        <p>An e-commerce demo App built with React.js and integrated 
          with Firebase and Stripe. 
          Other technologies used include React Hooks, Redux Toolkit, Redux Persist, and Axios. 
        </p>
        <a href="http://ecommerce-site-d9c6c.web.app/" target="_blank" rel="noopener noreferrer"><FiExternalLink /> Demo</a>
        <a href="https://github.com/MayraBorgonovo/eShop-Demo" target="_blank" rel="noopener noreferrer"><FiGithub /> Source</a>
      </div>
    </Modal>
  )
}

export default EshopDetail;
