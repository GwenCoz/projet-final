import { useState, createContext, useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Plante } from "./Plante";
import { useLocation, useParams } from "react-router-dom";
import Maplante from "../Api_objects";


function Affichage_article() {

  let location = useLocation();
  console.log(location);


  const { id } = useParams();

  const [plante, setPlante] = useState<(Plante)>(undefined);
  useEffect(() => {
  Maplante(id).then((data) => { setPlante(data) });


  }, []);

  return (
    plante && <>
      Coucou
      <h1>{plante.Nom}</h1>
    </>

  );
}

export default Affichage_article;