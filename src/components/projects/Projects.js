import classes from "./Projects.module.css";
import { useState } from "react";
import Card from "../UI/Card";
import EshopDetail from "./EshopDetail";
import EtrackerDetail from "./EtrackerDetail";
import eshop from "../../assets/eshop-card-1.png";
import expenseTracker from "../../assets/expense-tracker-card-dark.png";

const Projects = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modal2IsVisible, setModal2IsVisible] = useState(false);

  return (
    <section id="projects" className={classes.projects}>
      <h2>Projects</h2>
      {modalIsVisible && (
        <EshopDetail onClose={() => setModalIsVisible(false)} />
      )}
        {modal2IsVisible && (
        <EtrackerDetail onClose={() => setModal2IsVisible(false)} />
      )}
      <div className={classes.projectCards}>
        <Card onClick={() => setModalIsVisible(true)}>
          <img src={eshop} alt="eshop preview" />
          <h2>eShop Demo</h2>
        </Card>
        <Card onClick={() => setModal2IsVisible(true)}>
          <img src={expenseTracker} alt="expense-tracker preview" />
          <h2>Expense Tracker</h2>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
