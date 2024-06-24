import '../projectsAndAbout.css';

function Projects() {
    return(
        <div className="projects">
            <div className="header-wrapper flex flex-row items-center justify-center">
                <h1>Projects</h1>
            
            </div>

            <div className="project-wave-divider self-end">
                <svg viewBox="0 0 1280 262" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1018.59 161C1119.78 243.269 1178 -28 1280 227V262H0V0C66.894 111 195.534 186.66 293.195 111C436.472 0 594.93 196.5 666.568 212.5C780.617 237.972 885.752 53.0004 1018.59 161Z" fill="#FFFEFB"/>
                </svg>
            </div>


            <div className="content flex flex-col items-center align-center my-10 px-11" style={{height: "100vh"}}>
                <h2> 🔨 This page is currently under construction</h2>
            </div>
            
        </div>
    )


}

export default Projects