
import './NavbarStyle.css'
import React, { useEffect, useRef, useLocation } from "react";

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
            <button className="mobile-toggle" aria-controls="nav-links" aria-expanded="false" onClick={navToggle}>
            </button>

            <ul id="nav-links" data-visible='false' className="nav-links"> 
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#experience" className="">Projects</a></li>
                <li><a href="#resources" className="">About</a></li>

                <div className="button">
                    <a href="#" className="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Download CV</a>
                </div>
            </ul>


        </nav>
    )
    
}

export default Navbar;