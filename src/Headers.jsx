import React, { useRef } from 'react'
import './style/headers.css'
import menu from './images/feather_menu.svg'
function Headers() {
    let modal_header =useRef()
    function openModal(){
        modal_header.current.classList.add("open_modal")

    }
    function delModal(){
        modal_header.current.classList.remove("open_modal")

    }
    return (
        <div id='headers' className='headers'>
            <div ref={modal_header} className="modal">
                <div className="modal_wrapper">
                    <ul className='header_list2'>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#aboutMe">About me</a></li>
                        <li><a href="#project">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                    <span onClick={delModal}>X</span>  
            </div>
            <div className="container">
                <div className="headers_wrapper">
                    <a className='name' href="#hero">
                        {"{ K"}

                        {"SH }"}
                    </a>
                    <ul className='header_list'>
                    <li><a href="#hero">Home</a></li>
                        <li><a href="#aboutMe">About me</a></li>
                        <li><a href="#project">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <img onClick={openModal} className='menu' width={50} height={50} src={menu} alt="" />

                </div>
            </div>

        </div>
    )
}

export default Headers
