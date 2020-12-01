import React from 'react'
import {Button, ButtonH} from './ButtonElement'
import {
    InfoContainer,InfoWrapper,InfoRow,
    Column1, Column2, TextWrapper,
    TopLine,Heading,Subtitle,
    BtnWrap,ImgWrap,Img

} from './InfoElements'

const infoSection = ({lightBg,id
    ,imgStart,topLine,lightText,buttonLabel,img,headline,description,alt,darkText
,primary,dark,dark2,btnid,siteBtn,href,big}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id} >
            <InfoWrapper big={big}>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>
                            {topLine}
                        </TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}> {description}</Subtitle>
                        <BtnWrap>
                            <Button to={btnid}
                           
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1:0}
                            siteBtn={siteBtn ? 1:0}>{buttonLabel}</Button>
                            <ButtonH href={href}
                            target="_blank"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1:0}
                            siteBtn={siteBtn ? 1:0}>{buttonLabel}</ButtonH>
                        </BtnWrap>

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

export default infoSection

