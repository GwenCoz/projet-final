import { Plante } from "./Plante";
import { useEffect, useState } from "react";

function Card_Plante(p:Plante)
{
    const [plante, setplante] = useState(p);
    useEffect(()=>{
        setplante(p)
    })

    return(
        <>

        <div id="Card_Fond">
            <div id="Card_Image_Div">
                <img id="Card_Image" src={require('../../Images/Plantes/'+plante.imgpath)}/>
            </div>
            <p id="Card_Name">{plante.Nom}</p>

        </div>
        </>
    )
}

export default Card_Plante;