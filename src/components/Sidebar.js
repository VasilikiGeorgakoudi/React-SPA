import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    
} from './sidebarElements'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle} offset={-80}>Λίγα λόγια για μας</SidebarLink>
                    <SidebarLink to="location"onClick={toggle} offset={-80}>Που βρισκόμαστε</SidebarLink>
                    <SidebarLink to="product"onClick={toggle} offset={-80}>Προιόντα</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle} >Επικοινωνία</SidebarLink>
                </SidebarMenu>
               
                
            </SidebarWrapper>
        </SidebarContainer>
            
        </>
    )
}

export default Sidebar
