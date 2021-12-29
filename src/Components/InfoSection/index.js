import React from 'react'
import alt from '../../Images/techStack.JPG'
import { InfoContainer, Content, TextCol, InfoH1, InfoP, ImgCol, Img 
            } from './InfoSectionElements'

const InfoSection = ({heading, subtitle, subtitle2, id, imgStart, img, borderR}) => {
    return (
        <InfoContainer id={id}>
            <Content imgStart={imgStart}>
                <TextCol>
                    <InfoH1>{heading}</InfoH1>
                    <InfoP>{subtitle}</InfoP>
                    <InfoP>{subtitle2}</InfoP>
                </TextCol>

                <ImgCol>
                    <Img src={img} alt={alt} style={{borderRadius: borderR}}/>
                </ImgCol>

            </Content>
        </InfoContainer>
    )
}

export default InfoSection
