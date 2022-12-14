import './Experience.css'
import FrontEnd from './FrontEnd'
import UxUi from './UxUi'

const Experience = () => {
  return (
    <section id='experience'>
        <h4 className='h4'>What Skills I Have</h4>
        <h2>My Experience</h2>

        <div className="container experience__container">
            
            <FrontEnd />

            <UxUi />

        </div>
    </section>
  )
}

export default Experience