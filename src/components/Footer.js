import React from 'react'

import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa'
import {
    FooterContainer,PhoneNumber,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialIconLink,SocialMedia,SocialMediaWrap,SocialIcons,SocialLogo,WebsiteRights,Telephone,ContactInfo}
    from './footerElements'
import {animateScroll as scroll} from 'react-scroll'
const toggleHome = () =>{
    scroll.scrollToTop();
}
function Footer() {
    return (
        <>
        <FooterContainer>
            <FooterWrap>
                
                
                        
                            <SocialLogo to='/' onClick={toggleHome}>
                                Biotropos
                            </SocialLogo>
                            <WebsiteRights>Biotropos © {new Date().getFullYear()} all rights Reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" target='_blank'aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href='mailto:bio-tropos.gr@gmail.com'>
                                    <FaTelegram/>
                                </SocialIconLink>
                            </SocialIcons>

                        
                        
                    
                    <ContactInfo>
                            <Telephone>Τηλέφωνο επικοινωνίας</Telephone>
                            <PhoneNumber href='tel:+306977085619'> 6977085619</PhoneNumber>
                    </ContactInfo>
            </FooterWrap>
        </FooterContainer>
            
        </>
    )
}

export default Footer
