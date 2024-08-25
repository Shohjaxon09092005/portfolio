import React from 'react'
import '../style/contact.css'
import facebook from '../images/facebook 1.svg'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.svg'
import linkidin from '../images/linkidin.svg'
function Contact() {
    return (
        <div id='contact' className='contact'>
            <div className="container">

                <div className="contact_wrapper">
                    <div className="contact_about">
                        <h4 data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">Ready to make something kickass?
                            Let's get on a call.</h4>
                        <div className="contact_img">
                            <a data-aos="fade-up" href="https://www.facebook.com/stories/122098262294025025/UzpfSVNDOjEyNDEzODYxMzAyMDY5Njc=/?view_single=1"><img src={facebook} alt="" /></a>
                            <a data-aos="fade-down" href="https://www.instagram.com/p/C_AKiOeCc3UmJ0n2xFj8Uu2htUR_B7MiJBoPHk0/?igsh=MWRla3RrZ3lrYzByZA=="><img src={instagram} alt="" /></a>
                            <a data-aos="fade-right" href="https://x.com/shohjaxonRuh/status/1826872659927294215"><img src={twitter} alt="" /></a>
                            <a data-aos="fade-left" href="https://www.linkedin.com/posts/shohjaxon-qodiraliyev-ba5715324_activity-7232644489134157824-VlFR?utm_source=share&utm_medium=member_desktop"><img src={linkidin} alt="" /></a>

                        </div>
                    </div>
                    <ul>
                        <h4 data-aos="fade-down-left">Pages</h4>
                        <li data-aos="fade-up-right"><a href="#hero">Home</a></li>
                        <li data-aos="fade-up-left"><a href="#aboutMe">About me</a></li>
                        <li data-aos="fade-down-right"><a href="#project">Projects</a></li>
                    </ul>
                    <ul>
                        <h4 data-aos="flip-left">Contact</h4>
                        <li data-aos="flip-right">+998 95 001 33 84</li>
                        <li data-aos="flip-up">qodiraliyevshohjaxon@gmail.com</li>
                        <li data-aos="flip-down">Uzbekistan, Syrdarya</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Contact
