import { useState, createContext, useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Plante } from "./Plante";
import { useLocation, useParams } from "react-router-dom";
import Maplante from "../Api_objects";
import { useCart } from "react-use-cart";


function Affichage_article() {


  const { id } = useParams();
  var ptocarte;
  const { addItem} = useCart();
  const [plante, setPlante] = useState<(Plante)>(undefined);
  
  


  useEffect(() => {
    Maplante(id).then((p) => { setPlante(p) });

    if (plante)
    {
      ptocarte = {...plante,...{price:Number(plante.Prix),id:String(plante.id)}};
      
    }




  }, []);

  return (
    plante &&<>
      Coucou, cette page est vraiment magnifique ! 
      <h1>{plante.Nom}</h1>
      {plante.Description}


      <button className="btn btn-success" onClick={() => addItem(ptocarte)}>Panier</button>

    </>

  );
}

export default Affichage_article;