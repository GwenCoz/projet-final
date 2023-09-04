import { useContext, useState } from "react";
import { useCart } from "react-use-cart";
import { AdresseContext, ChoixlivraisonContext, PaymentContext, StepContext, UserContext } from "../Commander";

function ChoixLivraison() {

    const { paiement, setpaiement } = useContext(PaymentContext);
    const { etape, setetape } = useContext(StepContext);
    const [utilisateur, setutilisateur] = useContext(UserContext);
    const [choixadresse, setchoixadresse] = useContext(AdresseContext);
    // const [choixlivraison, setchoixlivraison] = useState("")
    // const [coutlivraison, setcoutlivraison] = useState(0)
    const [ choixlivraison, setchoixlivraison,coutlivraison, setcoutlivraison ] = useContext(ChoixlivraisonContext);

    function formSubmit(event) {

        event.preventDefault();
        setcoutlivraison(choixlivraison == "Livraison économique" ? 10 : choixlivraison == "Livraison prioritaire" ? 20 : 5)
        setetape (4)

    }

    return (

        <>
            <h6 className="Fond" >Expédition à l'Adresse {choixadresse.Nom_Adresse} : </h6>

            <table className="green Table_Recap">
                <tr><td>Rue</td><td>{choixadresse.Rue}</td></tr>
                {choixadresse.Complement != null &&
                    <tr><td>Complément</td><td>{choixadresse.Complement}</td></tr>
                }
                <tr><td>Code Postal</td><td>{choixadresse.Code_Postal}</td></tr>
                <tr><td>Ville</td><td>{choixadresse.Ville}</td></tr>
                <tr><td>Pays</td><td>{choixadresse.Pays.toUpperCase()}</td></tr>
            </table>

            <hr style={{ "width": "30%", "margin": " 10px auto" }} />

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
                        Livraison économique : 10€
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
                        Livraison prioritaire : 20€
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
                        Livraison en relais colis : 5€
                    </label>
                </div>

                <button id="btn_submit" type="submit">
                    Valider
                </button>
            </form>
            <hr style={{ "width": "30%", "margin": " 10px auto" }} />

        </>
    );
}

export default ChoixLivraison