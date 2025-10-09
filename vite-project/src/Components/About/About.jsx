import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img2 from '../../assets/profile_img2.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
             <h1>About Me</h1>
             <img src={theme_pattern} alt=''/>
        </div>
        <div className='about-section'>
            <div className='about-left'>
                <img className='profile-img2' src={profile_img2} alt="" />
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>I am a hard working person who is willing to go an exta mile so that l can aquire knowledge</p>
                    <p>Programming is like baking,the more you practice the more you get familirised with indigridiends to produce a good cake</p>
                </div>
                <div className='about-skills'>
                    <p>HTML & CSS</p><hr style={{width: '60%'}} />
                    <p>React JS</p><hr style={{width: '70%'}} />
                    <p>Java Script</p><hr style={{width: '60%'}} />
                    <p>Java</p><hr style={{width: '80%'}} /> 
                    <p>React</p><hr style={{width: '73%'}} /> 
                    <p>MySQL</p><hr style={{width: '67%'}} />      


                </div>
            </div>
            
        </div>
        <div className='about-achievements'>
            <div className='about-achievement'>
                <h1>No expirience yet</h1>
                <p>Still working on my skills</p>
            </div><hr />
            <div className='about-achievement'>
                <h1>10+</h1>
                <p>Projects Completed</p>
            </div><hr />
            <div className='about-achievement'>
                <h1>Worked as Receptionist</h1>
                <p>At Jock Smith Spray Paints</p>
            </div>
                
        </div>
        
    </div>

  )
}

export default About