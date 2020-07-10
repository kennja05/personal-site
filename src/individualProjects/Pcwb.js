import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import PCWBSeal from '../images/PCWBSeal.png'

const PCWB = () => {
    return(
        <div className='project-page container-fluid' id='pcwb'>
            <h1 style={{textAlign: 'center'}}>Penn Central Wind Band</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <p>
                            Home page for the Penn Central Wind Band (PCWB). Based out of 
                            Lewisburg, Pennsylvania, the PCWB was founded in 1994 by Dr. William 
                            Kenny who has conducted the band since the beginning. The band primarily
                            consists of professional musicians and music educators. The PCWB is also
                            one of the few ensembles to have been awarded the Silver Sudler Scroll, 
                            awarded by the John Philip Sousa Foundation "recognizing community and 
                            adult concert bands of outstanding musical excellence."
                        </p>
                        <div>
                            <a className='icon' href='https://www.penncentralwindband.org/' target='_blank' 
                            rel='noopener noreferrer'>PCWB.org</a>
                        </div>
                        <div>
                            <a className='icon' href='https://github.com/kennja05/pcwb' 
                            target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon size='2x' icon={faGithub} /></a>
                        </div>
                        <div className='container tech-list'>
                            <h2 style={{color: 'white'}}>Technologies</h2>
                            <ul className='list-group'>
                                <li className='list-group-item'>React</li>
                                <li className='list-group-item'>JavaScript</li>
                                <li className='list-group-item'>HTML</li>
                                <li className='list-group-item'>CSS</li>
                                <li className='list-group-item'>Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <img className='img-fluid' src={PCWBSeal} alt='PCWB Official Seal'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PCWB