import { Link } from "react-router-dom";
import "./leyaut.scss";

export default function Layout({ children }) {
  return(
    <>
    <div className="layout">
        <div className="yuli">
          <Link to="/">
            <h1>Person details</h1>
          </Link>
          <Link to="/about">
            <h1>Experiences</h1>
          </Link>
          <Link to="/template">
            <h1>Template</h1>
          </Link>
        </div>
      {children}
    </div>
    </>
  )
};