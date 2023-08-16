import { useState } from "react";

import "./Card_Plante.css"

import {useCart } from "react-use-cart";


function Card_Plante(props) {
    const p = props.plant;
    let Presencepanier = false;


    


    const [ptocarte] = useState({...p, price:Number(p.Prix), id:String(p.id)});

    const {inCart,
        addItem,
        updateItemQuantity,
        getItem} = useCart();
    Presencepanier = inCart(ptocarte.id);


    


    return (

            <div id="Card_Fond" >

                <div id="Card_Btn">

                {!Presencepanier &&
    
    <button id="Card_Panier" onClick={() => addItem(ptocarte)}><img id="Card_Panier_Img" src={"/Images/logo_panier.png"} /></button>
    || 
    <>
    <button id="Card_Panier" onClick={() => updateItemQuantity(ptocarte.id,getItem(ptocarte.id).quantity+1)}>+</button>
    
    <button id="Card_Panier" onClick={() => updateItemQuantity(ptocarte.id,getItem(ptocarte.id).quantity-1)}>-</button>
    {getItem(ptocarte.id).quantity}

    </>
    
    }

                    
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