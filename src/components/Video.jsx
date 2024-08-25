import React from 'react'
import '../style/video.css'
import rasm from '../images/ezgif-6-b016e43199.gif'
function Video() {
    return (
        <div className='video' style={{backgroundImage:`url(${rasm})`}}>

            <div className="container">
                <h3  data-aos="flip-down" className='video__text'> I will be glad to cooperate with you</h3>
            </div>



        </div>
    )
}

export default Video
