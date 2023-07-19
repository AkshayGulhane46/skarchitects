import React from "react";
import '../../App.css'
import CardItem from "../CardItem";
import './Services.css'

export default function Services(){
    return(

        <div className="services--wrapper">

        <CardItem  
                src='images/img-9.jpg'
                text='Architectural Design'    
        />
            <CardItem  
                src='images/img-9.jpg'
                text='Bathroom Design '
             />
            <CardItem  
                src='images/img-9.jpg'
                text='Building Design,'
            />  
            <CardItem  
                src='images/img-9.jpg'
                text='Custom Homes'
             />
            <CardItem  
                src='images/img-9.jpg'
                text='Dining Room Design'
            />  
            <CardItem  
                src='images/img-9.jpg'
                text='Implementation'
             />
            <CardItem  
                src='images/img-9.jpg'
                text='Support'
            />  
            <CardItem  
                src='images/img-9.jpg'
                text='Implementation'
             />
            <CardItem  
                src='images/img-9.jpg'
                text='Support'
            />  
            <CardItem  
                src='images/img-9.jpg'
                text='Implementation'
             />
            <CardItem  
                src='images/img-9.jpg'
                text='Support'
            />  

        </div>
        



    )
    
    
}