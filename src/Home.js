import React from 'react'

class Home extends React.Component {
    
    componentDidMount(){
        console.log('Welcome to my homepage')
    }

    render(){
        return(
            <div className='home container'>
                    <div className='name'>
                        <h1>
                            <span className='jacob'>Jacob</span>
                        </h1>
                        <h1>
                            <span className='jacob'>Kenny</span>
                        </h1>
                    </div>
                    <h3 style={{fontFamily: 'Oswald'}}>
                        software developer
                    </h3>
            </div>
        )
    }
}

export default Home