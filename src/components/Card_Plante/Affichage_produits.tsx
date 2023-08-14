import React, { useEffect, useState } from 'react';
import { Plante } from "./Plante";
import Card_Plante from "./Card_Plante";
import { ListePlante } from "../Api_objects";
import "./Card_Plante.css"
import { Card } from 'react-bootstrap';




const Affichage_produits = () => {


    const [plantes, setPlantes] = useState<(Plante[])>([]);


    
    useEffect(() => {
        ListePlante().then ((data) => {setPlantes (data)});
        console.log ("chargement effectué");


    },[])

    return (
        <>
           <div id='Card_Container'>
                               { plantes && plantes.length > 0 && plantes.map(plante => (

                    <Card_Plante key={plante.id} plant={plante}/>
                    
                ))} 


            </div>

         
        </>
    )
}

export default Affichage_produits;