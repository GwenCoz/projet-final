import { useState, useEffect } from "react";

import { Plante } from "./Plante";
import { useParams } from "react-router-dom";
import { Item, useCart } from "react-use-cart";
import { GetPlante } from "../Api_objects";
import "./Affichage_article.css"
function Affichage_article() {


  const { id } = useParams();

  const [plante, setPlante] = useState<(Plante)>(undefined);
  const [ptocarte,setptocarte] = useState (undefined);
  const [item,setitem] = useState<Item> ()
  const {inCart,
    addItem,
    getItem,
    removeItem,
    updateItemQuantity,
    
    } = useCart();



  useEffect (() =>
  {
    GetPlante(id).then((p) => { setPlante(p);setptocarte ({...p,price:Number(p.Prix),id:String(p.id)});setitem (getItem(String(p.id)))}).then (()=> console.log (item));


  }



  ,[addItem])

  

  return (

    plante && ptocarte &&
    
    
    <div id="Affichage">
      <div id="Plante_Affichage">
        <div id="Plante_Titre">
          <h1 id="Plante_Nom">{plante.Nom}</h1>
          <p id="Plante_Prix_Unitaire">Prix Unitaire : {plante.Prix}€</p>
          </div>
        <div id="Plante_Image_Div">
            <img id="Plante_Image" src={plante.imgpath}/>
        </div>
        <div id="Plante_Info">
          
          {plante.EnStock==0 &&
          <>
            <p id="no_stock">Victime de son succès</p>
          </>
          ||
          <>
          {!item &&

            <>
              <button id="Plante_Panier" onClick={() => addItem(ptocarte)}><img id="Panier_Img" src={"/Images/logo_panier.png"} /><p>Panier</p></button>
            </>
          ||
            <>
              <div id="Plante_Quantite_Div">
              
                <button id="Plante_Quantite_Edit" onClick={() => updateItemQuantity(item.id,item.quantity-1)}>-</button>
                <p id="Plante_Quantite">{item.quantity}</p>
                <button id="Plante_Quantite_Edit" onClick={() => updateItemQuantity(item.id,item.quantity+1)}>+</button>
                
                <button id="Plante_Quantite_Supp"
                  onClick={() => removeItem(item.id)}><img id="Article_Trash_Img" src={"/Images/logo_poubelle.png"} />
                </button>

              </div>
              <p id="Plante_Prix_Panier">Sous-Total : {item.itemTotal}€</p>
            </> 
          }
          </>
          }
        </div>
        <p id="Plante_Description">{plante.Description}</p>
      </div>
    </div>
  );
}

export default Affichage_article;