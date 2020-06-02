import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMediumM } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhoneSquare} from '@fortawesome/free-solid-svg-icons'
import ReactToolTip from 'react-tooltip'

class About extends React.Component {
    
    // state={
    //     showPhone: false
    // }
    
    // handlePhoneClick = () => {
    //     this.setState({
    //         showPhone: !this.state.showPhone
    //     })
    // }
    
    
    render(){
        return(
            <div className='about-page'>
                <p style={{fontFamily: 'Poller One'}}>Hi Im Jacob</p>
                <img id='profile-picture' alt='me' src='https://avatars1.githubusercontent.com/u/57412930?s=460&u=2a40896d92e75e9490ef547487c0021012f3d131&v=4' />
                <div className='bio'>
                    <p>
                        At the age of 26 I left what could end up to be the most stable employment 
                        experience I will ever have as a union-backed employee of the Commonwealth of 
                        Pennsylvania to try to learn how to code. After two years of toiling away in 
                        the basement of the State Treasury building I was ready for a change. When 
                        preparing to leave any position it's important to have a plan - which I think 
                        ideally would include a start date for a new position, however as I was 
                        preparing for my own departure I would frequently find that I was missing 
                        skills for the jobs that I wanted, and didn't have much interest in the jobs 
                        for which I was qualified.
                    </p>
                    <p>
                        I had long held an interest in coding, but aside from completing a few random 
                        tutorials here and there, I hadn’t really done much about it. However at that 
                        big moment in my life I made a decision: instead of immediately seeking another 
                        position, I elected to pursue that long-held interest in coding by completing 
                        an intensive program to learn computer programming.
                    </p>
                    <p>
                        So far, the thing that I have enjoyed the most is building websites using 
                        React (such as this one). Sometimes things never make it past the localhost phase, but 
                        nonetheless, I’ve greatly enjoyed being able to take an idea, and quickly 
                        get it working in the browser.
                    </p>
                    <p>
                        There’s a saying that goes “The best time to plant a tree was twenty years ago. 
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
                        <FontAwesomeIcon size='2x' icon={faEnvelope} />
                    </a>
                    <a className='icon' href='https://medium.com/@jacobkenny05' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon size='2x' icon={faMediumM} />
                    </a>
                    <a className='icon' href='https://www.linkedin.com/in/jacob-kenny/' target='_blank'rel='noopener noreferrer'>
                        <FontAwesomeIcon size='2x' icon={faLinkedin} />
                    </a>
                    <a className='icon' href='https://github.com/kennja05' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon size='2x'icon={faGithubSquare} />
                    </a>
                    <span data-tip data-for='phonenumber'> <FontAwesomeIcon size='2x' icon={faPhoneSquare} /> </span>
                    <ReactToolTip id='phonenumber' type='dark'>
                        <span>(570) 716-1763</span>
                    </ReactToolTip>
                </div>
            </div>
            )
        }
    }

export default About 