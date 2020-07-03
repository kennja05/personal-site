import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

const Triptracker = () => {
    return(
        <div className='project-page container-fluid'>
            <h1 style={{textAlign: 'center'}}>Trip Tracker</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <p>
                            The goal of this program is to allow for users to budget trips to foreign 
                            countries while getting real-time information about the exchange rate of that 
                            country's currency to the US Dollar, thus allowing the user to make an informed 
                            decision about when to exchange their currency. The user is able to input
                            budgeted expenses in the units of foreign currency, and then track how much
                            the cost in dollars is changing on an hourly basis.
                        </p>
                        <div>
                            <a className='icon' href='https://trip-tracker.netlify.app/' target='_blank' 
                            rel='noopener noreferrer'>Live Site</a>
                        </div>
                        <div>
                            <a className='icon' href='https://www.youtube.com/watch?v=a4EL71uBcW8' target='_blank' 
                            rel='noopener noreferrer'>
                            <FontAwesomeIcon size='2x' icon={faYoutubeSquare} />
                            </a>
                        </div>
                        <div>
                            <a className='icon' href='https://github.com/kennja05/trip-tracker-fe' 
                            target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon size='2x' icon={faGithub} /></a>
                        </div>
                        <div className='container tech-list'>
                            <h2 style={{color: 'white'}}>Technologies</h2>
                            <ul className='list-group'>
                                <li className='list-group-item'>React</li>
                                <li className='list-group-item'>JavaScript</li>
                                <li className='list-group-item'>HTML</li>
                                <li className='list-group-item'>CSS</li>
                                <li className='list-group-item'>Flexbox</li>
                                <li className='list-group-item'>CanvasJS</li>
                                <li className='list-group-item'>Rails</li>
                                <li className='list-group-item'>Ruby</li>
                                <li className='list-group-item'>PostgreSQL</li>
                                <li className='list-group-item'>Cron Jobs/Heroku Scheduler</li>
                                <li className='list-group-item'>Fixer.io and RESTCountries APIs</li> 
                            </ul>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='container'>
                            <div className='embed-responsive embed-responsive-16by9'>
                                <iframe title='login' src="https://giphy.com/embed/lrUWxQV1PVmtcVuZys?video=0" 
                                    className='embed-responsive-item giphy-embed'
                                    allowFullScreen={false}>
                                </iframe>
                            </div>
                            <div className='embed-responsive embed-responsive-16by9'>
                                <iframe title='graphs' src="https://giphy.com/embed/dyuzM7FK0Mo3qaovDe?video=0" 
                                    className="embed-responsive-item giphy-embed" 
                                    allowFullScreen={false}>
                                </iframe>
                            </div>
                            <div className='embed-responsive embed-responsive-16by9'>
                                <iframe title='planned expense'src="https://giphy.com/embed/Ri7oUAFSWgdv3Uwvry?video=0"                                    
                                    className="embed-responsive-item giphy-embed" allowFullScreen={false}>                                       
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Triptracker

/* <div className='project-page'>
            <div className='summary-tech'>
                <div className='project-content'> 
                    <h1 style={{textAlign: 'center'}}><u>Triptracker</u></h1>
                    <p>
                        The goal of this program is to allow for users to budget trips to foreign 
                        countries while getting real-time information about the exchange rate of that 
                        country's currency to the US Dollar, thus allowing the user to make an informed 
                        decision about when to exchange their currency. The user is able to input
                        budgeted expenses in the units of foreign currency, and then track how much
                        the cost in dollars is changing on an hourly basis.
                    </p>
                    <h2>
                        <a href='https://trip-tracker.netlify.app/' target='_blank' 
                        rel='noopener noreferrer' className='fixer-link'>Live Site</a>
                    </h2>
                </div>
                <div className='project-content'>
                    <h1 style={{textAlign: 'center'}}><u>Technologies Used</u></h1>
                    <h3>Front End:</h3>
                    <ul>
                        <li>React
                            <ul>
                                <li>
                                    Implemented components and lifecycle methods to obtain the most 
                                    up-to-date information
                                </li>
                            </ul>
                        </li>    
                        <li>JavaScript</li>
                        <li>CanvasJS
                            <ul>
                                <li>
                                    Created pie charts and line graphs with user input and information 
                                    from exchange rate API
                                </li>
                            </ul>
                        </li>
                        <li>HTML/CSS</li>
                    </ul>
                    <h3>Back End:</h3>
                    <ul>
                        <li>Ruby on Rails
                            <ul>
                                <li>
                                    Utilized Rails API and Postgres to obtain and store exchange rates 
                                    and user data
                                </li>
                                <li>
                                    Employed cron jobs and Heroku Scheduler to regularly fetch exhange rates 
                                </li>
                            </ul>
                        </li>
                        <li><a className='fixer-link' href='https://fixer.io/' target='_blank' rel='noopener noreferrer'>Fixer.io</a> Exchange Rate API
                            <ul>
                                <li>Obtained up-to-date exchange rate information for 178 foreign
                                    currencies
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p>
                        <a className='icon' href='https://github.com/kennja05/trip-tracker-fe' 
                        target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon size='2x' icon={faGithubSquare} /></a> 
                    </p>
                </div>    
            </div>
            <div className='gifs'>
                <iframe title='login' src="https://giphy.com/embed/lrUWxQV1PVmtcVuZys?video=0" 
                width="416" height="234" 
                frameBorder="0" class="giphy-embed" allowFullScreen={false}></iframe>

                <iframe title='graphs' src="https://giphy.com/embed/dyuzM7FK0Mo3qaovDe?video=0" 
                width="416" height="234" 
                frameBorder="0" class="giphy-embed" allowFullScreen={false}></iframe>

                <iframe title='planned expense'src="https://giphy.com/embed/Ri7oUAFSWgdv3Uwvry?video=0" 
                width="416" height="234" 
                frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </div>   
        </div> */