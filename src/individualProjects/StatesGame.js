import React from 'react'

const StatesGame = () => {
    return(
        <div className='project-page'>
            <div className='project-content'>
                <h1><u>States Game</u></h1>
                <p>
                    The United State of America is made up of 50 individual states. These states 
                    vary greatly in size, population, climate, location, political leanings, 
                    and many other factors. Some enthusiastic people seemingly know everything 
                    there is to know about these 50 states, and some know very little. There's 
                    nothing wrong with either, but is it such a bad thing to learn more about the 
                    country in which you are living?
                </p>
                <p>
                    The goal of this project is to reinforce the user's knowledge about the locations
                    of the 50 United States. Additionaly, we've included information about these 
                    states such as state capital, nickname, and a hand-selected image representing 
                    the state to increase depth of learning.
                </p>
            </div>
            <div className='project-content'>
                <h1><u>Technologies Used</u></h1>
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
                                Utilized CSS animations to simulate the flying of the game's
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
            </div>


        </div>
    )
}

export default StatesGame