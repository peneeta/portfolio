import Timeline from '../components/Timeline';
import ResourcesList from '../components/ResourcesList';
import Education from '../components/Education';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Images and such
import portrait from '../assets/images/portrait.png';

function Home() {
    AOS.init({
            once: true,
            duration: 1200,
            easing: 'ease-in-cubic'
    });

    return(
        <div className="home">
            <div className="hero flex items-center justify-center flex-row">
                <div className="container px-8 flex flex-wrap-reverse flex-row justify-center items-center gap-x-8">
                    <div className="portrait-wrapper" data-aos="zoom-in">
                        <img className="portrait" src={portrait} alt=""/>
                    </div>

                    <div className="text-wrapper" data-aos="zoom-in">
                        <div className="headline">
                            <h2 className="mb-1.5">Hello, my name is</h2>
                            <h1 className="pb-1.5">Peneeta</h1> 
                            <div className="subtitle text-base">
                                <p>Masters student and aspiring genomics researcher, interested broadly in computational biology.</p>
                            </div>
                        </div>

                    <div className="icons-wrapper gap-8 mt-5">
                        <a href="https://www.linkedin.com/in/peneeta/" target="_blank">
                        <div className="icon linkedin">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </div>
                        </a>
                        <a href="https://github.com/peneeta" target="_blank">
                        <div className="icon github">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </div>
                        </a>

                        <a href="mailto:pawojcik@andrew.cmu.edu">
                        <div className="icon mail">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                        </div>
                        </a>
                    </div>
                </div>  
            </div>
            <div className="wave-divider">
                <svg viewBox="0 0 1280 262" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M223.5 161C116.854 243.269 55.5 -28 -52 227V262H1297V0C1226.5 111 1090.93 186.66 988 111C837 0 670 196.5 594.5 212.5C474.303 237.972 363.5 53.0004 223.5 161Z" fill="#FFFFFF"/>
                </svg>
            </div>
        </div>

        <div className="px-8 education section">
            <div className="section-text mb-12" data-aos="fade-up">
                <h3>Education</h3>
            </div>
            <Education/>
        </div>

        <div id="experience" className="px-8 flex flex-col items-center justify-center section">
            <div className="section-text" data-aos="fade-up">
                <h3 className="pb-11">Research</h3>
                <p style={{maxWidth: "25rem"}}>A brief overview of the research areas I’ve been involved in. Read more about them in my CV or check out some of my projects!</p>
            </div>
        <Timeline/>
        </div>

        <div className="px-10 section mb-20 flex items-center justify-center" style={{height: "35vh"}}>
            <div className="section-text end my-3" data-aos="fade-up">
                <h3 className="mb-6">Say hi! 👋</h3>
                <p>Feel free to email or send me a message on LinkedIn.</p>

                <div className="links my-3">
                    <li><a href="mailto:pawojcik@andrew.cmu.edu" target="_blank">📩  pawojcik@andrew.cmu.edu</a></li>
                    <li><a href="https://www.linkedin.com/in/peneeta/">👤  www.linkedin.com/in/peneeta</a></li>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home