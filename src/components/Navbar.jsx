
import './NavbarStyle.css'
import Resume from '../assets/UpdatedRes.pdf';
import React, { useEffect, useRef, useLocation } from "react";
import {Link, NavLink} from 'react-router-dom';


function Navbar ({ observerRefs }){

    function navToggle () {
        const primaryNav = document.querySelector('.nav-links');
        const toggle = document.querySelector('.mobile-toggle');
        const visibility = primaryNav.getAttribute('data-visible');

        if (visibility === "false"){
            primaryNav.setAttribute('data-visible', true);
            toggle.setAttribute('aria-expanded', true);
        } else if (visibility === "true") {
            primaryNav.setAttribute('data-visible', false);
            toggle.setAttribute('aria-expanded', false);
        }
    }
        
    return(
        
        <nav>
            <div className="button-background">
                <button className="mobile-toggle" aria-controls="nav-links" aria-expanded="false" onClick={navToggle}>
                </button>
            </div>


            <ul id="nav-links" data-visible='false' className="nav-links"> 
                <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink></li>
                <li><NavLink to="/projects" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Projects</NavLink></li>
                <li><NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>About</NavLink></li>

                <div className="button text-center">
                    <a href={Resume} target="_blank" className="rounded-md">Download CV</a>
                </div>
            </ul>

        </nav>
    )
    
}

export default Navbar;