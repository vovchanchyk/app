import React from 'react'
import Offer from '../blocks/offer/Offer'
import Result from '../table/Result'
import Team from '../blocks/team/Team'
import FirstScreen from '../blocks/FirstScreen'
import Description from '../blocks/description/Description'
import Skills from '../blocks/Skills'

const Home = () => {
    return (
        <div className='home'>
            <FirstScreen>
                <Offer />
                <Result />
            </FirstScreen>
            <Skills/>
            <Description/>
            <Team/>
        </div>
    )
}

export default Home
