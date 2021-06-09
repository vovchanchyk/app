import React from 'react'
//import logo from './../src/imgs/Group 280.png'
import logo from './../../../styles/img/Group 280.png'

const Offer = () => {
    return (
        <div className='offer'>
            <div className="offer__brand">
                <img src= {logo} alt="" />
            </div>
            <h1 className="offer__title">Tezos Ukraine</h1>
            <p className="offer__subtitle">
            Front-end development
             test assignment
            </p>
        </div>
    )
}

export default Offer
