import './Experience.css'
import data from './data'

const Experience = () => {
  return (
    <section id='experience'>
      <h4 className='h4'>What Skills I Have</h4>
      <h2>My Experience</h2>

        <div className="container portfolio__container__experience">
          {
            data.map(({ id, image, title, level }) => {
              return (
                <article key={id} className='portfolio__item__experience'>
                  <div className="portfolio__item-image__experience">
                    <img src={image} alt={title} />
                  </div>
                  <h3 className='portfolio__title____experience'>{title}</h3>
                  <h4 className='portfolio__subtitle____experience'>{level}</h4>
                </article>
              )
            })
          }

        </div>
    </section>
  )
}

export default Experience