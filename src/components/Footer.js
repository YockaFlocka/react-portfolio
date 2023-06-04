import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsStackOverflow } from 'react-icons/bs';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div>
        <AiOutlineGithub />
        <AiFillLinkedin />
        <BsStackOverflow />
      </div>
      <p> &copy; 2023 peter-portfolio.com </p>
    </div>
  )
}

export default Footer;