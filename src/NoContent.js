import React from 'react'

class NoContent extends React.Component {

    render(){
        return(
            <div className='no-content-page'>
                <h1>PAGE NOT FOUND</h1>
                <h3>The requested page does not exist</h3>
                <h3>Please <a style={{color: '#ff69b4', textDecoration: 'underline'}} href='mailto:jacobkenny05@gmail.com'>message</a> Jacob if this is an error</h3>
            </div>
        )
    }
}

export default NoContent