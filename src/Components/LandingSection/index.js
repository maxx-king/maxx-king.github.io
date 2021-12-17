import React from 'react'
import {Button} from '../ButtonElement'
import bgimg from '../../Images/MK_Logo.png'

import { LandingContainer, Content, LandingH1, Image,
         LandingH2, LandingP, BtnWrap } from './LandingSectionElements'


const LandingSection = () => {
    return (
        <LandingContainer >

                <Image src={bgimg}/>

            <Content>
                <LandingH1>Maxx King</LandingH1>
                <LandingH2>Full-Stack Software Developer</LandingH2>
                <LandingP>Welcome to my digital portfolio!</LandingP>
            </Content> 

            <BtnWrap>
                <Button to='About' smooth={true} duration={500}>About Me</Button>
                <Button to='Portfolio' smooth={true} duration={750}>Projects</Button>
                <Button to='ContactMe' smooth={true} duration={1000}>Contact Me</Button>
            </BtnWrap>

            
        </LandingContainer>
    )
}

export default LandingSection
