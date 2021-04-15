import React, { useState } from 'react';
import Logo from '../../assets/images/LELogo.png'
import './Nav.css';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            showMenu:'false',
    
        }
    }

    menuClick = () => {
        if(this.state.showMenu === 'true'){
            this.setState({ showMenu: 'false'})
            }else{ this.setState({ showMenu: 'true'})}
    }

    

    render(){
        return (
        <div className="Nav">
            <div className='logo'>
                <img alt='Logo' src={Logo}/>
            </div>
            <div id='menu' className='menu'>
                <button onClick={this.menuClick} className='hamburgerMenu'>&#9776;</button>
                   
                    <div className={this.state.showMenu}>
                        <div className='popUpMenu'>
                            <button onClick={this.menuClick} className='closeBtn'>&times;</button>  
                            <ul>
                                <li><Link to='/'>Home</Link></li>  
                                <li><Link to='/user/'>My Page</Link></li>
                                <li><Link to='/admin/'>Admin Page</Link></li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
        );    
    }
}
