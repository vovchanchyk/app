import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import NavBtn from '../bttns/NavBtn'
import Nav from '../nav/Nav'
import logo from './../../styles/img/Vector.png';


const Header = () => {

const [collapse, setCollapse]=useState<boolean>(true)

    return (
        <div className="header">
            <div className="header__brand">
                <img className="header__logo" src={logo} alt="" />
                <div className="header__logo-txt">
                Tezos4all
                </div>
            </div>
            <button className="header__burger">
            <FontAwesomeIcon onClick={()=>setCollapse(!collapse)} icon='bars' className="header__burger-icon" />  
            </button>
            <Nav collapse={collapse}>
                <NavBtn name='Home' path='/home'/>
                <NavBtn name='Login'path='/login' />
            </Nav>
            
        </div>
    )
}

export default Header
