import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'


const ImageScrambler = () => {
    return(
        <div className='project-page'>
            <div className='summary-tech'>
                <div className='project-content'>
                    <h1 style={{textAlign: 'center'}}><u>Image Scrambler</u></h1>
                    <p>
                        The game begins by creating a 3x3 grid, with eight of grid segments holding
                        a part of a whole image, and the ninth segment is blank. The nine segments are 
                        scrambled in random order at the beginning of the game, and it is then the job
                        of the user to reassemble the image by moving the blank segment around the 
                        board by using the arrow keys.
                    </p>
                    <h2>
                        <a className='fixer-link' href='https://image-scrambler-game.herokuapp.com/'>Live Site</a>
                    </h2>
                </div>
                <div className='project-content'>
                    <h1 style={{textAlign:'center'}}><u>Technologies Used</u></h1>
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
                        <a className='icon' href='https://github.com/kennja05/Image-Scrambler-Game' 
                        target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon size='2x' icon={faGithubSquare} /></a>
                    </p>
                </div>

            </div>
            <div className='gifs'>
                <iframe title='startup' src="https://giphy.com/embed/UrPH02ZBQqXk0ZW9Qk?video=0" 
                width="416" height="234" 
                frameBorder="0" class="giphy-embed" allowFullScreen={false}></iframe>

                <iframe title='gameplay' src="https://giphy.com/embed/ckThXih9Pi1Oyzyh6M?video=0" 
                width="416" height="234" 
                frameBorder="0" class="giphy-embed" allowFullScreen={false}></iframe>

                <iframe title='end' src="https://giphy.com/embed/WqG4OWOPnen5GVE036?video=0" 
                width="416" height="234" 
                frameBorder="0" class="giphy-embed" allowFullScreen={false}></iframe>
            </div>

        </div>
    )
}

export default ImageScrambler