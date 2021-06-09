import React from 'react'
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';


type TLink = {
    name:string;
    path:string
}



const NavBtn:React.FC<TLink> = ({name,path}) => {
    const history = useHistory()
const location =  useLocation()


    const active = location.pathname === path;
    return (
        <div className={active?'btn--active':'btn'} onClick={()=>history.push(path)}>
            {name}
        </div>
    )
}

export default NavBtn;
