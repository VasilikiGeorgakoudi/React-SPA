import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav`
  
  background:${({scrollNav}) => (scrollNav ? '#000' : 'rgba(0,0,0,0.4)')};
  height:80px;
  margin-top:-80px;
  dispaly:flex;
  justify-content:center;
  align-items:center;
  font-size:1rem;
  position:sticky;
  top:0;
  z-index:10;

  @media screen and (max-width:960px){
      transition:0.8 all ease;
  }
`;
export const NavbarContainer = styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:1;
padding:0 24px;
max-width:1100px;
`;
export const NavLogo = styled(LinkRouter)`
  color:#fff;
  justify-self:flex-start;
  cursor:pointer;
  font-size:1.6rem;
  display:flex;
  align-items:center;
  margin-left:24px;
  font-weight: bold;
  text-decoration:none;
`;
export const MobileIcon = styled.div`
 display:none;
@media screen and (max-width:768px){
    display:block;
   
    position:absolute;
    top:0px;
    right:0;
    transform:translate(-100%,60%);
    font-size:1.8rem;
    cursor:pointer;

    color:#fff;
}

`
export const NavMenu = styled.ul`
    
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;
    margin: 0 auto;

    @media screen and (max-width:768px){
        display:none;
    }
    

`
export const NavItem = styled.li`
    height:80px;
`

export const NavLinks = styled(LinkScroll)`

color:#fff;
display:flex;
align-items:center;
text-dexoration:none;
padding:0 1rem;
height:100%;
cursor:pointer;

&.active{
    border-bottom:3px solid #01bf71;
}
`
export const NavBtn = styled.nav`
display:flex;
align-items:center;
margin-right:5px;



@media screen and (max-width:768px){
    display:none;

}

`
export const NavBtnLink = styled(LinkRouter)`
border-radius:50px;
background:#01bf71;
color:#010606;
white-space:nowrap;
font-size:1.2rem;

text-decoration:none;
padding:10px 22px;
outline:none;
border:none;
transition:all 0.2s ease-in-out;

cursor:pointer;

&:hover{
    transition:all 0.2s ease-in-out;
    backgroud:#fff;
    color:#010606;

}






`



