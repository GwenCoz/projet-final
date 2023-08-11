import React, { useEffect, useState } from 'react';
import { Plante } from "./Plante";
import Card_Plante from "./Card_Plante";
import { ListePlante } from "../Test_plante";
import "./Card_Plante.css"



const Find_All = () => {

    const [plantes, setPlantes] = useState<(Plante[])>([]);
    useEffect(() => {
        ListePlante().then ((data) => {setPlantes (data)});


    }, [])
   
    // useEffect(() => {
    //     fetch('http://localhost:52550/api/article/Get').then((res) => res.json()).then(data => setPlantes(data));
    // }, [])
    return (
        <>
           <div id='Card_Container'>
                               { plantes && plantes.length > 0 && plantes.map(plante => (
                    Card_Plante(plante)
                    
                ))} 


            </div>

         
        </>
    )
}

export default Find_All;