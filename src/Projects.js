import React from 'react'
import { Link } from 'react-router-dom'
import ReactToolTip from 'react-tooltip'

const Projects = () => {
    return(
        <div className='projects'>

            <div className='proj'>
                <div>
                    <div data-tip data-for='states-game'><Link className='project-title' to='/projects/statesgame'>States Game</Link></div>
                    <ReactToolTip id='states-game' type='dark'>
                        <span>Click project title for more info!</span>
                    </ReactToolTip>
                    <iframe 
                        className='media-object'
                        width="560" height="315" src="https://www.youtube.com/embed/SgrQfCzyd_o" 
                        title='states-game-demo' frameBorder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen={true}>
                    </iframe>    
                </div>
           
                <div>
                    <div data-tip data-for='image-scrambler'><Link className='project-title' to='/projects/imagescrambler'>Image Scrambler</Link></div>
                    <ReactToolTip id='image-scrambler' type='dark'>
                        <span>Click project title for more info!</span>
                    </ReactToolTip>
                    <iframe 
                        className='media-object'
                        width="560" height="315" src="https://www.youtube.com/embed/BNmb7fpG_LQ" 
                        title='image-scrambler-game-demo' frameBorder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen={true}>
                    </iframe>
                </div>

            </div>

            <div className='proj'>

                <div>
                    <div data-tip data-for='trip-tracker'><Link className='project-title' to='/projects/triptracker'>Trip Tracker</Link></div>
                    <ReactToolTip id='trip-tracker' type='dark'>
                        <span>Click project title for more info!</span>
                    </ReactToolTip>
                    <iframe 
                        className='media-object'
                        width="560" height="315" src="https://www.youtube.com/embed/a4EL71uBcW8" 
                        title='trip-tracker-demo' frameBorder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen={true}>
                    </iframe>
                </div>

                <div>
                    <div data-tip data-for='converter'><Link className='project-title' to='/projects/converter'>Converter</Link></div>
                    <ReactToolTip id='converter' type='dark'>
                        <span>Click project title for more info!</span>
                    </ReactToolTip>
                    <iframe 
                        className='media-object'
                        width="560" height="315" src="https://www.youtube.com/embed/zBp52ufZFWQ" 
                        title='converter-demo' frameBorder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen={true}>
                    </iframe>
                </div>

            </div>

        </div>
    )
}

export default Projects