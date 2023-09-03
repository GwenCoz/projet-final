import { useEffect, useState } from 'react';
import { Plante } from "./Plante";
import Card_Plante from "./Card_Plante";
import { ListePlante } from "../Api_objects";
import "./Card_Plante.css"





const Affichage_produits = () => {


    const [plantes, setPlantes] = useState<(Plante[])>([]);

   
    useEffect(() => {
        ListePlante().then ((data) => {setPlantes (data)});


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