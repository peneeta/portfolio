import './EducationStyle.css';

import UVA from '../assets/images/uva.svg';
import CMU from '../assets/images/cmu.svg';

function Education() {
    return(
        <div className="education-section my-10 flex flex-wrap flex-row items-center justify-center gap-x-16 px-16">
            <div className="edu-block flex flex-col items-center justify-center gap-x-8 py-10">
                <div className="school-img mb-6">
                    <img style={{height: "8rem", opacity: "0.7"}} src={CMU} alt="CMU logo" />
                </div>

                <div className="text-wrapper text-center">
                    <h2>M.S. Automated Science</h2>
                    <h4>Carnegie Mellon University</h4>
                    <p>Incoming August 2024</p>
                </div>
            </div>

            <div className="edu-block flex flex-col items-center justify-center gap-x-8">
                <div className="school-img mb-6">
                    <img style={{height: "8rem"}} src={UVA} alt="UVA logo" />
                </div>

                <div className="text-wrapper text-center">
                    <h2>B.S. Biomedical Engineering</h2>
                    <h4>University of Virginia</h4>
                    <p>August 2020 to May 2024</p>
                </div>
            </div>
        </div>
    ) 
}

export default Education