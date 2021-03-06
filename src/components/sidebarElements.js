import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkScroll} from 'react-scroll'
import {Link as LinkRouter} from 'react-router-dom'

export const SidebarContainer = styled.aside`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#0d0d0d;
display:grid;
align-items:center;

top:0;
left:0;
transition:0.5s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
color:#fff;`

export const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    cursor:pointer;
    background:transparent;
    font-size:2rem;
    outline:none;
`
export const SidebarWrapper = styled.div`
color:#fff;
`
export const SidebarMenu = styled.ul`
display:grid;
grid-template-colums:1fr;
grid-template-rows:repeat(6,80px);
text-align:center;
padding-top:30px;

@media screen and (max-width:480px)
{
    grid-template-rows:repeat(5,80px);
    padding-top:50px;
}

`


export const  SidebarLink = styled(LinkScroll)`
display:flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
text-decoration:none;
list-style:none;
transition:0.2s ease-in-out;
text-decoration:none;
color:#fff;
cursor:pointer;

&:hover{
    color:#01bf71;
    transition:0.2s ease-in-out;

}`
export const SideBtnWrap = styled.div
`
display:flex;
justify-content:center;

`
export const SidebarRouter = styled(LinkRouter)`
border-radius:50px;
background:#01bf71;
white-space:nowrap;
padding:16px 64px;
color:#010606;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition: all 0.2s ease-in-out;
    background:#fff;
    color:#010606;
}
`
