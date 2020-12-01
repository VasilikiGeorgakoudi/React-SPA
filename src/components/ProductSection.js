import React from 'react'
import icon1 from './../images/pexels-tim-97778.jpg'
import icon2 from './../images/pexels-pixabay-265216.jpg'
import icon3 from './../images/pexels-pixabay-273838.jpg'
import icon4 from './../images/pexels-skitterphoto-2602.jpg'
import {ProductContainer,ProductH1,ProductP,ProductWrapper,ProductCard,Img,ProductTitle,ProductDescription} from './productElements'

function ProductSection() {
    return (
        <>
        <ProductContainer id="product">
            <ProductH1>Τα προϊόντα μας</ProductH1>
            <ProductP>Προϊόντα βιολογικού σταδίου με όλες τις πιστοποιήσεις.</ProductP>
            <ProductWrapper>
                <ProductCard>
                    
                        <Img src={icon4}/> 
                      <ProductTitle>Ηλιόσπορους</ProductTitle>
                      <ProductDescription>Ελάχιστες ξένες ύλες και μέγιστη απόδοση σε λάδι.</ProductDescription>
                 </ProductCard>
                    <ProductCard>
                    <Img src={icon1}/> 
                      <ProductTitle>Ελεοκράμβη</ProductTitle>
                      <ProductDescription>Γερμανικός σπόρος με υψηλά χαρακτηριστικά καθαρότητας και μεγάλης περιεκτικότητας σε λάδι</ProductDescription>
                      </ProductCard>
                    <ProductCard>
                    <Img src={icon3}/> 
                      <ProductTitle>Λούπινο</ProductTitle>
                      <ProductDescription>Ψυχανθές κτηνοτροφικό με υψηλή περιεκτικότητα πρωτεΐνης</ProductDescription>
                    </ProductCard>
                    <ProductCard>
                    <Img src={icon2}/> 
                      <ProductTitle>Μαλακό σιτάρι</ProductTitle>
                      <ProductDescription> Ειδικό για την παραγωγή ψωμιού. Με υψηλή περιεκτικότητα σε πρωτεϊνη και γλουτένη)</ProductDescription>
                     
                    </ProductCard>
                    
              
            </ProductWrapper>
        </ProductContainer>
            
        </>
    )
}

export default ProductSection
