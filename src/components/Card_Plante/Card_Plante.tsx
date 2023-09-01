import { useState } from "react";

import "./Card_Plante.css"

import {useCart } from "react-use-cart";
import Bouton_Panier from "./Bouton_Panier";


function Card_Plante(props) {
    const p = props.plant;
    let Presencepanier = false;


    


    const [ptocarte] = useState({...p, price:Number(p.Prix), id:String(p.id)});

    const {inCart} = useCart();
    Presencepanier = inCart(ptocarte.id);
    


    


    return (

            <div id="Card_Fond" >

                <div id="Card_Btn">

                    <Bouton_Panier Presencepanier={Presencepanier} ptocarte={ptocarte}/>
                    
                    <p id="Card_Prix">{ptocarte.price} €</p>
                </div>


                <a href={`page_article/${p.id}`}>
                <div id="Card_Image_Div">
                    <img id="Card_Image" src={p.imgpath}/>
                </div>
                
                <p id="Card_Name">{p.Nom}</p>
                </a>
                                
                
                
                
            </div>
            


    )
}

export default Card_Plante;