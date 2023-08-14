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

            <div id="Card_Fond">
                <div id="Card_Image_Div">
                    <img id="Card_Image" src={p.imgpath} />
                </div>
                <div className="card-body">
                    <p id="Card_Name">{p.Nom}</p>
                    <p id="Card_Name">{ptocarte.price}</p>


                </div>
                <a className="btn btn-success" href={`page_article/${p.id}`}>Description</a><br/>
                {!inCart(ptocarte.id) &&
                    <button className="btn btn-success" onClick={() => addItem(ptocarte)}>Panier</button>
                    
                 || <button disabled className="btn btn-success" onClick={() => addItem(ptocarte)}>Déjà ajouté</button>}
            </div>


    )
}

export default Card_Plante;