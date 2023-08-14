import React from "react";
import ReactDOM from "react-dom";
import { CartProvider, useCart } from "react-use-cart";

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
      <>
        <h1>Votre Panier contient {totalUniqueItems} plantes différentes </h1>
  
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.quantity} x {item.Nom} &mdash;
              <button className="btn btn-success"
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <button  className="btn btn-warning"
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button> 
              <button className="btn btn-danger"
               onClick={() => removeItem(item.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
        <button className="btn btn-danger"
               onClick={() => emptyCart()}>Vider le panier</button>

        <h3>Pour un total de {totalItems} items : {cartTotal} €</h3>
      </>
    );
  }