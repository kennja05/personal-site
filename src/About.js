import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faMediumM } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faPhoneSquare, faStickyNote} from '@fortawesome/free-solid-svg-icons'

import ReactToolTip from 'react-tooltip'

import headshot from './images/headshot.png'
import myResume from './images/myResume.pdf'
class About extends React.Component {
    
    openPdf = () => {
        const win = window.open(myResume, '_blank')
        win.focus()
    }


    render(){
        return(
            <div className='about-page container-fluid'>
                <h3 style={{fontFamily: 'Poller One', marginTop: '10px', color: '#ff69b4'}}>Hi I'm Jacob</h3>
                <img id='profile-picture' alt='Jacob Kenny' src={headshot} />
                <div className='bio'>
                    <p>
                        At the age of 26 I left what could end up to be the most stable job 
                        I will ever have as a union-backed employee of the Commonwealth of 
                        Pennsylvania. After two years of toiling away in 
                        the basement of the State Treasury building I was ready for a change. When 
                        preparing to leave any position it's important to have a plan - which I think 
                        ideally would include a start date for a new position, however as I was 
                        preparing for my own departure I would frequently find that I was missing 
                        skills for the jobs that I wanted, and didn't have much interest in the jobs 
                        for which I was qualified. I decided that I wanted to try to learn about 
                        coding.
                    </p>
                    <p>
                        I had long held an interest in coding, but aside from completing a few random 
                        tutorials here and there, I hadn’t really done much of it. However at that 
                        big moment in my life as I was getting ready to transition out of a role
                        I made a decision: instead of immediately seeking another 
                        position, I elected to pursue that long-held interest in coding by completing 
                        an intensive program to learn computer programming.
                    </p>
                    <p>
                        So far, the thing that I have enjoyed the most is building websites using 
                        React (such as this one). Sometimes things never make it past the "localhost" phase, but 
                        nonetheless, I’ve greatly enjoyed being able to take an idea, and quickly 
                        get it working in the browser.
                    </p>
                    <p>
                        There’s a saying that goes:  “The best time to plant a tree was twenty years ago. 
                        The second best time is now.” It’s a line that resonates with me as I think it 
                        relates to my journey as a coder. Although I wish that I could go back in time 
                        and tell my childhood self to start coding, I cannot. So I do the next best 
                        thing by learning and practicing as much as I can. I’m just getting started, 
                        but I’ve loved every minute of it, and can’t wait to see where coding may take 
                        me.
                    </p>
                </div>
                <div className='contact-info'>
                    <a className='icon' href='mailto:jacobkenny05@gmail.com' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon aria-hidden='true' size='2x' icon={faEnvelope} />
                        <span className='sr-only'>Send an email to me</span>
                    </a>
                    <a className='icon' href='https://medium.com/@jacobkenny05' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon aria-hidden='true' size='2x' icon={faMediumM} />
                        <span className='sr-only'>Read my blog</span>
                    </a>
                    <a className='icon' href='https://www.linkedin.com/in/jacob-kenny/' target='_blank'rel='noopener noreferrer'>
                        <FontAwesomeIcon aria-hidden='true' size='2x' icon={faLinkedin} />
                        <span className='sr-only'>Visit my LinkedIn profile</span>
                    </a>
                    <a className='icon' href='https://github.com/kennja05' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon aria-hidden='true' size='2x'icon={faGithubSquare} />
                        <span className='sr-only'>Visit my Github profile</span>
                    </a>
                    <span className='icon' data-tip='custom show' data-event='click focus' 
                    data-for='phonenumber'> 
                        <FontAwesomeIcon aria-hidden='true' size='2x' icon={faPhoneSquare} /> 
                        <span className='sr-only'>Phone Number: (570) 716-1763</span>
                    </span>
                    <ReactToolTip globalEventOff='click' id='phonenumber' type='dark'>
                        <span style={{fontFamily: 'Oswald'}}>(570) 716-1763</span>
                    </ReactToolTip>
                    <span onClick={this.openPdf} className='icon'>
                        <FontAwesomeIcon aria-hidden={true} size='2x' icon={faStickyNote} />
                        <span className='sr-only'>View Resume</span>
                    </span>
                </div>
            </div>
            )
        }
    }

export default About 