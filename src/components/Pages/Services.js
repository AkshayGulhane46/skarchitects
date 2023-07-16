import React from "react";
import '../../App.css'
import { Link } from "react-router-dom";
import CardItem from "../CardItem";
import '../Cards.css'

export default function Services(props){
    return (
        <>

    <CardItem  
        src='images/img-9.jpg'
        text='Project 1'
        label = 'Demo Project'
        path='/projects'
    />    
    </>   
    )
    
}