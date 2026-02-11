import "./Navbar.css"
import { Link } from "react-router-dom";
import About from "../../pages/About/About";
function Navbar() {
    return (
        <div className="navbar">
            <Link to='/'>
             <div>
                <h1>Mithun Solutions</h1>
            </div>
            </Link>
           
            <div className="nav_links">
                <Link to="/about">
                <span>About</span>
                </Link>
                
                <Link to="/contact">
                <span>Contact</span>
                </Link>


                 <Link to="/recipes">
                <span>Recipes</span>
                </Link>
            </div>
        </div>
    );
}



export default Navbar