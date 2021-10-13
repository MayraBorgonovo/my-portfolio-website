import React from 'react'
import homeImg from '../../assets/eshop-home.png';

import Modal from '../UI/Modal'
import classes from './ProjectDetail.module.css';
import ImageGallery from '../UI/ImageGallery';
import homeDark from '../../assets/tracker-home-dark.png';
import homeLight from '../../assets/tracker-home-light.png';
import newDark from '../../assets/tracker-new-dark.png'

const EtrackerDetail = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.images}>
        <ImageGallery 
        images={[homeDark, homeLight, newDark]} 
        title= 'eShop demo site screenshot' />
      </div>
      <div className={classes.content}>
        <h1>Expense Tracker</h1>
        <p>A simple expense tracker App built with React.js and designed for 
          tablet and mobile use. The technologies used include React Hooks, 
          Local Storage, Context API, and Styled Components. 
        </p>
        <a href="https://expense-tracker-9b607.web.app" target="_blank" rel="noopener noreferrer">View Demo</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">Code</a>
      </div>
    </Modal>
  )
}

export default EtrackerDetail;
