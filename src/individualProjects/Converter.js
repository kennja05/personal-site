import React from 'react'

const Converter = () => {
    return(
        <div className='project-page'>
            <div className='project-content'>
                <h1><u>Converter</u></h1>
                <p>
                    This is a simple application that does what Google, MSN, and countless other 
                    websites already are set up to do: utilize the current exchange rates in order 
                    to perform currency conversions for users. Using an exchange rate API to get 
                    information, the application is able to perform conversions between 
                    approximately 180 foreign currencies, as well as display historical 
                    information about the foreign currencies. 
                </p>
            </div>
            <div className='project-content'>
                <h1><u>Technologies Used</u></h1>
                <h3>Front End:</h3>
                <ul>
                    <li>React
                        <ul>
                            <li>
                                Utilized component structure, state, and props 
                            </li>
                        </ul>
                    </li>
                    <li>CanvasJS
                        <ul>
                            <li>
                                Used CanvasJS library to create line graphs to visualize the changes
                                in values over the past five years of foreign currencies
                            </li>
                        </ul>
                    </li>
                    <li>HTML/CSS
                        <ul>
                            <li>
                                Implemented Bootstrap to improve appearance
                            </li>
                        </ul>
                    </li>
                </ul>
                <h3>Back End:</h3>
                <ul>
                    <li>Ruby on Rails
                        <ul>
                            <li>
                                Wrote custom routes and controller methods to appropriately render
                                both historical and current information for foreign currencies
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href='https://fixer.io' target='_blank' rel='noopener noreferrer'>Fixer.io</a> Exchange Rate API
                        <ul>
                            <li>
                                Obtained up-to-date exchange rate information for 178 foreign 
                                currencies
                            </li>
                        </ul>
                    </li>
                </ul>
                <p><a href='https://github.com/kennja05/converter-fe' target='_blank' rel='noopener noreferrer'>Github</a></p>
            </div>
            <div className='gifs'>
                <iframe title='conversion'src="https://giphy.com/embed/lnJpDcLbWo7bNLrIIx?video=0" 
                width="480" height="270" 
                frameBorder="0" class="giphy-embed" allowFullScreen={false}></iframe>

                <iframe title='graph page' src="https://giphy.com/embed/chKfrmf44tjUdKBdU5?video=0" 
                width="480" height="270" 
                frameBorder="0" class="giphy-embed" allowFullScreen={false}></iframe>

                <iframe title='example' src="https://giphy.com/embed/MdjWkwLrQxAMLZD4Zv?video=0" 
                width="480" height="270" 
                frameBorder="0" class="giphy-embed" allowFullScreen={false}></iframe>
            </div>
        </div>
    )
}

export default Converter