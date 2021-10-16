import { Link } from "react-router-dom";
import Button from "../components/UI/Button";

const NotFound = () => {

  return (
    <div className='centered'>
      <h2>Sorry!</h2>
      <p>This page doesn't exist.</p>
      <Button><Link to='/'>Go Back</Link></Button>
    </div>
  );
};

export default NotFound;