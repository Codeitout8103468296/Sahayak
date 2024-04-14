import React from 'react'
import './Aboutus.css'
import About from '../../assets/image/About.png'
export const Aboutus = () => {
  return (
    <div className='about' id='about'>
     <div className='about-left'>
     <img src={About} alt="error" className='aboutimg' />
    </div>
      <div className='about-right'>
        <h2>About sahayak</h2>
        <p >Our website serves as a vital bridge between compassionate individuals and deserving orphanages, enabling seamless connections for meaningful support. Through our platform, users can effortlessly discover orphanages, gain insights into their needs and challenges, and extend a helping hand. We pride ourselves on fostering transparency and trust, allowing users to access reviews and testimonials to make
           informed decisions about their contributions. With direct communication channels and streamlined donation processes, we empower users to make a tangible impact on the lives of orphaned children and the communities that nurture them.</p>
      </div>
    </div>
  )
}
export default Aboutus
