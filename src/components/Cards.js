import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Checkout this project</h1>

        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem  
                    src='images/building1.png'
                    text='Project 1'
                    label = 'Demo Project'
                    path='/projects'
                    />
                      <CardItem  
                    src='images/img-9.jpg'
                    text='Proectt2 '
                    label = 'Demo Project'
                    path='/projects'
                    />
                        <CardItem  
                    src='images/img-9.jpg'
                    text='Proectt2 '
                    label = 'Demo Project'
                    path='/projects'
                    />
                        <CardItem  
                    src='images/img-9.jpg'
                    text='Proectt2 '
                    label = 'Demo Project'
                    path='/projects'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards