import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
    return(
        <div className='projects'>

            <div className='proj'>

                <div>
                    <div><Link className='project-title' to='/projects/statesgame'>States Game</Link></div>
                    <iframe 
                        className='media-object'
                        width="560" height="315" src="https://www.youtube.com/embed/SgrQfCzyd_o" 
                        title='states-game-demo' frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen='true'>
                    </iframe>    
                </div>
           
                <div>
                    <div><Link className='project-title' to='/projects/imagescrambler'>Image Scrambler</Link></div>
                    <iframe 
                        className='media-object'
                        width="560" height="315" src="https://www.youtube.com/embed/BNmb7fpG_LQ" 
                        title='image-scrambler-game-demo' frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen='true'>
                    </iframe>
                </div>

            </div>

            <div className='proj'>

                <div>
                    <div><Link className='project-title' to='/projects/triptracker'>Trip Tracker</Link></div>
                    <iframe 
                        className='media-object'
                        width="560" height="315" src="https://www.youtube.com/embed/a4EL71uBcW8" 
                        title='trip-tracker-demo' frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen='true'>
                    </iframe>
                </div>

                <div>
                    <div><Link className='project-title' to='/projects/converter'>Converter</Link></div>
                    <iframe 
                        className='media-object'
                        width="560" height="315" src="https://www.youtube.com/embed/zBp52ufZFWQ" 
                        title='converter-demo' frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen='true'>
                    </iframe>
                </div>

            </div>

        </div>
    )
}

export default Projects