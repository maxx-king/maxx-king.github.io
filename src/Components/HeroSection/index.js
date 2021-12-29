import React from 'react'
// import bgimg from '../../Images/black-leather-texture.jpg'
import logoimg from '../../Images/MK_Logo.png'

import {Button} from '../ButtonElement'
import {HeroContainer, LogoImg, 
        BtnRow, BtnWrap,
        }   from    './HeroSectionElements'

const HeroSection = () => {
    return (
        <HeroContainer className='HeroSection'>

            
            <LogoImg src={logoimg}/>
            

            

            <BtnRow>
                <BtnWrap>
                    <Button to='About' smooth={true} duration={500}>About Me</Button>
                    <Button to='Portfolio' smooth={true} duration={1500}>Projects</Button>
                    <Button to='ContactMe' smooth={true} duration={5000}>Contact Me</Button>
                </BtnWrap>
            </BtnRow>

        </HeroContainer>
    )
}

export default HeroSection
