import classes from "./Card.module.css";
import { useInView } from "react-intersection-observer";

const Card = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const scrollClasses = inView ? classes.visible : classes.hidden;

  return (
    <div
      ref={ref}
      className={`${classes.card} ${scrollClasses} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Card;
