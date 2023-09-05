import Button from 'react-bootstrap/Button';
import React from 'react';

function Body(){
    return (
        <div style={{"display":"flex", "flexWrap": "nowrap", "justifyContent": "space-evenly", "alignContent": "stretch"
    }}>
        <div className= "ImageBody" style={{backgroundImage:"url(./Images/Caroussel-1.jpg)" }}>
    
            <p> Découvrez notre gamme de <strong> Plantes Intérieurs</strong> adaptées à tous les types d'intérieur et tous les budgets </p>
            
            <a  href="/nos_plantes_interieur">
             <button type="button" className="button btn btn-success"> Plantes d'interieur</button> 
             </a>
         
        </div>
        <div className= "ImageBody" style={{backgroundImage:"url(./Images/Caroussel-3.jpg)"}}>
    
            <p> Découvrez notre selection de <strong> Plantes Extérieures</strong> pour embellir votre jardin et en faire un cadre agréable pour profiter de l'été. </p>
            <a  href="/nos_plantes_exterieur" ><button type="button" className="button btn btn-success">Plantes Extérieures </button></a>
        </div>

       
        

        


       
        
      
        
        </div>   
      
    );
}
export default Body;