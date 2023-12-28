import './TimelineStyle.css'

function Timeline () {
    return(

        <div className="md:grid-cols-2">
            <ul className="timeline">
                <li className="timeline-item period">
                    <div className="timeline-info"></div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h2 className="timeline-title">2023</h2>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>September 2023 to May 2024</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <div className="header">
                            <h3 className="timeline-title">Biomedical Engineering Capstone Thesis</h3>
                            <h2>Sheffield Lab, University of Virginia - Charlottesville</h2>
                        </div>
                        <ul className='bullet-list'>
                            <li>Developing a transformer deep learning model to translate natural language search queries to relevant genomic region sets</li>
                            <li>Collaborating with three undergraduate students developing autoencoder, diffusion, and Word2Vec-based models to compare performance between models</li>
                            <li>Incorporating the best-performing model into a search interface that returns genomic coordinates based on a user-entered query</li>
                        </ul>
                        <div className="links">
                            <ul>
                                <li><a href="https://databio.org/"> 🔗 Sheffield Lab Website</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>June 2023 to August 2023</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <div className="header">
                            <h3 className="timeline-title">DAAD RISE Internship in Computational Chemistry</h3>
                            <h2>Gmeiner Lab, Friedrich-Alexander-Universität Erlangen-Nürnberg - Germany</h2>
                        </div>
                        
                        <ul className='bullet-list'>
                            <li>Simulated 5 GPCR receptors with associated ligand binding using GROMACS, AMBER, CHARMMGUI, and other molecular dynamics simulation softwares</li>
                            <li>Conducted hydrogen bonding and RMSD analysis to compare mutant and wild-type ligand binding</li> 
                            <li>Completed Master's-level workshop in Drug Discovery at FAU taught by Dr. Petra Imhof</li>  
                        </ul>
                        <div className='links'>
                            <ul>
                                <li><a href="http://www.medchem.uni-erlangen.de/gmeinerlab/">🔗 Gmeiner Lab Website</a></li>
                                <li><a href="https://docs.google.com/document/d/1Zae1JEqIUgD9U-f2B-E3epebK3Vle18ii6bCqq5JsJc/edit?usp=sharing">📄 MD Simulation Workflow</a></li>
                            </ul>

                        </div>
                    </div>
                </li>
                <li className="timeline-item period">
                    <div className="timeline-info"></div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h2 className="timeline-title">2022</h2>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>June 2022 to October 2022</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <div className="header">
                            <h3 className="timeline-title">iGEM Competition Researcher and Wiki Lead</h3>
                            <h2>UVA iGEM, University of Virginia - Charlottesville</h2>
                        </div>

                        <ul className='bullet-list'>
                            <li>Collaborated with 11 undergraduates to develop a lateral flow assay (LFA) test strip for early atherosclerosis using recombinant antibodies produced in <i>E. coli</i></li>
                            <li>Designed and implemented the UVA iGEM 2022 team website using Bootstrap, Flask, and JavaScript animation libraries</li>
                            <li>Led coding sessions and taught team members the basics of HTML, CSS, and committing changes to a shared Git repository</li>
                            <li>Edited the team promotional video using Adobe Premiere Pro and After Effects</li>
                            <li>Created detailed schedules and gave frequent updates at team meetings to ensure that deadlines for Wiki and video submission were met</li>
                            <li>Presented project at the iGEM Midsummer Meetup at the University of Maryland, attended iGEM International Conference in Paris, FR</li>
                        </ul>

                        <div className="links">
                            <ul>
                                <li><a href="https://2022.igem.wiki/virginia/">🔗 UVA iGEM 2022 Website</a></li>
                                <li><a href="https://video.igem.org/w/5xFijFUtgcjQ4hk3LWj7uS?start=0s">🔗 Promotional Video</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="timeline-item period">
                    <div className="timeline-info"></div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h2 className="timeline-title">2021</h2>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>June 2021 to August 2021</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <div className="header">
                            <h3 className="timeline-title">Chemistry Lab Assistant</h3>
                            <h2>Fattah Lab, Christopher Newport University - Newport News</h2>
                        </div>
                        
                        <ul className='bullet-list'>
                            <li>Synthesized and characterized Bio-Char, a form of activated charcoal made from organic matter</li>
                            <li>Performed methylene blue absorption analysis for magentized Bio-Char, presented results at CNU Sigma XI Research Symposium</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Timeline