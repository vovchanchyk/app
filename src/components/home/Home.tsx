import React from 'react';
import { Offer } from '../Offer';
import { Result } from '../Result';
import { Team } from '../Team';
import { FirstScreen } from '../FirstScreen';
import { Description } from '../Description';
import { Skills } from '../Skills';

export const Home = () => {
  return (
    <div className='home'>
      <FirstScreen>
        <Offer />
        <Result />
      </FirstScreen>
      <Skills />
      <Description />
      <Team />
    </div>
  );
};
