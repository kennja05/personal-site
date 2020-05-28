import React from 'react'

const Projects = () => {
    return(
        <div className='projects'>

            <div className='proj'>

                <div>
                    <iframe 
                        className='media-object'
                        width="560" height="315" src="https://www.youtube.com/embed/SgrQfCzyd_o" 
                        title='states-game-demo' frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen='true'>
                    </iframe>    
                </div>
           
                <div>
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
                    <iframe 
                        className='media-object'
                        width="560" height="315" src="https://www.youtube.com/embed/a4EL71uBcW8" 
                        title='trip-tracker-demo' frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen='true'>
                    </iframe>
                </div>

                <div>
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