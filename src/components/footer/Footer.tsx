import React from 'react'
import NavBtn from '../bttns/NavBtn'
import icon from './../../styles/img/Vector.png';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';

const Footer = () => {

    const location =  useLocation()
    const history = useHistory()

    const handler = (path :string) => {
        console.log(location)
        
        
        history.push(path)

    }


    return (
        <div className="footer">
        <div className="footer__left left">
            <div className="footer__logo">
                <img src={icon} alt="" />
                <span className="text">Tezos4all</span>
            </div>
            <div className="footer__columns" >
                <div className="footer__column">
                    <span className="footer__item">
                        Our team
                    </span>
                    <span className="footer__item">
                        Testing skills
                    </span>
                    <span className="footer__item">
                        General description of the assignment
                    </span>
                </div>
                <div className="footer__column">
                    <span className="footer__item">
                        Carrier
                    </span>
                    <span className="footer__item">
                        About us
                    </span>
                    <span className="footer__item">
                        Blog
                    </span>
                </div>
            </div>


        </div>
        <div className="footer__right">
        <nav className="footer__btns">            
                <NavBtn path='/home'  name='Home'/>
                <NavBtn path='/login'   name='Login'/>
            </nav> 
        <span className="footer__copyright">(C)Copyright</span>
        </div>

    </div>
    )
}

export default Footer
