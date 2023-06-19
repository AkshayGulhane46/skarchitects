import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/architecture-hero.mp4' autoPlay muted loop />
      <h1>We Build Dreams</h1>
      <p>So Whats Yours?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Checkout Our Work
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;