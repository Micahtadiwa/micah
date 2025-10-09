import React from 'react'
import './Footer.css'

import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">

                <h1>MICAH</h1>
                <p>Thank you for viewing my website.Please get intouch with me if you want to share some ideas with me</p>
                
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>

        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2025 TADIWANASHE MICAH. ALL RIGHTS RESERVED</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer