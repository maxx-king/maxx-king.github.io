import React from 'react'
import alt from '../../Images/techStack.JPG'
import { InfoContainer, Content, TextCol, InfoH1, InfoP, ImgCol, Img 
            } from './InfoSectionElements'

const InfoSection = ({heading, subtitle, id, imgStart, img}) => {
    return (
        <InfoContainer id={id}>
            <Content imgStart={imgStart}>
                <TextCol>
                    <InfoH1>{heading}</InfoH1>
                    <InfoP>{subtitle}</InfoP>
                </TextCol>

                <ImgCol>
                    <Img src={img} alt={alt} />
                </ImgCol>

            </Content>
        </InfoContainer>
    )
}

export default InfoSection
