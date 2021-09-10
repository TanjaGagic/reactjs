import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import CardItem2 from './CardItem2';
import CardItem3 from './CardItem3';
import CardItem4 from './CardItem4';
import CardItem5 from './CardItem5';
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
            <CardItem2
              src={Sombrero}
              text='Meet the heights of human exploration'
              label='Sombrero'
              path='/offers'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem3
              src={MilkyWay}
              text='Find beauties in our own galaxy'
              label='Milky Way'
              path='/offers'
            />
            <CardItem4
              src={NPX32}
              text='Get to know recently discovered worlds'
              label='NPX32'
              path='/offers'
            />
            <CardItem5
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
