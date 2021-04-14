import React from 'react';
import Logo from '../../assets/images/LELogo.png'
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    const openMenu= () => {

    }
    const closeMenu= () => {

    }

    return (
      <div className="Nav">
          <div className='logo'>
            <img alt='Logo' src={Logo}/>
          </div>
          <div id='menu' className='menu'>
                <div onclick={openMenu()} className='hamburgerMenu'>&#9776;</div>
                <div className='menu-list'>
                    <span onclick={closeMenu()} className='closeBtn'>&times;</span>  
                    <ul>
                    <li><Link to='/'>HOME</Link></li>  
                    <li><Link to='/user/'>MY PAGE</Link></li>
                    <li><Link to='/admin/'>ADMIN PAGE</Link></li>
                    </ul>
                </div>
          </div>
      </div>
    );    
  }
  
export default Nav;