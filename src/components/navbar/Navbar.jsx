import './Navbar.css'
import React from 'react'
import {AiOutlineHome, AiOutlineUserAdd, AiOutlineMessage} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import { useState } from 'react'
import {VscNewFolder} from 'react-icons/vsc'

const Navbar = () => {

  const [active, setActive] = useState('#')

  return (
    <nav>
      <a 
        href="#"
        onClick={() => setActive('#')}
        className={active === '#' ? 'active' : ''}
        >
          <AiOutlineHome />
      </a>

      <a 
        href="#about" 
        onClick={() => setActive('#about')}
        className={active === '#about' ? 'active' : ''}
        >
          <AiOutlineUserAdd />
      </a>

      <a 
        href="#experience"
        onClick={() => setActive('#experience')}
        className={active === '#experience' ? 'active' : ''}
        >
          <BiBook />
      </a>

      <a 
        href="#portfolio"
        onClick={() => setActive('#portfolio')}
        className={active === '#portfolio' ? 'active' : ''}
        >
          <VscNewFolder />
      </a>

      <a 
        href="#contact"
        onClick={() => setActive('#contact')}
        className={active === '#contact' ? 'active' : ''}
        >
          <AiOutlineMessage />
      </a>
    </nav>
  )
}

export default Navbar