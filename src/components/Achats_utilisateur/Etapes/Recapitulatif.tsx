import { useContext, useState } from "react";
import { useCart } from "react-use-cart";
import { AdresseContext, ChoixlivraisonContext, PaymentContext, StepContext, UserContext } from "../Commander";

function Recapitulatif() {

    const { paiement, setpaiement } = useContext(PaymentContext);
    const { etape, setetape } = useContext(StepContext);
    const [utilisateur, setutilisateur] = useContext(UserContext);
    const [choixadresse, setchoixadresse] = useContext(AdresseContext);
    // const [choixlivraison, setchoixlivraison] = useState("")
    // const [coutlivraison, setcoutlivraison] = useState(0)
    const [choixlivraison, setchoixlivraison,coutlivraison, setcoutlivraison ] = useContext(ChoixlivraisonContext);

    


    const {
        items,
        cartTotal,
        emptyCart,
    } = useCart();

    const majstatuspanier = () => {
        // Changer le status de la/les commandes marqué comme "Panier"

        //console.log (utilisateur.commandes)

        const commandes = utilisateur.commandes
        .filter((commande) => commande.Status == "Panier")
        .map((commande) => ({"id":commande.id,"id_utilisateur":commande.id_utilisateur,"date":commande.date,"Status": "Non Repris" }));

        console.log (JSON.stringify (commandes));

        fetch('http://localhost:52550/api/commande/putlist',

        {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commandes)
        })


        }
    

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

        const test = fetch('http://localhost:52550/api/commande/post',

            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(commande)
            })

        emptyCart();
        majstatuspanier();

        setetape(5)
    }

    return (
    <>
            {
                <>
                    <h6 className="Fond"> Votre commande : </h6>
                    <table className="green Table_Recap" style={{"textAlign":"center"}}>
                        <thead>
                            <tr><th style={{"width":"100px"}}>Quantité</th><th style={{"width":"250px"}}>Plantes</th><th style={{"width":"100px"}}>P.U.</th><th style={{"width":"100px"}}>Sous Total</th></tr>
                        </thead>
                        <tbody>
                        {items.map((item) => (
                            <tr><td>{item.quantity}</td> <td> {item.Nom} </td><td style={{"fontStyle":"italic"}}>{item.price} €</td><td style={{"fontWeight":"bold"}}>{item.quantity * item.price} €</td></tr>
                        ))}
                        </tbody>
                    </table>
                    
                    <p style={{"textAlign":"left", "width": "275px", "margin": "auto"}}>
                        <hr/>
                        Total hors taxe : {(cartTotal * .80).toFixed(2)} € <br />
                        Total TTC : {cartTotal} € <br />
                        <hr/>
                        Frais de livraison : {choixlivraison} : {coutlivraison} € <br />
                        <hr />
                        A payer: {cartTotal + coutlivraison} €<br />
                        Choix du paiement : {paiement} <br />
                        <hr />
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