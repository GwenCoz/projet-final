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
      items,
      updateItemQuantity,
      removeItem,
      emptyCart,
      cartTotal,
      totalItems,
      

    } = useCart();
  
    if (isEmpty) return <p className="Fond"> Votre panier est vide</p>;

  
    return (
      <>
      <div id="Panier">
        <div id="Liste_Article">
          {items.map((item) => (

            <>
            <div id="Article" key={item.id}>
              <div id="Article_Panier">
                <div id="Article_Image_Div">
                  <img id="Article_Image" src={item.imgpath} onClick={()=>window.location.href =`page_article/${item.id}`}/>
                </div>
                <a id="Article_Lien" href={`page_article/${item.id}`}><h3 id="Article_Nom">{item.Nom}</h3></a>
                <p id="Article_Prix_Unitaire">{item.price}€ / Unité</p>
                <div id="Article_Quantité_Div">
                  <button id="Article_Quantité_Edit"
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  >-</button>
                  <p id="Article_Quantité">{item.quantity}</p>
                  <button id="Article_Quantité_Edit"
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  >+</button>

                  <button id="Article_Quantité_Supp"
                    onClick={() => removeItem(item.id)}><img id="Article_Trash_Img" src={"/Images/logo_poubelle.png"} />
                  </button>

                </div>
                <hr id="Separateur" />
                <p id="Article_Prix_Total">Sous-Total : {item.itemTotal}€</p>
              </div>
              <hr id="Separateur" />

            </div>
            </>
          ))}
        </div>
        <div id="Option_Panier">
          <div id="Prix_Panier">
            <p id="Total"> TOTAL :</p> <p id="Euro">{cartTotal} € </p>
          </div>

          <button className="Btn_Panier vert" onClick={()=>window.location.href = "commande"}><p className="antiqueWhite">Valider Commande</p></button>
          <br/>
          <button className="Btn_Panier rouge" onClick={() => emptyCart()}><p className="antiqueWhite"><img id="Article_Trash_Img" src={"/Images/logo_poubelle.png"} /> Vider panier <img id="Article_Trash_Img" src={"/Images/logo_poubelle.png"} /></p></button>
        </div>
      </div>
      </>
    );
  }