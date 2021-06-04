import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FooterContainer = styled.footer
`
background-color:#101522;`

export const FooterWrap = styled.div
`
padding:48px 5px;
display:flex;
flex-direction:row;

justify-content:center;;
align-items:center;
max-width:1100px;
margin:0 auto;
@media screen and (max-width:820px){
    flex-direction:column;
}`

export const FooterLinksContainer = styled.div
`
display:flex;
justify-content:center;
@media screen and (max-width:820px){
    padding-top:32px;
}`

export const FooterLinksWrapper = styled.div 
`
display:flex;
flex-wrap:wrap;
justify-content:center;

@media screen and (max-width:480px){
    flex-direction:column;
}
`
export const FooterLinkItems = styled.div 
`
display:flex;
flex-direction:column;
align-items:left;
margin:16px;
text-align:left;
width:160px;
box-sizing:border-box;
color:#fff;
@media screen and (max-width:420px){
    margin:0;
    padding:10px;
    width:100%;
}`
export const FooterLinkTitle = styled.h1`
font-size:14px;
margin-bottom:16px;
padding:4px;
border-bottom:2px solid #01bf71;;

`
export const FooterLink = styled(Link)
`
color:#fff;
text-decoration:none;
mergin-bottom:0.5rem;
font-size:14px;
&:hover{
    color:#01bf71;
    transition:0.3s ease-out;
}
`
export const SocialMedia = styled.section
`
max-width:1000px;
width:100%;`
export const SocialMediaWrap = styled.div
`
display:flex;
justify-content:center;
align-items:center;
max-width:950px;
margin:40px auto 0 auto;

@media screen and (max-width:820px){
    flex-direction:column;
}
`
export const SocialLogo = styled(Link)
`
color:#fff;
justify-self:start;
cursor:pointer;
text-decoration:none;
font-size:1.5rem;
flex-basis:10%;
margin-left:10px;

font-family: 'Alegreya Sans', sans-serif;
font-weight:bold;
&:hover{
    color:#01bf71;
    transition:all 0.5s ease-in-out;

}
@media screen and (max-width:820px){
    margin-bottom:16px;
    margin-left:0px;
}`
export const WebsiteRights = styled.small
`
flex-basis:30%;
color:#fff;

text-align:center;
@media screen and (max-width:820px){
    margin-bottom:16px;
}
`


export const SocialIcons = styled.div `
flex-basis:10%;
text-align:center;
width:240px;

@media screen and (max-width:820px){
    margin-bottom:16px;
}
`

export const ContactInfo = styled.div
`
display:flex;
flex-basis:60%;
flex-direcrion:row;
justify-content:center;
align-items:center;
@media screen and (max-width:820px){
    flex-direction:column;
    
    margin-bottom:16px;
}`
export const SocialIconLink = styled.a 
`
color: #fff;
margin-left:10px;
font-size:24px;

`
export const Telephone = styled.p`
color:#fff;
flex-basis:40%;
font-size:1.1rem;


`
export const PhoneNumber = styled.a`
color:#fff;
font-size:1.1rem;
flex-basis:5%;
text-align:center;
text-decoration:none;
&:hover{
    color:#01bf71;
    transition:all 0.5s ease-in-out;

}
`

