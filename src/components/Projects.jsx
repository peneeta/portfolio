import "./ProjectsStyle.css"

function Projects () {
    return(
        <div className="projects">
            <div className="projectText">
                <div className="title">
                    <p>Portfolio</p>
                </div>
                <div className="desc">
                    <p>My portfolio site (which you're on right now), fully designed and implemented by me.</p>
                </div>
            </div> 
            <div className="projectText">
                <div className="title">
                    <p>UVA Engineering International Programs Student Planner</p>
                </div>
                <div className="desc">
                    <p>Student-made website created from previous interns in the UVA Engineering International Programs office. </p>
                </div>
            </div>
            <div className="projectText">
                <div className="title">
                    <p>UVA iGEM 2022 Team Wiki</p>
                </div>
            </div>
        </div>
        
    )
}

export default Projects