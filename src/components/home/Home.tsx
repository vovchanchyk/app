import React from 'react'
import FirstBlock from '../blocks/FirstBlock'
import SecondBlock from '../blocks/SecondBlock'
import Offer from '../blocks/offer/Offer'
import Skills from '../blocks/skills/Skills'
import Result from '../table/Result'
import Team from '../blocks/team/Team'

const Home = () => {
    return (
        <div className='home'>
            <FirstBlock>
                <Offer />
                <Result />
            </FirstBlock>
            <SecondBlock/>
            <Skills/>
            <Team/>
        </div>
    )
}

export default Home
