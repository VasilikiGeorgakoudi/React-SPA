import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarRouter,
    SideBtnWrap
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
                    <SidebarLink to="about" onClick={toggle}>Λίγα λόγια για μας</SidebarLink>
                    <SidebarLink to="location"onClick={toggle}>Που βρισκόμαστε</SidebarLink>
                    <SidebarLink to="product"onClick={toggle}>Προιόντα</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>Επικοινωνία</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRouter to="/signin"> Sign In</SidebarRouter>
                </SideBtnWrap>
                
            </SidebarWrapper>
        </SidebarContainer>
            
        </>
    )
}

export default Sidebar
