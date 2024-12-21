import './TimelineStyle.css'
import AOS from 'aos';

function Timeline () {
    AOS.init({
        once: true,
        duration: 1500,
        delay: 40,
        easing: 'ease-in-sine'
    });

    return(

        <div className="md:grid-cols-2">
            <ul className="timeline">
            <li className="timeline-item">
                    <div className="timeline-info">
                        <span>September 2024 - Present</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <div className="header">
                            <h3 className="timeline-title mb-3 pt-7">Research Assistant</h3>
                            <h2>Lugo-Martinez Lab • Carnegie Mellon University • Pittsburgh</h2>
                        </div>
                        <div className='desc pt-7'>
                            <p> Analyze bulk RNAseq and scRNAseq data from clinical heart and lung tissue samples, conduct deconvolution and cell type annotation. </p>
                        </div>
                        <div className="links">
                            <ul>
                                {/* To fill in later */}
                            </ul>
                        </div>

                        <div className="skill-tags">
                            <button className="py-1 px-5 me-2 mb-2 text-sm rounded-full">Scanpy</button>
                            <button className="py-1 px-5 me-2 mb-2 text-sm rounded-full">Scaden</button>
                            <button className="py-1 px-5 me-2 mb-2 text-sm rounded-full">scRNAseq</button>
                            <button className="py-1 px-5 me-2 mb-2 text-sm rounded-full">Bulk RNAseq</button>
                        </div>
                    </div>
                </li>
                <li className="timeline-item period">
                    <div className="timeline-info"></div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h2 className="timeline-title">2024</h2>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>September 2023 to May 2024</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <div className="header">
                            <h3 className="timeline-title mb-3 pt-7">Biomedical Engineering Capstone Thesis</h3>
                            <h2>Sheffield Lab • University of Virginia • Charlottesville</h2>
                        </div>
                        <div className='desc pt-7'>
                            <p> Developing a transformer model to convert a natural language search query to relevant regions representing sites of epigenomic modification (presented in BED file format). </p>
                        </div>
                        <div className="links">
                            <ul>
                                <li><a href="https://databio.org/"> 🔗 Sheffield Lab Website</a></li>
                            </ul>
                        </div>

                        <div className="skill-tags">
                            <button className="py-1 px-5 me-2 mb-2 text-sm rounded-full">PyTorch</button>
                            <button className="py-1 px-5 me-2 mb-2 text-sm rounded-full">Genomics</button>
                            <button className="py-1 px-5 me-2 mb-2 text-sm rounded-full">Deep Learning</button>
                            <button className="py-1 px-5 me-2 mb-2 text-sm rounded-full">NLP</button>
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
                            <h3 className="timeline-title mb-3 pt-7">DAAD RISE Internship in Computational Chemistry</h3>
                            <h2>Gmeiner Lab • Friedrich-Alexander-Universität Erlangen-Nürnberg • Germany</h2>
                        </div>
                        
                        <div className='desc pt-7'>
                            <p>Simulating GPCR receptors and associated ligand binding with molecular dynamics software.</p>
                        </div>
                        <div className='links'>
                            <ul>
                                <li><a href="http://www.medchem.uni-erlangen.de/gmeinerlab/">🔗 Gmeiner Lab Website</a></li>
                                <li><a href="https://docs.google.com/document/d/1Zae1JEqIUgD9U-f2B-E3epebK3Vle18ii6bCqq5JsJc/edit?usp=sharing">📄 MD Simulation Workflow</a></li>
                            </ul>
                        </div>

                        <div className="skill-tags">
                            <button className="py-1 px-5 me-2 mb-2 text-sm rounded-full">High-Performance Computing</button>
                            <button className="py-1 px-5 me-2 mb-2 text-sm rounded-full">VMD</button>
                            <button className="py-1 px-5 me-2 mb-2 text-sm rounded-full">GROMACS</button>
                            <button className="py-1 px-5 me-2 mb-2 text-sm rounded-full">AMBER</button>
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
                            <h3 className="timeline-title mb-3 pt-7">iGEM Competition Researcher and Wiki Lead</h3>
                            <h2>UVA iGEM • University of Virginia • Charlottesville</h2>
                        </div>

                        <div className='desc pt-7'>
                            <p>Developing a lateral flow test strip for early atherosclerosis detection using recombinant detection antibodies produced in bacteria.</p>
                        </div>

                        <div className="links">
                            <ul>
                                <li><a href="https://2022.igem.wiki/virginia/">🔗 UVA iGEM 2022 Website</a></li>
                                <li><a href="https://video.igem.org/w/5xFijFUtgcjQ4hk3LWj7uS?start=0s">🔗 Promotional Video</a></li>
                                <li><a href="https://bio.as.virginia.edu/virginia-igem-team-feted-paris">🔗 Department of Biology Media Post</a></li>
                            </ul>
                        </div>

                        <div className="skill-tags">
                            <button className="py-1 px-5 me-2 mb-2 text-sm rounded-full">Synthetic Biology</button>
                            <button className="py-1 px-5 me-2 mb-2 text-sm rounded-full">Web Dev</button>
                            <button className="py-1 px-5 me-2 mb-2 text-sm rounded-full">Experimental Design</button>
                            <button className="py-1 px-5 me-2 mb-2 text-sm rounded-full">Bacterial Cell Culture</button>
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
                            <h3 className="timeline-title mb-3 pt-7">Chemistry Lab Assistant</h3>
                            <h2>Fattah Lab • Christopher Newport University • Newport News</h2>
                        </div>
                        
                        <div className='desc pt-7'>
                            <p>Synthesizing and characterizing magnetized BioChar for use in metallic wastewater filtration.</p>
                        </div>

                        <div className="skill-tags py-4">
                            <button className="py-1 px-5 me-2 mb-2 text-sm rounded-full">Spectrophotometry</button>
                            <button className="py-1 px-5 me-2 mb-2 text-sm rounded-full">FTIR</button>
                            <button className="py-1 px-5 me-2 mb-2 text-sm rounded-full">Compound Synthesis</button>
                        </div>
                    </div>
                </li>

                <li className="timeline-item period">
                    <div className="timeline-info"></div>
                </li>
            </ul>
        </div>
    )
}

export default Timeline