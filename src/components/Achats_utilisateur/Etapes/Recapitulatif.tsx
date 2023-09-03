import { useContext, useState } from "react";
import { useCart } from "react-use-cart";
import { AdresseContext, PaymentContext, StepContext, UserContext } from "../Commander";

function Recapitulatif() {

    const { paiement, setpaiement } = useContext(PaymentContext);
    const { etape, setetape } = useContext(StepContext);
    const [utilisateur, setutilisateur] = useContext(UserContext);
    const [choixadresse, setchoixadresse] = useContext(AdresseContext);
    const [choixlivraison, setchoixlivraison] = useState("")
    const [coutlivraison, setcoutlivraison] = useState(0)

    const {
        items,
        cartTotal,
    } = useCart();


    function HandleSubmit(event) {
        event.preventDefault();
        

        const articles = items.map(({ id,quantity }) => ({"id_article":id,"quantite":quantity }));


        var commande = {
            "commandes_articles":articles
            ,
            "id_utilisateur": utilisateur.id,
            "date": null,
            "Status": "Commandé"
        }

        console.log (JSON.stringify(commande))

        const test = fetch('http://localhost:52550/api/commande/post',

            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(commande)
            })

        setetape(4)
        





    }

    function formSubmit(event) {

        event.preventDefault();
        setcoutlivraison(choixlivraison == "Livraison économique" ? 10 : choixlivraison == "Livraison prioritaire" ? 20 : 5)

    }

    return (

        <>
            <h6 className="Fond" >Expédition à l'Adresse {choixadresse.Nom_Adresse} : </h6>

            <table className="green" id="Recap_Adress">
                <tr><td>Rue</td><td>{choixadresse.Rue}</td></tr>
                {choixadresse.Complement != null &&
                    <tr><td>Complément</td><td>{choixadresse.Complement}</td></tr>
                }
                <tr><td>Code Postal</td><td>{choixadresse.Code_Postal}</td></tr>
                <tr><td>Ville</td><td>{choixadresse.Ville}</td></tr>
                <tr><td>Pays</td><td>{choixadresse.Pays.toUpperCase()}</td></tr>
            </table>
            <hr style={{"width": "30%","margin" :" 10px auto"}}/>
            <h6 className="Fond ">Choix de la livraison :</h6>
            

            <form onSubmit={formSubmit}>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="Livraison économique"
                            onChange={(e) => setchoixlivraison(e.target.value)}
                            name="livraison"
                            required
                        />
                        Livraison économique
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="Livraison prioritaire"
                            onChange={(e) => setchoixlivraison(e.target.value)}
                            name="livraison"
                        />
                        Livraison prioritaire
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="Relais colis"
                            onChange={(e) => setchoixlivraison(e.target.value)}
                            name="livraison"
                        />
                        Relais colis
                    </label>
                </div>

                <button id="btn_submit" type="submit">
                    Valider
                </button>
            </form>
            <hr style={{"width": "30%","margin" :" 10px auto"}}/>
            {coutlivraison && choixlivraison &&
                <>
                    <h6 className="Fond "> Votre commande : </h6>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id}>
                                {item.quantity} x {item.Nom} = {item.quantity * item.price} €

                            </li>
                        ))}
                    </ul>
                    <p style={{"textAlign":"left", "width": "275px", "margin": "auto"}}>
                        Total hors taxe : {(cartTotal * .80).toFixed(2)} € <br />
                        Total TTC : {cartTotal} € <br />
                        <hr/>
                        Frais de livraison : {choixlivraison} : {coutlivraison} € <br />
                        <hr />
                        A payer: {cartTotal + coutlivraison} €<br />
                        Choix du paiement : {paiement} <br />
                    </p>
                    <button  id="btn_submit" onClick={HandleSubmit}>Confirmer</button>
                </>
                ||
                <></>
            }

        </>
    );
}

export default Recapitulatif