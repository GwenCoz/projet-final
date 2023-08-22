import { useState, useEffect } from "react";

import { Plante } from "./Plante";
import { useParams } from "react-router-dom";

import { Item, useCart } from "react-use-cart";
import { GetPlante } from "../Api_objects";



function Affichage_article() {


  const { id } = useParams();

  const [plante, setPlante] = useState<(Plante)>(undefined);
  const [ptocarte,setptocarte] = useState (undefined);
  const [item,setitem] = useState<Item> ()
  const {inCart,
    addItem,
    getItem,
    updateItemQuantity,
    
    } = useCart();



  useEffect (() =>
  {
    GetPlante(id).then((p) => { setPlante(p);setptocarte ({...p,price:Number(p.Prix),id:String(p.id)});setitem (getItem(String(p.id)))}).then (()=> console.log (item));


  }



  ,[addItem])

  

  return (

    plante && ptocarte &&
    
    <>

      Coucou, cette page est vraiment magnifique ! 
      <h1>{plante.Nom}</h1>
      {plante.Description}


    {!item &&
    <button id="Card_Panier" onClick={() => addItem(ptocarte)}><img id="Card_Panier_Img" src={"/Images/logo_panier.png"} /></button>
    
}
  {item &&
    <>
    modifier la quantité
    <button id="Card_Panier" onClick={() => updateItemQuantity(item.id,item.quantity+1)}>Ajouter</button>
    <button id="Card_Panier" onClick={() => updateItemQuantity(item.id,item.quantity-1)}>Retirer</button>

    {item.quantity}
    </>
    }

    </>

  );
}

export default Affichage_article;