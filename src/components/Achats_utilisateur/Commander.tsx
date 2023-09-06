import { createContext, useState, useContext } from "react";
import { Utilisateur, Adresse } from "../Utilisateur/utilisateur";
import ChoixAdresse from "./Etapes/ChoixAdresse";
import Paiement from "./Etapes/ChoixPaiement";
import Recapitulatif from "./Etapes/Recapitulatif";
import ChoixLivraison from "./Etapes/ChoixLivraison";

export const UserContext = createContext<[Utilisateur,React.Dispatch<any>]>(null);
export const StepContext = createContext(undefined);
export const PaymentContext = createContext(undefined);
export const AdresseContext = createContext<[Adresse, React.Dispatch<any>]>(undefined);
export const ChoixlivraisonContext = createContext<[string, React.Dispatch<any>,number,React.Dispatch<any>]>(undefined);


function Commander() {
  const [utilisateur, setutilisateur] = useState<Utilisateur>(null)
  const [etape, setetape] = useState(1)
  const [paiement, setpaiement] = useState("");
  const [choixadresse, setchoixadresse] = useState<Adresse>(null)
  const [choixlivraison, setchoixlivraison] = useState("")
  const [coutlivraison, setcoutlivraison] = useState(0)

  if (utilisateur == null && sessionStorage.getItem("user")) {
    setutilisateur(JSON.parse(sessionStorage.getItem("user")));
  }

  if (utilisateur)
    return (


      <>

        <UserContext.Provider value={[ utilisateur, setutilisateur ]}>
          <AdresseContext.Provider value={[choixadresse, setchoixadresse]}>
          <ChoixlivraisonContext.Provider value={[choixlivraison, setchoixlivraison,coutlivraison,setcoutlivraison]}>
            <StepContext.Provider value={{ etape, setetape }}>
              <PaymentContext.Provider value={{ paiement, setpaiement }}>

                <h3 className="Fond ">Votre commande : {utilisateur.Nom} {utilisateur.Prenom}</h3>

                <div className="m-2 p-3 border-top d-flex justify-content-between">
                  <h5 className="font-weight-bold">1. Adresse de livraison</h5>
                  {etape>1 &&  etape != 5 && <><button className="btn_Modifier" onClick={()=> setetape(1)}>Modifier</button></>}
                </div>
                {etape == 1 && <ChoixAdresse />}

                <div className="m-2 p-3 border-top d-flex justify-content-between">
                  <h5 className="font-weight-bold">2. Moyen de paiement</h5>
                  {etape>2 && etape != 5 && <><button className="btn_Modifier" onClick={()=> setetape(2)}>Modifier</button></>}
                </div>
                {etape == 2 && <Paiement />}

                <div className="m-2 p-3 border-top d-flex justify-content-between">
                  <h5 className="font-weight-bold">3. Livraison</h5>
                  {etape>3 && etape != 5 && <><button className="btn_Modifier" onClick={()=> setetape(3)}>Modifier</button></>}
                </div>
                {etape == 3 && <ChoixLivraison />}

                <div className="m-2 p-3 border-top d-flex justify-content-between">
                  <h5 className="font-weight-bold">4. Récapitulatif</h5>
                  {etape>4 && etape != 5 && <><button className="btn_Modifier" onClick={()=> setetape(4)}>Modifier</button></>}
                </div>
                {etape == 4 && <Recapitulatif />}

                <div className="m-2 p-3 border-top d-flex justify-content-between">
                  <h5 className="font-weight-bold">5. Validation</h5>
                </div>
                {etape == 5 && <Validation />}



              </PaymentContext.Provider>
            </StepContext.Provider>
            </ChoixlivraisonContext.Provider>
          </AdresseContext.Provider>
        </UserContext.Provider>

      </>
    );

  return (
    <div className="Fond">
      <a id="Demande_Connexion"href="/connexion">Veuillez vous identifier</a>
    </div>
  );


}

function Validation (){

  return (
    <>
    <h3 className="Fond green">Votre commande à été validée!</h3>
    <button className="m-2" id="btn_submit" onClick={()=>window.location.href=("/")}> Retour à l'accueil</button>
    </>
  )
}


export default Commander;