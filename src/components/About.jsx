import React from 'react'
import avatar from '../images/result.png'

import '../style/about.css'
function About() {
    return (
        <div  id='aboutMe' className='about'>
            <div className="container">
                <h1 data-aos="fade-up">About me</h1>
                <div className="about_wrapper">
                    <img width={900} height={500} data-aos="fade-right" src={avatar} alt="" />
                    <div data-aos="fade-left" className="about_content">
                        <h2>Kadiraliyev Shahjakhan</h2>
                        <h3>Fronted Developer</h3>
                        <p>I am a Frontend Developer who has worked on various interesting projects. My personal websites are mostly built with React JS, HTML, CSS (SCSS), JavaScript.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
