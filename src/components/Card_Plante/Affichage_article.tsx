import { useState, useEffect } from "react";

import { Plante } from "./Plante";
import { useParams } from "react-router-dom";

import { useCart } from "react-use-cart";
import { GetPlante } from "../Api_objects";
import "./Affichage_article.css"
function Affichage_article() {


  const { id } = useParams();

  const [plante, setPlante] = useState<(Plante)>(undefined);
  const [ptocarte,setptocarte] = useState (undefined);
  const {inCart,
    addItem,
    updateItemQuantity,
    getItem} = useCart();
  let Presencepanier =false;
  

  useEffect(() => {
    
    GetPlante(id).then((p) => { setPlante(p);setptocarte ({...p,price:Number(p.Prix),id:String(p.id)}) });
    if (ptocarte)
      {
        Presencepanier = inCart(ptocarte.id);
      }
      console.log (Presencepanier);


  }, []);

  return (

    plante && ptocarte &&
    
    
    
    <div id="Plante_Affichage">
      <h1 id="Plante_Nom">{plante.Nom}</h1>
      <div id="Plante_Image_Div">
          <img id="Plante_Image" src={plante.imgpath}/>
      </div>
      <div id="Plante_Info">
      

        <p id="Plante_Prix">Prix Unitaire : {plante.Prix}€</p>


        {
        Presencepanier &&
        
        <button id="Plante_Panier" onClick={() => addItem(ptocarte)}><img id="Card_Panier_Img"/>Panier</button>
        || 
        <div id="Plante_Quantite_Div">
        
        <button id="Plante_Quantite_Edit" onClick={() => updateItemQuantity(ptocarte.id,getItem(ptocarte.id).quantity+1)}>+</button>
        <p id="Plante_Quantite">{getItem(ptocarte.id).quantity}</p>
        <button id="Plante_Quantite_Edit" onClick={() => updateItemQuantity(ptocarte.id,getItem(ptocarte.id).quantity-1)}>-</button>

        </div>
        }
        
        
        
    
      </div>
      <p id="Plante_Description">{plante.Description}</p>
    </div>

  );
}

export default Affichage_article;