import { useState, useEffect } from "react";

import { Plante } from "./Plante";
import { useParams } from "react-router-dom";

import { useCart } from "react-use-cart";
import { Maplante } from "../Api_objects";


function Affichage_article() {


  const { id } = useParams();
  const { addItem} = useCart();
  const [plante, setPlante] = useState<(Plante)>(undefined);
  const [ptocarte,setptocarte] = useState (undefined);
  


  useEffect(() => {
    Maplante(id).then((p) => { setPlante(p);setptocarte ({...p,price:Number(p.Prix),id:String(plante.id)}) });
    console.log ()


  }, []);

  return (
    plante &&ptocarte &&<>
      Coucou, cette page est vraiment magnifique ! 
      <h1>{plante.Nom}</h1>
      {plante.Description}


      {ptocarte && <button className="btn btn-success" onClick={() => addItem(ptocarte)}>Panier</button>}

    </>

  );
}

export default Affichage_article;