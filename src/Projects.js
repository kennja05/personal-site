import React from 'react'
import { Link } from 'react-router-dom'
import ReactToolTip from 'react-tooltip'
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Projects = () => {
    return(
        <div>
            <h1 className='project-title'>Projects <small data-tip='Click a project to see details about that project'>
                <FontAwesomeIcon size='1x' icon={faInfoCircle} /></small>
            </h1>
            <ReactToolTip place='right' type='info' effect='solid'/>
            <div className='row'>
                <div class="col-sm-4">Trip Tracker</div>
                <div class="col-sm-4">Converter</div>
                <div class="col-sm-4">States Game</div>
            </div>
            <div className='row'>
                <div class="col-sm-4">Image Scrambler Gae</div>
                <div class="col-sm-4">Penn Central Wind Band</div>
                <div class="col-sm-4"></div>
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