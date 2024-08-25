import React from 'react'
import '../style/projects.css'
import strelka from '../images/strelka.svg'
import jewelery from '../images/jewelery.jpg'
import It from '../images/IT.jpg'
import scoot from '../images/scot.jpg'
import dYdX from '../images/dYdX.jpg'
import ijara from '../images/ijara.png'
import golobe from '../images/golobe.jpg'
function Projects() {
  return (
    <div id='project' className='project'>
        <div className="container">
            <h2 data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">There are some of my projects</h2>
            <div className="projects_wrapper">
                <div data-aos="fade-right" className="project_card">
                    <div className="project_bg" style={{backgroundImage:`url(${jewelery})`}}>
                      <div className="div"></div>
                    </div>
                      <div className="project_content">
                        <h4>JEWELRY</h4>
                        <p>This project has both a backend and a frontend. It is fully integrated with the backend (with logic).</p>
                        <a href="https://jewelery2005.netlify.app/" src="https://jewelery2005.netlify.app/">View Project <img src={strelka} alt="" /></a>
                      </div>
                </div>
                <div data-aos="fade-left" className="project_card">
                    <div className="project_bg" style={{backgroundImage:`url(${It})`}}>
                    <div className="div"></div>
                    </div>
                      <div className="project_content">
                        <h4>IT community</h4>
                        <p>This project has both a backend and a frontend. It is fully integrated with the backend (with logic).</p>
                        <a href="https://itcommunity2005.netlify.app/">View Project <img src={strelka} alt="" /></a>
                      </div>
                </div>
                <div data-aos="flip-left" className="project_card">
                    <div className="project_bg" style={{backgroundImage:`url(${scoot})`}}>
                    <div className="div"></div>
                    </div>
                      <div className="project_content">
                        <h4>Scoot</h4>
                        <p>This project has only frontend part with styles and media</p>
                        <a href="https://scoot2005.netlify.app/">View Project <img src={strelka} alt="" /></a>
                      </div>
                </div>
                <div data-aos="flip-right" className="project_card">
                    <div className="project_bg" style={{backgroundImage:`url(${dYdX})`}}>
                    <div className="div"></div>
                    </div>
                      <div className="project_content">
                        <h4>dYdX</h4>
                        <p>This project has only frontend part with styles and media</p>
                        <a href="https://soft-yeot-d505c9.netlify.app/">View Project <img src={strelka} alt="" /></a>
                      </div>
                </div>
                <div data-aos="zoom-in" className="project_card">
                    <div className="project_bg" style={{backgroundImage:`url(${ijara})`}}>
                    <div className="div"></div>
                    </div>
                      <div className="project_content">
                        <h4>E-ijara</h4>
                        <p>This project has only frontend part with styles and media</p>
                        <a href="https://e-ijara.netlify.app/">View Project <img src={strelka} alt="" /></a>
                      </div>
                </div>
                <div data-aos="zoom-in" className="project_card">
                    <div className="project_bg" style={{backgroundImage:`url(${golobe})`}}>
                    <div className="div"></div>
                    </div>
                      <div className="project_content">
                        <h4>Golobe</h4>
                        <p>This project has only frontend part with styles and media</p>
                        <a href="https://golobe-2005.netlify.app/">View Project <img src={strelka} alt="" /></a>
                      </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Projects
