import React from 'react'

const Triptracker = () => {
    return(
        <div className='project-page'>
            <div className='project-content'> 
                <h1>
                    <u>
                        Triptracker
                    </u>
                </h1>
                <p>
                    When planning a trip a lot of people like to make a budget for their expenses. 
                    Someone like myself could budget $500 for food and $1000 for the hotel stay, or a 
                    better planner than I might want to build out a table with various types of expenses
                    detailing exactly how much will be spent for each expense. I would say that either 
                    way is fine, but something that many would not consider during the planning process
                    of a trip to the foreign country, is that the exchange rate of the United States 
                    Dollar to the foreign currency is constantly changing. Now all of the sudden that
                    dinner that I had planned for 30 euros, which originally was going to cost 54 USD
                    will now cost 55 USD! On a small scale I think we can all agree that it will not 
                    have that much of an effect. However, what if we were going to stay for a long 
                    time, or were planning a stay in a high-end boutique hotel? That 1.8% change that 
                    I mentioned above could start to make a difference once the scope of the spending 
                    gets larger.
                </p>
                <p>
                    The goal of this program is to allow for users to budget trips to foreign 
                    countries while getting real-time information about the exchange rate of that 
                    country's currency to the US Dollar, thus allowing the user to make an informed 
                    decision about when to exchange their currency.
                </p>
                </div>
                <div className='project-content'>
                <h1><u>Technologies Used</u></h1>
                <h3>Front End:</h3>
                <ul>
                    <li>React</li>
                        <ul>
                            <li>Implemented components and lifecycle methods to obtain the most up-to-date information</li>
                        </ul>
                    <li>JavaScript</li>
                    <li>CanvasJS (for graphs)</li>
                    <ul>
                        <li>Created pie charts and line graphs with user input and information from 
                            exchange rate API
                        </li>
                    </ul>
                </ul>
                <h3>Back End:</h3>
                <ul>
                    <li>Ruby on Rails</li>
                    <ul>
                        <li>Utilized Rails API and Postgres to obtain and store exchange rates and user data</li>
                    </ul>
                    <li><a href='https://fixer.io/'>Fixer.io</a> Exchange Rate API</li>
                </ul>
                <p>
                    <a href='https://github.com/kennja05/trip-tracker-fe'>Github</a> 
                    {/* will want to get the github icon */}
                </p>
            </div>       
        </div>
    )
}

export default Triptracker