import './TimelineStyle.css'
// MAKE THIS INTO A TABLE
function Timeline () {
    return(
        <div className="timeline mx-8">
            <div className="entry">
                <div className="heading">
                    <div className="date">
                        <p>September 2023 to May 2024</p>
                    </div>
                    <div className="title">
                        <p>Capstone Senior Thesis</p>
                    </div>
                    <div className="place">
                        <p>University of Virginia (Charlottesville, VA)</p>
                    </div>
                </div>
                <div className="text">
                    <p>
                    Undergraduate thesis project in the Sheffield Lab. Implement a transformer model to predict closely related genomic regions.
                    </p>
                </div>
            </div>

            <div className="entry">
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
                    Computational Chemistry internship sponsored by the Deutscher Akademischer Austauschdienst (DAAD). Used molecular dynamics simulation software such as GROMACS, AMBER, and CHARMMGUI to model GPCR receptors with associated ligand binding. Shadowed a Drug-Discovery lab summer course taught by Dr. Petra Imhof. Attended the DAAD Heidelberg conference to meet other DAAD researchers.
                    </p>
                </div>
            </div>
            <div className="entry">
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
                    Worked with a team of 11 other students to research and develop a lateral flow assay (LFA) test strip for atherosclerosis. Performed transformations on <i>E. coli</i>, ran restriction digests and SDS-PAGE gels. Worked with AlphaFold on the UVA Rivanna HPC to visualize protein structure. Designed and implemented the team website documenting every part of our research.
                    </p>
                </div>
                {/* RELEVANT LINKS */}
                <div className="links">
                    <a href="https://bio.as.virginia.edu/content/virginia-igem-team-f%C3%AAted-paris">
                    </a>
                </div>
            </div>
            <div className="entry">
                <div className="heading">
                    <div className="date">
                        <p>June 2021 to August 2021</p>
                    </div>
                    <div className="title">
                        <p>Chemistry Student Researcher</p>
                    </div>
                    <div className="place">
                        <p>Christopher Newport University (Newport News, VA, USA)</p>
                    </div>
                </div>
                <div className="text">
                    <p>
                    Characterized and synthesized Bio-Char, a form of activated charcoal made from organic matter, with a team of four summer students. Performed FTIR and absorption analysis, presented results at Sigma XI Research Symposium.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Timeline