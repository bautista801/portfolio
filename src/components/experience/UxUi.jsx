import React from 'react'
import { FiFigma } from 'react-icons/fi'
import { DiPhotoshop } from 'react-icons/di'
import {FaFontAwesomeFlag} from 'react-icons/fa'
import {SiGooglefonts} from 'react-icons/si'

const UxUi = () => {
    return (
        <div>
            <h2>UX / UI Designer</h2>
            <div className="experience__content__ui">
                <article className='experience__details'>
                    <FiFigma className='experience__details-icon' />
                    <div>
                        <h4>Figma</h4>
                        <small className='text-light'>Intermediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <DiPhotoshop className='experience__details-icon' />
                    <div>
                        <h4>Photoshop</h4>
                        <small className='text-light'>Basic</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <FaFontAwesomeFlag className='experience__details-icon' />
                    <div>
                        <h4>Flaticon / Font Awesome</h4>
                        <small className='text-light'>Advanced</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <SiGooglefonts className='experience__details-icon' />
                    <div>
                        <h4>Google Fonts</h4>
                        <small className='text-light'>Advanced</small>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default UxUi