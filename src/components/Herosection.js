import React, {useState} from 'react'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './heroElements'
import {Button} from './ButtonElement'
import Video from '../video/video6.mp4'



const Herosection = () => {
    const [hover,setHover]= useState(false)
    const onHover = () =>{
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Καλλιεργούμε με αγάπη την Ελληνική γη</HeroH1>
                <HeroP>
                   
                </HeroP>
                <HeroBtnWrapper>
                <Button  
                to="signup" 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                >
                Get Started
                {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
            </HeroContent>
            
            
        </HeroContainer>
    )
}

export default Herosection;
