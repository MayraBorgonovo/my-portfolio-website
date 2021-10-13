import React from 'react'
import homeImg from '../../assets/eshop-home.png';
import detailImg from '../../assets/eshop-detail.png';
import bagImg from '../../assets/eshop-bag.png';
import Modal from '../UI/Modal'
import classes from './ProjectDetail.module.css';
import ImageGallery from '../UI/ImageGallery';

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
        <p>An e-commerce demo site built with React.js and integrated 
          with Firebase as backend and Stripe for payment processing. 
          Other technologies used include React Hooks, Redux Toolkit, Redux Persist, and Axios. 
        </p>
        <a href="http://ecommerce-site-d9c6c.web.app/" target="_blank" rel="noopener noreferrer">View Demo</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">Code</a>
      </div>
    </Modal>
  )
}

export default EshopDetail;
