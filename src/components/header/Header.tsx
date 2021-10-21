import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import {NavBtn} from '../NavBtn'
import {Nav} from '../Nav'
import logo from './../../img/Vector.png';
import styles from './Header.module.scss';

export const Header = () => {

const [collapse, setCollapse]=useState<boolean>(true)

    return (
        <div className={styles.header}>
            <div className={styles.header__brand}>
                <img className={styles.header__logo} src={logo} alt="" />
                <div className={styles.header__logotxt}>
                Tezos4all
                </div>
            </div>
            <button className={styles.header__burger}>
            <FontAwesomeIcon onClick={()=>setCollapse(!collapse)} icon='bars' className={styles.header__burgericon} />  
            </button>
            <Nav collapse={collapse}>
                <NavBtn name='Home' path='/home'/>
                <NavBtn name='Login'path='/login' />
            </Nav>
            
        </div>
    )
}


