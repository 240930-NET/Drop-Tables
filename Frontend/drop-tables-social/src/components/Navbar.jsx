import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import SideBar from "./SideBar.jsx";
import { UserContext } from "../context/UserContext.jsx";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Ensure it starts closed
    const { logout } = useContext(UserContext);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState); // Toggle the menu state
    };

    return (
        <>
            <nav>
                <ul id="navList">
                    <li id="logo">
                        <div className="bookIcon">
                            <div className="bookLabel" />
                        </div>
                        <NavLink id="dropTable" to="/home">DROP TABLE</NavLink>
                    </li>
                    <section id="navButtons">
                        <li className="navButton">
                            <NavLink to="/home">Home</NavLink>
                        </li>
                        <li className="navButton">
                            <NavLink to="/feed">Your Feed</NavLink>
                        </li>
                        <li id="profileButton" className="navButton">
                            <NavLink to="/profile">Profile</NavLink>
                        </li>
                    </section>
                    <section id="avatarSection">
                        <li>
                            <button onClick={logout}>Logout</button>
                        </li>
                        <li>
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDsP6mnBn3JUxcDsy8HkUz3QN2KMmrxScVtg&s" 
                                alt="User Avatar" 
                                id="avatar" 
                            />
                        </li>
                    </section>
                </ul>
                <section id="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </section>
            </nav>
            {/* Sidebar should be placed here */}
            <SideBar isOpen={isMenuOpen} />
        </>
    );
}

export default Navbar;                {/* The hamburger menu is used to toggle the menu on and off */}
            {/* The sidebar is placed here, and is only visible when the menu is open */}

