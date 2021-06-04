import styled from 'styled-components'

export const ProductContainer = styled.div
`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

padding:90px;


background: #010606;
@media screen and (max-width:1000px)
{
    padding:40px;
}
@media screen and (max-width:768px){
    
    
    
}
@media screen and (max-width:480px){
  
    
    
}
@media screen and (max-width:380px){
   
     
     
 }
`
export const ProductH1 = styled.h1`
    color:#fff;
    font-size:2.5rem;
    margin-bottom:14px;

`
export const ProductP = styled.p
`
color:#fff;
font-size:1.3rem;
margin-bottom:40px;
text-align:center;
background-color:#01bf71;
max-width:920px;
padding:6px;
`

export const ProductWrapper = styled.div 
`
max-width:1000px;
margin:0 auto;
display:grid;
grid-template-columns:1fr 1fr 1fr;
grid-gap:16px;
align-items:center;


@media screen and (max-width:1000px)
{
    grid-template-columns:1fr 1fr;
    
}
@media screen and (max-width:768px)
{
    grid-template-columns:1fr;
    margin:0 auto;
    max-width:400px;
}


`
export const ProductCard = styled.div
`
background:#fff;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;

height:330px;
padding:30px;
box-shadow:0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;                                       

&:hover{
    transform:scale(1.02);
    transition:all 0.2s ease-in-out;
    cursor:pointer;

}
@media screen and (max-width:400px){
    height:360px;
}
`
export const Img = styled.img
`
height:160px;
width:160px;
margin-bottom:10px;

`
export const ProductTitle = styled.h2
`
font-size:1rem;
margin-bottom:10px;

`
export const ProductDescription = styled.p
`
font-size:1rem;
text-align:center;`


