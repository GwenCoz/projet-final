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
            Expédition à l'Adresse {choixadresse.Nom_Adresse} :

            <ul>
                <li >{choixadresse.Rue}</li>
                <li>{choixadresse.Complement}</li>
                <li>{choixadresse.Ville}</li>
                <li>{choixadresse.Departement}</li>
                <li>{choixadresse.Pays}</li>

            </ul>

            Choix de la livraison :

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

                <button className="btn btn-default" type="submit">
                    Submit
                </button>
            </form>

            {coutlivraison && choixlivraison &&
                <>
                    Votre commande :

                    <ul>
                        {items.map((item) => (
                            <li key={item.id}>
                                {item.quantity} x {item.Nom} = {item.quantity * item.price} €

                            </li>
                        ))}
                    </ul>

                    total hors taxe : {(cartTotal * .80).toFixed(2)} € <br />
                    total TTC : {cartTotal} € <br />
                    frais de livraison : {choixlivraison} : {coutlivraison}€ <br />
                    A payer: {cartTotal + coutlivraison}<br />


                    Choix du paiement : {paiement} <br />

                    <button onClick={HandleSubmit}>Confirmer</button>

                </>
            }

        </>
    );
}

export default Recapitulatif