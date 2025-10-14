import React,{useRef, useState} from 'react'
import './NavBar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLInk from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { IoCallSharp } from "react-icons/io5";

const NavBar = () => {
  const[menu, setMenu] = React.useState("home");
  const menuRef=useRef();

  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  
  return (
    <div className='navbar'>
          <h1 className='micah' >MICAH</h1>
          <img src={menu_open} onClick={openMenu} className='nav-mob-open' alt="" />
          <ul ref={menuRef} className="nav-menu">
             <img src={menu_close} onClick={closeMenu } alt="" className="nav-mob-close" />
            <li><AnchorLInk className='anchor-link  '  href='#home'><p onClick={()=>setMenu("home")}>Home </p></AnchorLInk>{menu==="home"? <img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLInk className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLInk>{menu==="about"? <img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLInk className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLInk>{menu==="services"? <img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLInk className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portifolio</p></AnchorLInk>{menu==="work"? <img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLInk className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLInk>{menu==="contact"? <img src={underline} alt=''/>:<></>}</li>
          </ul> 
  
          <div className="nav-connect"><a className='anchor-link' offset={50} href='tel:+263714224055'><IoCallSharp /></a> </div> 

    </div>
      
  )
}

export default NavBar 