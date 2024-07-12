import './FooterStyle.css'

function Footer () {
    

    return (

        <footer>
            <div className="footer-wave-divider">
                <svg viewBox="0 0 1280 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M759 78C882.93 128.478 1252.5 -26 1307 102V137H-28L-63 0C6.76831 111 87.1426 153.66 189 78C290.857 2.33952 334.5 125.999 415 102C495.5 78 567.5 0 759 78Z" fill="#FFDDD6"/>
                </svg>
            </div>
            <div className="top-text">
                <p>Created by Peneeta :)</p>
                <p><span>&copy;</span> {new Date().getFullYear()}</p>
            </div>
        </footer>



    )
}

export default Footer