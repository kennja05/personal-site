import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'


class NoContent extends React.Component {

    render(){
        return(
            <div className='no-content-page'>
                <h1>PAGE NOT FOUND</h1>
                <h3>The requested page does not exist</h3>
                <h3>Please <a style={{color: '#ff69b4', textDecoration: 'underline'}} 
                    href='mailto:jacobkenny05@gmail.com'>message</a> Jacob if this is an error
                </h3>
                <Link className='icon' to='/'>
                    <FontAwesomeIcon aria-hidden='true' icon={faHome} size='2x' />
                </Link>
                <a href='/' className='sr-only'>Return to Homepage</a>
            </div>
        )
    }
}

export default NoContent