import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import Andromeda from './img-1.jpg'
import Sombrero from './img-2.jpg'
import MilkyWay from './img-3.jpg'
import NPX32 from './img-4.jpg'
import Butterfly from './img-5.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our latest offers!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Andromeda}
              text='Visit neighborhood galaxy'
              label='Andromeda'
              path='/offers'
            />
            <CardItem
              src= {Sombrero}
              text='Meet the heights of human exploration'
              label='Sombrero'
              path='/offers'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={MilkyWay}
              text='Find beauties in our own galaxy'
              label='Milky Way'
              path='/offers'
            />
            <CardItem
              src={NPX32}
              text='Get to know recently discovered worlds'
              label='NPX32'
              path='/offers'
            />
            <CardItem
              src={Butterfly}
              text='Be amazed by corners of the universe'
              label='Butterfly Nebula'
              path='/offers'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
