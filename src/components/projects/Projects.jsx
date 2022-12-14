import './Projects.css'
import React from 'react'
import data from './Data.js'
import {CgMediaLive} from 'react-icons/cg'
import {BsGithub} from 'react-icons/bs'

const Proyects = () => {
  return (
    <section id='portfolio'>
        <h4>My Recent Work</h4>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {
            data.map(({id, image, title, github, demo}) => {
              return (
                <article key={id} className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                        <a href={github} className='btn' target='_blank'><BsGithub className='portfolio__item-icon' /> GitHub</a>
                        <a href={demo} className='btn btn-primary' target='_blank'><CgMediaLive className='portfolio__item-icon' /> Live Demo</a>
                    </div>
                </article>
              )
            })
          }

        </div>
    </section>
  )
}

export default Proyects