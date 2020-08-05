import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const LinearGradient = () => {
    return(
        <div className='project-page container-fluid'>
            <h1 style={{textAlign: 'center'}}>Linear Gradient Generator</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <p>
                            Linear gradient is a css function commonly used to provide styling to
                            the backgound of a page (such as this one). Given two or more colors
                            the function creates a smooth transition between the provided colors. The
                            possibilities are essentially endless, as there is no limit to the number
                            of colors that can be fed into the linear gradient function.
                        </p>
                        <p>
                            This application randomly generates two linear gradients upon load, and 
                            also allows for the user to manually create their own linear gradient 
                            using a color picker. Previously, I've found it difficult to settle on 
                            colors to use for linear gradients, so I think that randomly generating 
                            them and then seeing what looks good could be a good solution for that 
                            issue!
                        </p>
                        <div>
                            <a className='icon' href='https://linear-gradient-randomizer.netlify.app/' target='_blank' 
                            rel='noopener noreferrer'>Live Site</a>
                        </div>
                        <div>
                            <a className='icon' href='https://github.com/kennja05/gradient-generator' 
                            target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon size='2x' icon={faGithub} /></a>
                        </div>
                        <div className='container tech-list'>
                            <h2 style={{color: 'white'}}>Technologies</h2>
                            <ul className='list-group'>
                                <li className='list-group-item'>React</li>
                                <li className='list-group-item'>Styled Components</li>
                                <li className='list-group-item'>JavaScript</li>
                                <li className='list-group-item'>HTML</li>
                                <li className='list-group-item'>CSS</li>
                                <li className='list-group-item'>Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='container'>
                            <div className='embed-responsive embed-responsive-16by9'>
                            <iframe title='shuffle' src="https://giphy.com/embed/VFppHn5uJ57Lle2syH" 
                                class="embed-responsive-item giphy-embed" allowFullScreen={false}>
                            </iframe>
                            </div>
                            <div className='embed-responsive embed-responsive-16by9'>
                                <iframe title='copy to clipboard' src="https://giphy.com/embed/LM9FxpM9RVqfe4m7bD" 
                                    class="embed-responsive-item giphy-embed" allowFullScreen={false}>
                                </iframe>
                            </div>
                            <div className='embed-responsive embed-responsive-16by9'>
                                <iframe title='custom' src="https://giphy.com/embed/MByR9ymX9B8KWY9hPW" 
                                    class="embed-responsive-item giphy-embed" allowFullScreen={false}>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinearGradient