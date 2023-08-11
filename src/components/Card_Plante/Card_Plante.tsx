import { Plante } from "./Plante";
import React, { useEffect, useState } from 'react';
import image from './../Images/Plantes/Alocasia_Azlanii.jpg';

function Card_Plante(p:Plante)
{
    return(
        <>
        <div id="Card_Fond">
            <div id="Card_Image_Div">
                <img id="Card_Image" src={process.env.PUBLIC_URL+p.imgpath}/>
            </div>
            <p id="Card_Name">{p.Nom}</p>

        </div>
        </>
    )
}

export default Card_Plante;