import React from 'react'
import user from '../images/robot.png'
import '../style/hero.css'
function Hero() {
    return (
        // data-aos="fade-up"
        <div  data-aos="zoom-in" id='hero' className='hero'>
            <div className="container">
                <div className="hero_wrapper">
                    <div data-aos="fade-up" className="hero_content">
                        <h4>Hello</h4>
                        <h1>Kadiraliyev Shahjakhan</h1>
                        <p>I am a frontend developer</p>
                        <a href="https://files.fm/u/ndhzu4236s" target="_blank" rel="noopener noreferrer"><button>My Resume</button></a>
                    </div>
                    <img  src={user} alt={user} />
                </div>
            </div>


        </div>
    )
}

export default Hero
