import React from 'react';
import icon from './../../styles/img/check_24px.png';

const SecondBlock = () => {
    return (
        <div className='skills'>
            <h3 className="skills__title">
            Testing skills
            </h3>
            <div className="skills__body">
            
                <div className="skills__column">

                    <div className="skills__item">
                        <div className="skills__icon">
                            <img src={icon} alt="icon" className="skills__img"></img>
                         </div>
                    Applying HTML, CSS/SASS. Markup implementation.</div>
                        <div className="skills__item">
                        <div className="skills__icon">
                            <img src={icon} alt="icon" className="skills__img"></img>
                         </div>
                            Applying JS. Transforming and organising data. Interactions.</div>
                    </div>


                        <div className="skills__circle">
                            <div className="skills__quatro-1">
                                <div className="skills__quatro-text">TTP/REST</div>
                            </div>
                            <div className="skills__quatro-2">
                                <div className="skills__quatro-text">Vue/React</div>
                            </div>
                            <div className="skills__quatro-3">
                                <div className="skills__quatro-text">JS</div>
                            </div>
                            <div className="skills__quatro-4">
                                <div className="skills__quatro-text">HTML, CSS/SASS</div>
                            </div>
                        </div>

                    <div className="skills__column">

                        <div className="skills__item">
                             <div className="skills__icon">
                            <img src={icon} alt="icon" className="skills__img"></img>
                         </div>
                            Working with asynchronous code, HTTP and the REST architecture</div>
                        <div className="skills__item">
                             <div className="skills__icon">
                            <img src={icon} alt="icon" className="skills__img"></img>
                         </div>
                            Using one of the modern front-end frameworks either Vue or React. Vue is preferable but React is also viable.</div>
                    </div>
                </div>
            </div>
    )
}

export default SecondBlock

