import { Plante } from "./Plante";
import React, { useState } from 'react';

function Card_Plante(p:Plante)
{
    return(
        <>
        <div id="Card_Fond">
            <div id="Card_Image_Div">
                <img id="Card_Image" src={require('../../Images/Plantes/'+p.imgpath)}/>
            </div>
            <p id="Card_Name">{p.Nom}</p>

        </div>
        </>
    )
}

export default Card_Plante;