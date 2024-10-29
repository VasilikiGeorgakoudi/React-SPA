import React from 'react'
import icon1 from './../images/pexels-tim-97778.jpg'
import icon2 from './../images/pexels-pixabay-265216.jpg'
import icon3 from './../images/pexels-pixabay-273838.jpg'
import icon4 from './../images/oregano_fresh.png'
import {ProductContainer,ProductH1,ProductP,ProductWrapper,ProductCard,Img,ProductTitle,ProductDescription} from './productElements'

function ProductSection() {
    return (
        <>
        <ProductContainer id="product">
            <ProductH1>Τo προϊόν μας</ProductH1>
            <ProductP>Προϊόν βιολογικού σταδίου με όλες τις πιστοποιήσεις.</ProductP>
            <ProductWrapper>
                <ProductCard>
                    
                        <Img src={icon4} alt="ρίγανη"/> 
                      <ProductTitle>Ρίγανη</ProductTitle>
                      <ProductDescription>Η ρίγανη – επιστημονικά ορίγανον – είναι αρωματικό ποώδες, πολυετές και θαμνώδες φυτό της Μεσογείου και της Κεντρικής Ασίας. Πήρε το όνομα της από το ελληνικό «όρος» και «γάνος» που σημαίνει λαμπρότητα, δηλαδή λαμπερό βουνό ή αλλιώς το φυτό που έδινε ομορφιά στο βουνό. Είναι βότανο εξαιρετικής ποιότητας.
                      <br/> <br/> <b>Ιδιότητες</b> <br/>
                      Η ρίγανη έχει αντισπασμωδικές, αντιφλεγμονώδεις, αντιβακτηριδιακές ιδιότητες, που οφείλονται στη θυμόλη και στη καρβακρόλη. Τα ευεργετικά αποτελέσματα εμφανίζονται στο αναπνευστικό, στο γαστρεντερικό και στο ουροποιητικό σύστημα. Είναι αντιβηχικό και αποχρεμπτικό- βοηθάει σημαντικά στη θεραπεία των πεπτικών και εντερικών διαταραχών. Η αντιμικροβιακή και αντιμυκητιακή δράση, την καθιστούν βασικό συστατικό για ήπια αντιβιοτικά στην κτηνοτροφία. Τα τελευταία χρόνια, το αιθέριο έλαιο, χρησιμοποιείται και στην φαρμακευτική, ως συμπλήρωμα διατροφής, ή ως ενισχυτικό του ανοσοποιητικού συστήματος.
                      <br/>  <br/><b>Χρήσεις</b>  <br/>
                     Η αποξηραμένη ρίγανη χρησιμοποιείται σαν αρωματικό στη μαγειρική ή ως ρόφημα. Στην ελληνική κουζίνα, η ρίγανη καταλαμβάνει περίοπτη θέση, αφού χρησιμοποιείται πάρα πολύ και κυρίως σε ψητά, κρεατικά, και σε σαλάτες. Έχει επεκταθεί η χρήση της από τις βιομηχανίες παραγωγής τροφίμων, οι οποίες χρησιμοποιούν τη γεύση της ρίγανης στα προϊόντα τους. Το αιθέριο έλαιο χρησιμοποιείται επίσης στην αρωματοθεραπεία και στην φαρμακοβιομηχανία. Επίσης, το αιθέριο έλαιο χρησιμοποιείται στα σιτηρέσια των χοίρων και των πουλερικών βιολογικής εκτροφής, αντικαθιστώντας τα επιβλαβή αντιβιοτικά.
                      </ProductDescription>
                 </ProductCard>
                    {/* <ProductCard>
                    <Img src={icon1} alt="ελαιοκραμβη"/> 
                      <ProductTitle>Ελαιοκράμβη</ProductTitle>
                      <ProductDescription>Γερμανικός σπόρος με υψηλά χαρακτηριστικά καθαρότητας και μεγάλης περιεκτικότητας σε λάδι.</ProductDescription>
                      </ProductCard>
                    <ProductCard>
                    <Img src={icon3} alt="λουπινο"/> 
                      <ProductTitle>Λούπινο</ProductTitle>
                      <ProductDescription>Ψυχανθές κτηνοτροφικό με υψηλή περιεκτικότητα πρωτεΐνης.</ProductDescription>
                    </ProductCard>
                    <ProductCard>
                    <Img src={icon2} alt="μαλακο σιταρι"/> 
                      <ProductTitle>Μαλακό σιτάρι</ProductTitle>
                      <ProductDescription> Ειδικό για την παραγωγή ψωμιού. Με υψηλή περιεκτικότητα σε πρωτεϊνη και γλουτένη.</ProductDescription>
                     
                    </ProductCard> */}
                    
              
            </ProductWrapper>
        </ProductContainer>
            
        </>
    )
}

export default ProductSection
