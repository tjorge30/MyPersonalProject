import React, { useState } from 'react';
import Logo from '../../assets/images/LELogo.png';
import homeIcon from '../../assets/images/homeIcon.png';
import accntIcon from '../../assets/images/accntIcon.png';
import './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav (props) {

const [showMenu, setShowMenu] = useState('false')
    

   const menuClick = () => {
        if(showMenu === 'false'){
            setShowMenu('true')
            }else if (showMenu === 'true'){ 
                setShowMenu('false')
            }else {setShowMenu('false')}
    }

    const home = () =>{
        return 
    }
    

  
    return (
    <div className="Nav">
        <div className='logo'>
            <img alt='Logo' src={Logo}/>
        </div>
        <div id='menu' className='menu'>
            <img className='homeButton' alt='home icon' src={homeIcon}/>
            <img className='accntButton' alt='account icon' src={accntIcon}/>
                
                {/* <div className={showMenu}>
                    <div className='popUpMenu'>
                        <button onClick={menuClick} className='closeBtn'>&times;</button>  
                        <ul>
                        <Link to='/'></Link>
                            <li></li>  
                            <li><Link to='/user/'>My Page</Link></li>
                            <li><Link to='/admin/'>Admin Page</Link></li>
                        </ul>
                    </div>
                </div> */}
        </div>
    </div>
    );    
    
}
