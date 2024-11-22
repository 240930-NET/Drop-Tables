import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav>
            <ul>
                <li id="logo">
                    <div className="bookIcon">
                        <div className="bookLabel"/>
                    </div>
                    <NavLink to="/home">DROP TABLE</NavLink>
                </li>
                <li className="navButton">
                    <NavLink to="/home">Home</NavLink>        
                </li>
                <li className="navButton">
                    <NavLink to="/feed">Your Feed</NavLink>        
                </li>
                <li className="navButton">
                    <NavLink to="/profile">Profile</NavLink>        
                </li>
            </ul>
            
        </nav>
    )
    
    
}

export default Navbar;