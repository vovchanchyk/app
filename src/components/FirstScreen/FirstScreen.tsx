import React from 'react';
import styles from './FirstScreen.module.scss';
import background from './background.png';


export const FirstScreen:React.FC = ({children}) => {
    return (
        <div className={styles.firstscreen}>
            <div className={styles.firstscreen__img} style={{backgroundImage : `url(${background})`}}>
                <div className={styles.firstscreen__cover}>
                    {children}
                </div>
            </div>
        </div>
    )
}



