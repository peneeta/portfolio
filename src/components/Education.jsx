import './EducationStyle.css';

function Education() {
    return(
        <div className="education-section flex flex-col gap-y-16 py-16">
            <div className="edu-block flex flex-wrap flex-row items-center justify-center gap-x-8">
                <div className="blob-img">
                    {/* PUT IMAGE HERE */}
                    <p>IMAGE HERE</p>
                </div>

                <div className="text-wrapper">
                    <h2>M.S. Automated Science</h2>
                    <h4>Carnegie Mellon University</h4>
                    <p>Incoming August 2024</p>
                </div>
            </div>

            <div className="edu-block flex flex-wrap flex-row items-center justify-center gap-x-8">
                <div className="blob-img">
                    {/* PUT IMAGE HERE */}
                    <p>IMAGE HERE</p>
                </div>

                <div className="text-wrapper">
                    <h2>B.S. Biomedical Engineering</h2>
                    <h4>University of Virginia</h4>
                    <p>August 2020 to May 2024</p>
                </div>
            </div>
        </div>
    ) 
}

export default Education