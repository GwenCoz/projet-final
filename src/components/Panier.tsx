import { useCart } from "react-use-cart";
import "./panier.css";


function Panier(){

    return (

    <Cart />

);

}

export default Panier;

function Cart() {
    const {
      isEmpty,
      totalUniqueItems,
      items,
      updateItemQuantity,
      removeItem,
      emptyCart,
      cartTotal,
      totalItems,

    } = useCart();
  
    if (isEmpty) return <p>Votre panier est vide</p>;
  
    return (
      <div id="Panier">
        <h1 id="Panier_Contenu">Votre Panier contient {totalUniqueItems} plantes différentes </h1>
        <div id="Liste_Article">
        {items.map((item) => (

          <div id="Article" key={item.id} >
            <div id="Article_Panier">
              <div id="Article_Image_Div">
                <img id="Article_Image" src={item.imgpath}/>
              </div>
              <h3 id="Article_Nom">{item.Nom}</h3>
              <p id="Article_Prix_Unitaire">{item.price}€ / Unité</p>
              <div id="Article_Quantité_Div">
                <button id="Article_Quantité_Edit"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >-</button>
                <p id="Article_Quantité">{item.quantity}</p>
                <button  id="Article_Quantité_Edit"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >+</button> 

                <button id="Article_Quantité_Supp"
                onClick={() => removeItem(item.id)}><img id="Article_Trash_Img" src={"/Images/logo_poubelle.png"} />
                </button>

              </div>
              <p id="Article_Prix_Total">Sous-Total : {item.itemTotal}€</p>
            </div>
            <hr id="Separateur" />

          </div>
        ))}
        </div>
        <div id="Option_Panier">
        <button className="btn btn-danger"
               onClick={() => emptyCart()}>Vider le panier</button>

        <h3>Pour un total de {totalItems} items : {cartTotal} €</h3>
        </div>
      </div>
    );
  }