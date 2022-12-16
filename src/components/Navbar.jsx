import './NavbarStyle.css'

function Navbar (){
    return(
        <nav>
            <div className="nav-links">
                <ul id="nav-links"> 
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Research</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;