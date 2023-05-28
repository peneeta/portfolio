import './NavbarStyle.css'

function Navbar (){
    return(
        <nav>
            <div className="nav-links">
                <ul id="nav-links"> 
                    <li><a href="#" class="active">Home</a></li>
                    <li><a href="#research">Research</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#">Get in Touch</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;