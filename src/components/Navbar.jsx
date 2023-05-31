import './NavbarStyle.css'

function Navbar (){
    return(
        <nav>
            <div className="nav-links">
                <ul id="nav-links"> 
                    <li><a href="#" className="active hover-anim">Home</a></li>
                    <li><a href="#research" className="hover-anim">Research</a></li>
                    <li><a href="#projects" className="hover-anim">Projects</a></li>
                    <li><a href="#contact" className="hover-anim">Get in Touch</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;