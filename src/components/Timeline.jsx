import './TimelineStyle.css'

function Timeline () {
    return(
        <div className="timeline">
            <div className="entry left-container">
                <div className="heading">
                    <div className="date">
                        <p>June 2023 to August 2023</p>
                    </div>
                    <div className="title">
                        <p>DAAD RISE Intern Computational Chemistry</p>
                    </div>
                    <div className="place">
                        <p>FAU Erlangen-Nürnberg (Erlangen, Germany)</p>
                    </div>
                </div>
                <div className="text">
                    <p>
                    Computational Chemistry internship sponsored by the Deutscher Akademischer Austauschdienst (DAAD) under Eduard Neu. Use molecular dynamics simulation software such as GROMACS, AMBER, and CHARMMGUI to model GPCR receptors with associated ligand binding. Attend the DAAD Heidelberg conference to meet other DAAD researchers.
                    </p>
                </div>
            </div>
            <div className="entry right-container">
                <div className="heading">
                    <div className="date">
                        <p>June 2022 to October 2022</p>
                    </div>
                    <div className="title">
                        <p>iGEM Competition Researcher and Wiki Lead</p>
                    </div>
                    <div className="place">
                        <p>University of Virginia (Charlottesville, VA, USA)</p>
                    </div>
                </div>
                <div className="text">
                    <p>
                    Worked with a team of 11 other students to research and develop a lateral flow assay (LFA) test strip for atherosclerosis. Performed transformations on E. coli bacteria, ran restriction digests and SDS-PAGE gels. Worked with AlphaFold on the UVA Rivanna HPC to visualize protein structure. Designed and implemented the team website documenting every part of our research.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Timeline