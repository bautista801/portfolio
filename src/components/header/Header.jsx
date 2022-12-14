import './Header.css'

import React from 'react'
import CTA from './CTA'
import ME from '../../assets/Me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div>
          <h3>Hello I'm</h3>
          <h1>Bautista Castets</h1>
          <h4 className='text-light'>Frontend Developer</h4>
          <h4 className='text-light'>UX / UI Designer</h4>
          <CTA />
          <HeaderSocials />
        </div>

        <div className="me">
          <img src={ME} alt="person" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header