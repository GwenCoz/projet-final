import { useState, createContext, useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Plante } from "./Plante";
import { useLocation, useParams } from "react-router-dom";


function Affichage_article() {

  let location = useLocation();
  console.log(location);


  // const { id } = useParams();

  // const [plante, setPlante] = useState<(Plante)>(undefined);
  // useEffect(() => {
  //   fetch(`http://localhost:52550/api/article/get/${id}`).then((data) => { data.json().then(setPlante) });


  // }, []);

  return (
    // plante && <>
    //   Coucou
    //   <h1>{plante.Nom}</h1>
    // </>
    <>test</>
  );
}

export default Affichage_article;