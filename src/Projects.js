import React from 'react'
import { Link } from 'react-router-dom'

import ReactToolTip from 'react-tooltip'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//thumbnail images
import ConverterThumbnail from './images/ConverterThumbnail.png'
import TripTrackerThumbnail from './images/TripTrackerThumbnail.png'
import ImageScramblerThumbnail from './images/ImageScramblerThumbnail.png'
import PCWBthumbnail from './images/PCWBthumbnail.png'
import StatesGameThumbnail from './images/StatesGameThumbnail.png'
import LinearGradientThumbnai from './images/linearGradientThumbnail.png'


const Projects = () => {
    return (
        <div className='container-fluid' id='project-cards-container'>
            <h1 className='project-title'>Projects <small data-tip='Click a project to see the details'>
                <FontAwesomeIcon size='1x' icon={faInfoCircle} /></small>
            </h1>
            <ReactToolTip place='right' type='info' effect='solid' />
            <div className='container'>
                <div className='row'>
                    <div id='tt-thumb' className="col-sm-4">
                        <Link to='/projects/triptracker'>
                            <div>
                                <p className='project-title'>Trip Tracker</p>
                                <img className='img-thumbnail' height='80%' width='80%' alt='project thumbnail'
                                    src={TripTrackerThumbnail} />
                            </div>
                        </Link>
                    </div>
                    <div id='converter-thumb' className="col-sm-4">
                        <Link to='/projects/converter'>
                            <div>
                                <p className='project-title'>Converter</p>
                                <img className='img-thumbnail' height='80%' width='80%' alt='project thumbnail'
                                    src={ConverterThumbnail} />
                            </div>
                        </Link>
                    </div>
                    <div id='states-thumb' className="col-sm-4">
                        <Link to='/projects/statesgame'>
                            <div>
                                <p className='project-title'>States Game</p>
                                <img className='img-thumbnail' height='80%' width='80%' alt='project thumbnail'
                                    src={StatesGameThumbnail} />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-sm-4">
                        <Link to='/projects/imagescrambler'>
                            <div>
                                <p className='project-title'>Image Scrambler Game</p>
                                <img className='img-thumbnail' height='80%' width='80%' alt='project thumbnail'
                                    src={ImageScramblerThumbnail} />
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-4">
                        <Link to='/projects/pcwb'>
                            <div>
                                <p className='project-title'>Penn Central Wind Band</p>
                                <img className='img-thumbnail' height='80%' width='80%' alt='project thumbnail'
                                    src={PCWBthumbnail} />
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-4">
                        <p className='project-title'>Linear Gradient Generator</p>
                        <img className='img-thumbnail' height='80%' width='80%' alt='project thumbnail'
                            src={LinearGradientThumbnai} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects