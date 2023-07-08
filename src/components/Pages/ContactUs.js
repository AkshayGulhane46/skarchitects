import React from "react";
import '../../App.css'
import { Button } from "../Button";
import './ContactUs.css';
import  { useRef } from 'react';
import emailjs, { init } from '@emailjs/browser';
import { toast } from 'wc-toast'
import { Icon } from '@iconify/react'
import './Map.css'
import GoogleMapReact from 'google-map-react'



export default function ContactUs(){
    const form = useRef();

    const LocationPin = ({ text }) => (
        <div className="pin">
            <Icon icon="bx:map" />
       
        </div>
      )



    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_lf9vp6n', 'template_av9xgg9' , form.current , 
        'xHJl1Zd1d1u1YUdpH').
        then((result) => {
            console.log(result.text);
            toast("Our Team will Contact You shortly!");
        }, (error) => {
            console.log(error.text);
        });
    }

    const location = {
        address: 'Studio Nexo, Shastri Nagar Nagpur',
        lat:  21.14407975031209,
        lng: 79.12893910104653,
      }

    
    return(
    <>
    <h1 className="header">Contact US</h1>
    <h1> Please Enter Your Details for Free site visit</h1>
    <div className="form-wrapper">
        <div className='input-areas'>
            <form ref = {form} onSubmit={sendEmail} 
                className="contact-us-form">
                    <input type='text'   id="to_name" name='name' placeholder='Your Name' 
                    className='footer-input'/>
                    <input type='email' id="from_email" name='email' placeholder='Your Email' 
                    className='footer-input'/>
                    <input type='text' id="message" name='requirement' placeholder='Your Requirement' 
                    className='footer-input'/>
                    <input type='number' id="contact-number" name='contact-number' placeholder='Contact Number' 
                    className='footer-input'/>
                    <input className="submit-btn" type="submit" value="Send" />
            </form>
        </div>

    <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
        <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            defaultCenter={location}
            defaultZoom={8}
        >
            <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
            />
        </GoogleMapReact>
        </div>
    </div>

</div>
</>
    )

}
