import React, {useState} from 'react'
import { homeObjOne,homeObjTwo,homeObjThree,homeObjFour } from '../components/Data';
import Footer from '../components/Footer'
import Herosection from '../components/Herosection';
import InfoSection from '../components/InfoSection';
import NavBar from '../components/Navbar';
import ProductSection from '../components/ProductSection';
import Sidebar from '../components/Sidebar';
const Home= () => {
    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle} />
        <Herosection />
        <InfoSection {...homeObjOne}/>
        
        <InfoSection {...homeObjTwo}/>
        <ProductSection />
        <InfoSection {...homeObjThree}/>
        <InfoSection {...homeObjFour}/>
        <Footer/>

        </>
    )
}

export default Home;
