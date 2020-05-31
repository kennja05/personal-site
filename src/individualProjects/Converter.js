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
                    <li>React</li>
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
            </div>
        </div>
    )
}

export default Converter