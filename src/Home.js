import React from 'react'

class Home extends React.Component {
    
    componentDidMount(){
        console.log(`%c ________________________________________
        < mooooooooooo Welcome... moooooooooooooo >
         ----------------------------------------
                \\   ^__^
                 \\  (oo)\\_______
                    (__)\\       )\\/\\
                        ||----w |
                        ||     ||`, "font-family:monospace")
    }

    handleNameClick = () => {
        this.props.history.push('/about')
    }

    render(){
        return(
            <div className='container home'>
                <div onClick={this.handleNameClick} className='jacob'>
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