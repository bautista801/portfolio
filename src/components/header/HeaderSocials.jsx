import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/bautista-castets/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/bautista801?tab=repositories" target='_blank'><BsGithub /></a>
        <a href="https://www.instagram.com/bauti_castets/" target='_blank'><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials