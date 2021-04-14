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

            <h2>Taking the First Step Towards Positive Change</h2>
            <div className='row2'>
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
                    <button>Learn More</button>
                </div>
            </div>

            <h2>Quick Guide to Setting New Moon Intentions</h2>
            <div className='row3'>
                <img alt='Moon Phases' src={MoonDesc}/>
            </div>
            <h2>How Do I Do This?</h2>
            <div className='row4'>
                <div className='r4Column1'>
                    <p>
                        The mere mention of the word "change" may cause some to feel uneasy. 
                        We often find ourselves resisting change, perhaps because of the perceived 
                        risk or fear associated with it. This resistance can be seen in the student 
                        who always finds herself procrastinating, the 10-year smoker who 
                        keeps having "one more," or the overly stressed boss who continues to add 
                        to her plate. It’s an interesting predicament we put ourselves in. So why do 
                        we have such a hard time initiating or following through with our desire to change?
                        A lot of times it is because we have a lack of a support system. This is where I will be able 
                        to help you! 
                    </p>
                    <h2>Step 1.</h2>
                    <h2>Step 2.</h2>
                    <h2>Step 3.</h2>
                    <button>Regiser Now!</button>
                </div>
            </div>
           
        </div>
    )
}

export default About;