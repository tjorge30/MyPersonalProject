import React, { useState } from 'react';
import Logo from '../../assets/images/LELogo.png';
import homeIcon from '../../assets/images/homeIcon.png';
import accntIcon from '../../assets/images/accntIcon.png';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { loginUser }from '../../redux/userReducer';
import './Nav.css';

function Nav (props) {

    // const [showMenu, setShowMenu] = useState('false')
    // const menuClick = () => {
    //     if(showMenu === 'false'){
    //         setShowMenu('true')
    //         }else if (showMenu === 'true'){ 
    //             setShowMenu('false')
    //         }else {setShowMenu('false')}
    // }


    const {admin} = props.userReducer.user;
    
    const handelAccntBtnClick = () =>{
        if(admin){
            return('/admin') 
        }else{
            return('/user')
        }
    }

  
    return (
    <div className="Nav">
        <div className='logo'>
            <img alt='Logo' src={Logo}/>
        </div>
        <div id='menu' className='menu'>
        <Link to='/'><img className='homeButton' alt='home icon' src={homeIcon}/></Link>
            <Link to={handelAccntBtnClick}><img className='accntButton' alt='account icon' src={accntIcon}/></Link>
        </div>
    </div>
    );    
    
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, {loginUser})(Nav);
