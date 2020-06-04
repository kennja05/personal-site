import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const StatesGame = () => {
    return(
        <div className='project-page'>
            <div className='summary-tech'>

                <div className='project-content'>
                    <h1 style={{textAlign: 'center'}}><u>States Game</u></h1>
                    <p>
                        The goal of this project is to reinforce knowledge about the locations
                        of the 50 United States. In addition to location, the application contains 
                        information about each state such as state capital, nickname, 
                        and a hand-selected image representing the state to increase depth of learning.
                    </p>
                    <p>
                        During the game the player is represented by an alien in a flying saucer, 
                        who will visit each of the 50 states in random order on a map marked only 
                        by state borders. At each stop the user will be tasked with answering the question:
                        "Where am I right now?"
                    </p>
                    <p>
                        <a style={{color: 'white'}} href='https://us-game-alien.herokuapp.com/play'>Live Site</a>
                    </p>
                </div>
                <div className='project-content'>
                    <h1 style={{textAlign: 'center'}}><u>Technologies Used</u></h1>
                    <h3>Front End:</h3>
                    <ul>
                        <li>React
                            <ul>
                                <li>
                                    Established game logic by managing state, props, and lifecycle 
                                    methods
                                </li>
                            </ul>
                        </li>
                        <li>HTML/CSS
                            <ul>
                                <li>
                                    Utilized CSS animations to simulate the flying of the
                                    protagonist
                                </li>
                                <li>
                                    Authored forms to capture user input and track game data
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <h3>Back End:</h3>
                    <ul>
                        <li>Ruby on Rails
                            <ul>
                                <li>
                                    Compiled data for each state in JSON format to be displayed during
                                    the game
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p>
                        <a className='icon' href='https://github.com/kennja05/us-states-game' 
                        target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon size='2x' icon={faGithubSquare} /></a>
                    </p>
                </div>
            </div>
            <div className='gifs'>
                <iframe title='login' src="https://giphy.com/embed/UqMpOFvBiz2WMx1sBG?video=0" 
                width="375" height="216" 
                frameBorder="0" class="giphy-embed" allowFullScreen={false}></iframe>

                <iframe title='gameplay' src="https://giphy.com/embed/VHewtH3YEdQMvHd7Sk?video=0" 
                width="375" height="216" 
                frameBorder="0" class="giphy-embed" allowFullScreen={false}></iframe>

                <iframe title='endgame' src="https://giphy.com/embed/QuzD7OhY2Kt5xgUxRR?video=0" 
                width="375" height="216" 
                frameBorder="0" class="giphy-embed" allowFullScreen={false}></iframe>
            </div>
        </div>
    )
}

export default StatesGame