import React from 'react'
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';
import styles from './NavBtn.module.scss';


type TLink = {
    name:string;
    path:string
}



export const NavBtn:React.FC<TLink> = ({name,path}) => {
    const history = useHistory()
const location =  useLocation()
    const active = location.pathname === path;
    return (
        <div className={active? styles.btnactive: styles.btn} onClick={()=>history.push(path)}>
            {name}
        </div>
    )
}

