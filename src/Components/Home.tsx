import { Link } from "react-router-dom";
import { URLs } from "../Constants/System";

const Home = () => {
  return (
    <div>
      <div>AADUDAM ANDHRA</div>
      <Link to={URLs.REGISTER}>Register</Link>
    </div>
  );
};

export default Home;
