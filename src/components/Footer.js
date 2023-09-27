import React from 'react'
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join Us or want us to work with you
            </p>
            <p className='footer-subscription-text'>
                You can work with us
            </p>
            <div className='input-areas'>
                <form>
                    <input type='text' name='name' placeholder='Your Name' 
                    className='footer-input'/>
                    <input type='email' name='email' placeholder='Your Email' 
                    className='footer-input'/>
                     <input type='text' name='requirement' placeholder='Your Requirements' 
                    className='footer-input'/>
                    <Button className='btns'
                        buttonStyle='btn--outline'> Subsctbe </Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-links-wrapper'>
                <div className='footer-links-items'>
                    <h2> About us</h2>
                    <Link to='/contact-us' > contact us</Link>
                    <Link to='/projects' >Test</Link>
                </div>
            </div>
        </div>
        
        Footer</div>
  )
}

export default Footer