import React from 'react'
import './Navbarcom.css';
import logo from '../assets/image/logo.png'
import {Link} from 'react-scroll'
import icon from '../assets/image/icon.png'

const Navbarcom = () => {
  return (
     <nav> 
      <img src={logo} alt='error' className='logo'/>
      <ul>
        <li><Link to='home' smooth={true} offset={-260} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-260} duration={500}>About us</Link></li>
        <li><Link to='events' smooth={true} offset={-260} duration={500}>Events</Link></li>
        
        </ul>
        <img src={icon} alt="-" className='icon'/>
     </nav>
  )
}

export default Navbarcom