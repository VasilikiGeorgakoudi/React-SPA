import React, {useState, useEffect} from 'react' 
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {
    Nav, 
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavLinks,
    NavItem, 
    
} from './navbarElements'
import {animateScroll as scroll} from 'react-scroll'

const NavBar = ({toggle}) =>
{ 
    const [scrollNav, setScrollNav] = useState(false)
     
    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',changeNav)
       
    },[])
    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
         <Nav scrollNav={scrollNav}>
             <NavbarContainer>
                 <NavLogo to="/" onClick={toggleHome}>Biotropos</NavLogo>
                 <MobileIcon onClick={toggle}>
                     <FaBars/>
                 </MobileIcon>
                 <NavMenu>
                     <NavItem>
                         <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80} activeClass="active">Παραγογός</NavLinks>
                     </NavItem>
                     
                     <NavItem>
                         <NavLinks to="location" smooth={true} duration={500} spy={true} exact="true" offset={-80} activeClass="active">Τοποθεσία</NavLinks>
                     </NavItem>
                     <NavItem>
                         <NavLinks to="product" smooth={true} duration={500} spy={true} exact="true" offset={-80} activeClass="active">Προϊόντα</NavLinks>
                     </NavItem>
                     
                     <NavItem>
                         <NavLinks to="contact" smooth={true} duration={500} spy={true} exact="true" offset={-80} activeClass="active">Επικοινωνία</NavLinks>
                     </NavItem>

                 </NavMenu>
                 
             </NavbarContainer>
         </Nav>
         </IconContext.Provider>


        </>
    )
};

export default NavBar;
