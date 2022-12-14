import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>Bautista Castets</a>

        <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='footer__socials'>
            <a href="https://www.linkedin.com/in/bautista-castets/" target='_blank'><BsLinkedin /></a>
            <a href="https://github.com/bautista801?tab=repositories" target='_blank'><BsGithub /></a>
            <a href="https://www.instagram.com/bauti_castets/" target='_blank'><BsInstagram /></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Bautista Castets, All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer