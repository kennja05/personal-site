import React from 'react'
import { Link } from 'react-router-dom'
import ReactToolTip from 'react-tooltip'
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import ConverterThumbnail from './images/ConverterThumbnail.png'
import TripTrackerThumbnail from './images/TripTrackerThumbnail.png'
import ImageScramblerThumbnail from './images/ImageScramblerThumbnail.png'
import PCWBthumbnail from './images/PCWBthumbnail.png'
import StatesGameThumbnail from './images/StatesGameThumbnail.png'


const Projects = () => {
    return(
        <div className='container-fluid'>
            <h1 className='project-title'>Projects <small data-tip='Click a project to see details about that project'>
                <FontAwesomeIcon size='1x' icon={faInfoCircle} /></small>
            </h1>
            <ReactToolTip place='right' type='info' effect='solid'/>
            <div className='container'>
                <div className='row'>
                    <div id='tt-thumb' className="col-sm-4">
                        <Link to='/projects/triptracker'>
                            <p className='project-title'>Trip Tracker</p>
                            <img className='img-thumbnail' height='80%' width='80%' alt='project thumbnail' 
                                src={TripTrackerThumbnail} />
                        </Link>
                    </div>
                    <div id='converter-thumb' className="col-sm-4">
                        <Link to='/projects/converter'>
                            <p className='project-title'>Converter</p>
                            <img className='img-thumbnail' height='80%' width='80%' alt='project thumbnail' 
                                src={ConverterThumbnail} />
                        </Link>
                    </div>
                    <div id='states-thumb' className="col-sm-4">
                        <Link to='/projects/statesgame'>
                            <p className='project-title'>States Game</p>
                            <img className='img-thumbnail' height='80%' width='80%' alt='project thumbnail' 
                                src={StatesGameThumbnail} />
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-sm-4">
                        <Link to='/projects/imagescrambler'>
                            <p className='project-title'>Image Scrambler Game</p>
                            <img className='img-thumbnail' height='80%' width='80%' alt='project thumbnail' 
                                src={ImageScramblerThumbnail} />
                        </Link>
                    </div>
                    <div className="col-sm-4">
                        <p className='project-title'>Penn Central Wind Band</p>
                        <img className='img-thumbnail' height='80%' width='80%' alt='project thumbnail' 
                            src={PCWBthumbnail} />
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
        </div>
        )
    }
    
    export default Projects
    // <div className='projects'>

    //     <div className='proj'>
    //         <div>
    //             <div data-tip data-for='states-game'><Link className='project-title' to='/projects/statesgame'>States Game</Link></div>
    //             <ReactToolTip id='states-game' type='dark'>
    //                 <span>Click project title for more info!</span>
    //             </ReactToolTip>
    //             <iframe 
    //                 className='media-object'
    //                 width="560" height="315" src="https://www.youtube.com/embed/SgrQfCzyd_o" 
    //                 title='states-game-demo' frameBorder="0" 
    //                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    //                 allowFullScreen={true}>
    //             </iframe>    
    //         </div>
       
    //         <div>
    //             <div data-tip data-for='image-scrambler'><Link className='project-title' to='/projects/imagescrambler'>Image Scrambler</Link></div>
    //             <ReactToolTip id='image-scrambler' type='dark'>
    //                 <span>Click project title for more info!</span>
    //             </ReactToolTip>
    //             <iframe 
    //                 className='media-object'
    //                 width="560" height="315" src="https://www.youtube.com/embed/BNmb7fpG_LQ" 
    //                 title='image-scrambler-game-demo' frameBorder="0" 
    //                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    //                 allowFullScreen={true}>
    //             </iframe>
    //         </div>

    //     </div>

    //     <div className='proj'>

    //         <div>
    //             <div data-tip data-for='trip-tracker'><Link className='project-title' to='/projects/triptracker'>Trip Tracker</Link></div>
    //             <ReactToolTip id='trip-tracker' type='dark'>
    //                 <span>Click project title for more info!</span>
    //             </ReactToolTip>
    //             <iframe 
    //                 className='media-object'
    //                 width="560" height="315" src="https://www.youtube.com/embed/a4EL71uBcW8" 
    //                 title='trip-tracker-demo' frameBorder="0" 
    //                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    //                 allowFullScreen={true}>
    //             </iframe>
    //         </div>

    //         <div>
    //             <div data-tip data-for='converter'><Link className='project-title' to='/projects/converter'>Converter</Link></div>
    //             <ReactToolTip id='converter' type='dark'>
    //                 <span>Click project title for more info!</span>
    //             </ReactToolTip>
    //             <iframe 
    //                 className='media-object'
    //                 width="560" height="315" src="https://www.youtube.com/embed/zBp52ufZFWQ" 
    //                 title='converter-demo' frameBorder="0" 
    //                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    //                 allowFullScreen={true}>
    //             </iframe>
    //         </div>

    //     </div>

    // </div>