
import './NavbarStyle.css'

function Navbar (){
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
                <li><a href="#" className="">Home</a></li>
                <li><a href="#research" className="">Research</a></li>
                <li><a href="#resources" className="">Resources</a></li>
            </ul>
        </nav>
    )

    
}

export default Navbar;