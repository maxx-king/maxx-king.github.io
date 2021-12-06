import React from 'react'
import video from '../../Videos/portfolioLanding.mp4'
import {Button} from '../ButtonElement'
import { LandingContainer, Background, Content, Video, LandingH1,
         LandingH2, LandingH3, LandingP, BtnWrap } from './LandingSectionElements'



const LandingSection = () => {
    return (
        <LandingContainer>

            <Background>
                <Video autoPlay 
                        loop 
                        muted 
                        src={video} 
                        type='video.mp4' 
                />
            </Background>

            <Content>
                <LandingH1>Maxx King</LandingH1>
                <LandingH2>Full-Stack Software Developer</LandingH2>
                <LandingH3>Student @ San Diego State University</LandingH3>
                <LandingP>Welcome to my digital portfolio!</LandingP>
            
                

            </Content> 

            <BtnWrap>
                <Button to='AboutMe' smooth={true} duration={500}>About Me</Button>
                <Button to='Portfolio' smooth={true} duration={750}>Projects</Button>
                <Button to='ContactMe' smooth={true} duration={1000}>Contact Me</Button>
            </BtnWrap>

            
        </LandingContainer>
    )
}

export default LandingSection
