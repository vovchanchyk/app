import React, { useState } from 'react'
import {NavBtn} from '../NavBtn'
import icon from './../../img/Vector.png';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Nav } from '../Nav';

export const Footer = () => {
    const [collapse, setCollapse]=useState<boolean>(true)
      return (
        <div className={styles.footer}>
            <div className={styles.footer__logo}>
                <img src={icon} alt="" />
                <span className={styles.footer__text}>Tezos4all</span>
            </div>
            <button className={styles.footer__burger}>
            <FontAwesomeIcon onClick={()=>setCollapse(!collapse)} icon='bars' className={styles.footer__burgericon} />  
            </button>
            <div className={styles.footer__columns} >
                <div className={styles.footer__column}>
                    <span className={styles.footer__item}>
                        Our team
                    </span>
                    <span className={styles.footer__item}>
                        Testing skills
                    </span>
                    <span className={styles.footer__item}>
                        General description of the assignment
                    </span>
                </div>
                <div className={styles.footer__column}>
                    <span className={styles.footer__item}>
                        Carrier
                    </span>
                    <span className={styles.footer__item}>
                        About us
                    </span>
                    <span className={styles.footer__item}>
                        Blog
                    </span>
                </div>
            </div>
               <Nav collapse={collapse}>
               <NavBtn path='/home'  name='Home'/>
                <NavBtn path='/login'   name='Login'/>
               </Nav>     
        <span className={styles.footer__copyright}>(C)Copyright</span>
    </div>
    )
}


