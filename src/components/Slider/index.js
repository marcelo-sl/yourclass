import React from 'react';

import './index.css';

import {Carousel,Button } from 'react-bootstrap'

function Slider(){
    return(
        <>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="http://placekitten.com/1200/940"
                alt="First slide"
                />
                <Carousel.Caption className="text-left">
                <h1>First slide label</h1>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="http://placekitten.com/1200/940"
                alt="Third slide"
                />

                <Carousel.Caption className="text-right">
                <h1>Second slide label</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="http://placekitten.com/1200/940"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h1>Third slide label</h1>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>        
        </>
    )
    
}


export default Slider;
