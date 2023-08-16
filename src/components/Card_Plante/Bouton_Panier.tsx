import { useCart } from "react-use-cart";

const Bouton_Panier = (props) =>



{
    const Presencepanier = props.Presencepanier;
    const ptocarte = props.ptocarte;
    const {

        updateItemQuantity,

        addItem,
        getItem,
  
      } = useCart();


    return (
        <>

    {!Presencepanier &&
    
        <button id="Card_Panier" onClick={() => addItem(ptocarte)}><img id="Card_Panier_Img" src={"/Images/logo_panier.png"} /></button>
        || 
        <>
        <button id="Card_Panier" onClick={() => updateItemQuantity(ptocarte.id,getItem(ptocarte.id).quantity+1)}>+</button>
        
        <button id="Card_Panier" onClick={() => updateItemQuantity(ptocarte.id,getItem(ptocarte.id).quantity-1)}>-</button>
        {getItem(ptocarte.id).quantity}

        </>
        
        }

</>

    )

};

export default Bouton_Panier;