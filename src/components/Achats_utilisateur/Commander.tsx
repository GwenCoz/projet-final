import { createContext, useState, useContext } from "react";
import { Utilisateur, Adresse } from "../Utilisateur/utilisateur";
import { useCart } from "react-use-cart";
import ChoixAdresse from "./Etapes/ChoixAdresse";
import Paiement from "./Etapes/ChoixPaiement";
import Recapitulatif from "./Etapes/Recapitulatif";

export const UserContext = createContext<[Utilisateur,React.Dispatch<any>]>(null);
export const StepContext = createContext(undefined);
export const PaymentContext = createContext(undefined);
export const AdresseContext = createContext<[Adresse, React.Dispatch<any>]>(undefined);


function Commander() {
  const [utilisateur, setutilisateur] = useState<Utilisateur>(null)
  const [etape, setetape] = useState(1)
  const [paiement, setpaiement] = useState("");
  const [choixadresse, setchoixadresse] = useState<Adresse>(null)

  if (utilisateur == null && sessionStorage.getItem("user")) {
    setutilisateur(JSON.parse(sessionStorage.getItem("user")));
  }

  if (utilisateur)
    return (


      <>

        <UserContext.Provider value={[ utilisateur, setutilisateur ]}>
          <AdresseContext.Provider value={[choixadresse, setchoixadresse]}>
            <StepContext.Provider value={{ etape, setetape }}>
              <PaymentContext.Provider value={{ paiement, setpaiement }}>

                Votre commande : {utilisateur.Nom} {utilisateur.Prenom}<br />

                <div className="p-3 border-bottom d-flex justify-content-between">
                  <h5 className="font-weight-bold">1. Adresse de livraison</h5>
                </div>
                {etape == 1 && <ChoixAdresse />}

                <div className="p-3 border-bottom d-flex justify-content-between">
                  <h5 className="font-weight-bold">2. Moyen de paiement</h5>
                </div>
                {etape == 2 && <Paiement />}

                <div className="p-3 border-bottom d-flex justify-content-between">
                  <h5 className="font-weight-bold">3. Récapitulatif et Livraison</h5>
                </div>
                {etape == 3 && <Recapitulatif />}

                <div className="p-3 border-bottom d-flex justify-content-between">
                  <h5 className="font-weight-bold">3. Récapitulatif et Livraison</h5>
                </div>
                {etape == 4 && <Validation />}



              </PaymentContext.Provider>
            </StepContext.Provider>
          </AdresseContext.Provider>
        </UserContext.Provider>

      </>
    );

  return (
    <a href="/connexion">Veuillez vous identifier</a>
  );


}

function Validation (){

  return (
    <>Validé!</>
  )
}


export default Commander;