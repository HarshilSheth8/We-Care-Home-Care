import React from 'react'
import { Button } from '../ButtonElements.component'
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Column2,
    Img,
    ImgWrap,}
from './InfoElements'


const InfoSection = ({ lightBg, id, imgStart, lightText, darkText, topLine, headLine, description, buttonLabel, img,  alt, primary, dark, dark2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}  >
                <InfoWrapper> 
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine lightText={lightText}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap><Button to='home' 
                                    smoooth={true}
                                    duration={500}
                                    spy={true}
                                    excact={true}
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0 }
                                    dar2={dark2 ? 1 : 0 }
                                >{buttonLabel}</Button></BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
