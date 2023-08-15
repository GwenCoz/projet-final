import { useState, createContext, useContext, useEffect } from "react";
import { Plante } from "./Plante";
import "./Card_Plante.css"

import {useCart } from "react-use-cart";


function Card_Plante(props) {
    const p = props.plant;

    

    //let ptocarte = {...p, price:Number(p.Prix), id:String(p.id)};
    const [ptocarte] = useState({...p, price:Number(p.Prix), id:String(p.id)});

    const { addItem,inCart} = useCart();


    


    return (

            <div id="Card_Fond" >

                <div id="Card_Btn">
                    {!inCart(ptocarte.id) &&
                    <button id="Card_Panier" onClick={() => addItem(ptocarte)}><img id="Card_Panier_Img" src={process.env.PUBLIC_URL +"../Images/logo_panier.png"} /></button>
                    || <button disabled id="Card_Panier" onClick={() => addItem(ptocarte)}>Déjà ajouté</button>}
                    
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