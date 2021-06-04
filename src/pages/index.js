import React, { useState } from 'react'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/Data';
import Footer from '../components/Footer'
import Herosection from '../components/Herosection';
import InfoSection from '../components/InfoSection';
import NavBar from '../components/Navbar';
import ProductSection from '../components/ProductSection';
import Sidebar from '../components/Sidebar';
// import { Helmet } from 'react-helmet';
import MetaTags from 'react-meta-tags';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <MetaTags>

                <meta charset="utf-8" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Παραγωγός ελληνικών σπόρων | Βιοκαλλιέργεια </title>
                <link rel="icon" href=".../public/favicon.ico" />
                <link rel="canonical" href="https://biokaliergia.gr" />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="description" content="Καλλιεργούμε την ελληνική γη και παράγουμε βιολογικά πιστοποιημένους σπόρους λούπινου, ηλιόσπορου, ελαιοκράμβης και σιταριού." />
                <meta name="keywords"
                    content="Βιοκαλλιέργεια, Βιολογική καλλιέργεια, Βιολογικά προϊόντα, Βιολογικα προιοντα, Βιολογικα, viologika, biologika, viologika proionta, biologika proionta,λουπινο,ηλιοσπορος,ελαιοκραμβη,προμηθευτής σπόρων, προμηθευτης λουπινου, 
                    προμηθευτης σιταριου, προμηθευτης ελαιοκραμβης" />
                <meta name="google-site-verification" content="91J0atbz_ncw-45jcl0lBLv-n5e036nUIIukh9oBu-E" />


                <meta property="og:site_name" content="Bioκαλλιέργεια" />
                <meta property="og:title" content="Παραγωγός σπόρων | Βιοκαλλιέργεια" />
                <meta property="og:description" content="Βρείτε τους σπόρους που ψάχνετε." />
                <meta property="og:image" content="https://biokaliergia.gr/biokaliergia.png" />
                <meta property="og:url" content="http://biokaliergia.gr/index.html" />
            </MetaTags>

            <Sidebar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <Herosection />
            <InfoSection {...homeObjOne} />

            <InfoSection {...homeObjTwo} />
            <ProductSection />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <Footer />

        </>
    )
}


export default Home;
