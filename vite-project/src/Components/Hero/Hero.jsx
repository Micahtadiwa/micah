import React from 'react'
import './Hero.css'
import profile_image from '../../assets/profile_img.jpg'
import AnchorLInk from 'react-anchor-link-smooth-scroll'
import Resume from "../../assets/Resume.pdf";

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className="profile_image" src={profile_image} alt="" />
      <h1><span>I am Tadiwanashe Micah,</span> software engineer based in Zimbabwe</h1>
      <p>I am still doing my Honors in Software Engineering at the University of Zimbabwe. I look forward to learning through interaction with other engineers out there.</p>
      <div className="hero_action">
        <div className="hero_connect">
          <AnchorLInk className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLInk>
        </div>
        <a
          className="hero_resume"
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume
        </a>
      </div>
    </div>
  )
}

export default Hero