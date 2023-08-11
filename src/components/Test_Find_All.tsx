
import { useState, useEffect } from "react";
import { Plante } from "./Card_Plante/Plante";
import Card_Plante from "./Card_Plante/Card_Plante"

const Find_All = () => {
    const [plantes, setPlantes] = useState<(Plante[])>([]);

    useEffect(() => {
        ListePlante() .then ((data) => {setPlantes (data)});
    }, [])

    return (
        <>
           <div >

                <p>{plantes.length}</p>
                {plantes.length > 0 && plantes.map(plante => (
                    Card_Plante(plante)
                ))}

            </div>

         
        </>
    )
}



export default Find_All;