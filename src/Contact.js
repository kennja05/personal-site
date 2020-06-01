import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'


const Contact = () => {
    return(
        <div className='contact-page'>
            <p>
                Email: <a href='mailto:jacobkenny05@gmail.com' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon size='5x' icon={faEnvelope} />

            </a>
            </p>
            <p>
                Phone: (570) 716-1763
            </p>
            <p>
                Blog: <a href='https://medium.com/@jacobkenny05' target='_blank' rel='noopener noreferrer'>Medium</a>
                <FontAwesomeIcon size='5x' icon={faMedium} />
            </p>
            <p>
                LinkedIn: <a href='https://www.linkedin.com/in/jacob-kenny/' target='_blank'rel='noopener noreferrer'>jacob-kenny</a>
                <FontAwesomeIcon size='5x' icon={faLinkedin} />
            </p>
            <p>
                Github: <a href='https://github.com/kennja05' target='_blank' rel='noopener noreferrer'>kennja05</a>
                <FontAwesomeIcon size='5x'icon={faGithubSquare} />
            </p>
        </div>
    )
}

export default Contact