import { useState, useEffect } from "react";
import { Plante } from "./Plante";
import Card_Plante from "./Card_Plante";

const Find_All = () => {
    const [plantes, setPlantes] = useState<(Plante[])>([]);
    useEffect(() => {
        fetch('http://localhost:52550/api/article/Get').then((res) => res.json()).then(data => setPlantes(data));
    }, [])
    return (
        <>
           <div >
                <ul className="list-group list-group-flush w-auto m-auto">
                    <p>{plantes.length}</p>
                    {plantes.length > 0 && plantes.map(plante => (
                        Card_Plante(plante)
                    ))}
                      
                </ul>


            </div>

         
        </>
    )
}

export default Find_All;