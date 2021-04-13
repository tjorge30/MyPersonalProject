import React from 'react';
import Authentication from '../Authentication/Authentication';
import JessicaB from '../../assets/images/JessicaB.jpeg'
import MoonDesc from '../../assets/images/moonPhases.png'
import './About.css';

function About() {

    return(
        <div>
            <div className='row1'>
                <div className='r1Content'>

                    <div className="authArea">
                    < Authentication />
                    </div>
                    <div>
                        <h1>...it's just a phase</h1>
                    </div>
                </div>
                    
            </div>
            <div className='row2'>
                    <h2>Takeing the First Step Towards Positive Change</h2>
                <div className='r2Column1'>
                    <p>
                    Thank you for visiting my site! My name is Jessica and I am a life coach who specializes
                       in helping women through life events and big transitions with the added help of Reiki.
 
                    </p>
                    <img alt='Jessica B' src={JessicaB}/>
                    <p>
                    I will help you reach your goals through Reki and calling on the energy of the moon to assist you in bringing healthy changes into your life.
                       In many indigenous traditions, the moon is the leader of the feminine life and was placed in the sky to watch over the children of the
                       Earth.<br/><br/>
                       Creating healthy habits typically takes 15 days. This is the same amount of time the cycle of the moon takes. Coincidence? I think not!
                       The moon has an influence on the cycles and natural rhythms of life, Everything that moves is to some degree pulled by the moon.
                    </p>
                </div>
            </div>
            <h2>Quick Guide to Setting New Moon Intentions</h2>
            <div className='row3'>
                <img alt='Moon Phases' src={MoonDesc}/>
            </div>
           
        </div>
    )
}

export default About;