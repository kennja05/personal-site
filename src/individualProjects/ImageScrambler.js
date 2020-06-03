import React from 'react'

const ImageScrambler = () => {
    return(
        <div className='project-page'>
            <div className='summary-tech'>
                <div className='project-content'>
                    <h1 style={{textAlign: 'center'}}><u>Image Scrambler</u></h1>
                    <p>
                        This is a puzzle game in which there is a 3x3 grid, with each segment holding
                        a part of a whole image. There is also a blank segment. The 9 segments are 
                        scrambled in random order at the beginning of the game, and it is then the job
                        of the user to reassemble the image by moving the blank segment around the 
                        board.
                    </p>
                </div>
                <div className='project-content'>
                    <h1>
                        <u>
                            Technologies Used
                        </u>
                    </h1>
                    <h3>Front End:</h3>
                    <ul>
                        <li>JavaScript
                            <ul>
                                <li>
                                    Defined logic with JavaScript event listeners for the maneuvering 
                                    of puzzle tiles
                                </li>
                                <li>
                                    Established processes for tracking of game data such as move count 
                                    and time elapsed
                                </li> 
                            </ul>
                        </li>
                        <li>HTML/CSS</li>
                    </ul>
                    <h3>Back End:</h3>
                    <ul>
                        <li>Ruby On Rails
                            <ul>
                                <li>Utilized custom routes to display game data for leaderboard</li>
                                <li>Implemented Postgres for data storage</li>
                            </ul>
                        </li>
                    </ul>
                    <p>
                        <a href='https://github.com/kennja05/Image-Scrambler-Game' target='_blank' rel='noopener noreferrer'>Github</a>
                    </p>
                </div>

            </div>
            <div className='gifs'>
                <iframe title='startup' src="https://giphy.com/embed/UrPH02ZBQqXk0ZW9Qk?video=0" 
                width="400" height="225" 
                frameBorder="0" class="giphy-embed" allowFullScreen={false}></iframe>

                <iframe title='gameplay' src="https://giphy.com/embed/ckThXih9Pi1Oyzyh6M?video=0" 
                width="400" height="225" 
                frameBorder="0" class="giphy-embed" allowFullScreen={false}></iframe>

                <iframe title='end' src="https://giphy.com/embed/WqG4OWOPnen5GVE036?video=0" 
                width="400" height="225" 
                frameBorder="0" class="giphy-embed" allowFullScreen={false}></iframe>
            </div>

        </div>
    )
}

export default ImageScrambler