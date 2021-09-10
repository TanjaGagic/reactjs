import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our latest offers!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-5.jpg'
              text='Šetnje pored šumadijskih reka'
              label='Reke'
              path='/offers'
            />
            <CardItem
              src='images/img-6.jpg'
              text='Šetnje po vojvođanskim poljima'
              label='Njive'
              path='/offers'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-8.jpg'
              text='Urbana šetnja Beogradom'
              label='Beograd'
              path='/offers'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Bajkovita šetnja Novim Sadom'
              label='Novi Sad'
              path='/offers'
            />
            <CardItem
              src='images/img-10.jpg'
              text='Lagana šetnja Suboticom'
              label='Subotica'
              path='/offers'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
