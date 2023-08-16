import { useState, useEffect } from "react";

import { Plante } from "./Plante";
import { useParams } from "react-router-dom";

import { useCart } from "react-use-cart";
import { Maplante } from "../Api_objects";
import Bouton_Panier from "./Bouton_Panier";


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
    
    Maplante(id).then((p) => { setPlante(p);setptocarte ({...p,price:Number(p.Prix),id:String(p.id)}) });
    if (ptocarte)
      {
        Presencepanier = inCart(ptocarte.id);
      }
      console.log (Presencepanier);


  }, []);

  return (

    plante && ptocarte &&
    
    <>

      Coucou, cette page est vraiment magnifique ! 
      <h1>{plante.Nom}</h1>
      {plante.Description}

    {
    Presencepanier &&
    
    <button id="Card_Panier" onClick={() => addItem(ptocarte)}><img id="Card_Panier_Img"/>Panier</button>
    || 
    <>
    <button id="Card_Panier" onClick={() => updateItemQuantity(ptocarte.id,getItem(ptocarte.id).quantity+1)}>+</button>
    
    <button id="Card_Panier" onClick={() => updateItemQuantity(ptocarte.id,getItem(ptocarte.id).quantity-1)}>-</button>

    </>
    }
    
    
    {getItem(ptocarte.id).quantity}


    </>

  );
}

export default Affichage_article;