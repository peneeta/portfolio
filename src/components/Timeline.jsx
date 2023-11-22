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
                        <h3 className="timeline-title">Capstone Senior Thesis (University of Virginia, Charlottesville)</h3>
                        <ul className='bullet-list'>
                            <li>Collaborate with 2 graduate and 3 undergraduates to develop four deep learning models in the Sheffield lab</li>
                            <li>Implementing a transformer model trained on tokenized BED files to predict closely related genomic regions.</li>
                            <li>Compare model results using classification tasks.</li>
                        </ul>
                        <div className="links">
                            <ul>
                                <li><a href="https://databio.org/"> 🔗 Sheffield Lab Website</a></li>
                                <li>Final model to come!</li>
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
                        <h3 className="timeline-title">DAAD RISE Intern Computational Chemistry (FAU Erlangen-Nürnberg)</h3>
                        <ul className='bullet-list'>
                            <li>Worked in the Gmeiner Lab, mentored by graduate student Eduard Neu</li>
                            <li>Simulated 5 GPCR receptors with associated ligand binding using molecular dynamics simulation software such as GROMACS, AMBER, and CHARMMGUI</li>
                            <li>Conducted hydrogen bonding and RMSD analysis comparing mutant and wild-type ligands</li>   
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
                        <h3 className="timeline-title">iGEM Competition Researcher and Wiki Lead (University of Virginia, Charlottesville)</h3>
                        <ul className='bullet-list'>
                            <li>Developed a lateral flow assay (LFA) test strip for atherosclerosis using antibodies produced in <i>E. coli</i></li>
                            <li>Designed and implemented the team website documenting every part of our research</li>
                        </ul>
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
                        <h3 className="timeline-title">Chemistry Lab Assistant (Christopher Newport University, Newport News)</h3>
                        <ul className='bullet-list'>
                            <li>Worked in a chemistry lab supervised by Dr. Tarek Abdel Fattah </li>
                            <li>Synthesized and characterized Bio-Char, a form of activated charcoal made from organic matter</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Timeline