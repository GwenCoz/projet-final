import { createContext, useState,useContext  } from "react";
import { Utilisateur } from "../Utilisateur/utilisateur";
import Collapsible from "./MonCollapse";

const UserContext = createContext<Utilisateur>(null)


function Commande ()
{
    const [utilisateur,setutilisateur] = useState<Utilisateur>(null)

    if (utilisateur==null && sessionStorage.getItem("user"))
    {
      setutilisateur (JSON.parse (sessionStorage.getItem ("user")));
    }

    
    
    if (utilisateur)
    return (

        

        <>
        <UserContext.Provider value={utilisateur}>
        
        Votre commande : {utilisateur.Nom} {utilisateur.Prenom}<br/>

        <Collapsible open title="Adresse de livraison">
        <Adresse/>
        </Collapsible>


        <Paiement/>

        </UserContext.Provider>

        </>
    );

    return (
        <a href="/connexion">Veuillez vous identifier</a>
    );
}
    


export default Commande;

function Adresse() {
    
    const utilisateur = useContext (UserContext);

    return(
        <><h2>Votre Adresse de livraison</h2>
        
        <form>
        
        <div className="mb-2">
        <label className="form-label">Nom</label>
        <input className="form-control" type="text" value={utilisateur.Nom}></input>
        </div>
        
        <div className="mb-3">
        <label className="form-label">Prenom</label>
        <input className="form-control" type="text" value={utilisateur.Prenom}></input>
        </div>
        
        <div className="mb-3">
        <label className="form-label">Rue</label>
        <input className="form-control" type="text" value={utilisateur.Rue}></input>
        </div>
        
        <div className="mb-3">
        <label className="form-label">Complement d'adresse</label>
        <input className="form-control" type="text" value={utilisateur.Complementaire}></input>
        </div>
        
        <div className="mb-3">
        <label className="form-label">Ville</label>
        <input className="form-control" type="text" value={utilisateur.Ville}></input>
        </div>
        
        <div className="mb-3">
        <label className="form-label">Code postal</label>
        <input className="form-control" type="text" value={utilisateur.Code_postal}></input>
        </div>
        
        <div className="mb-3">
        <label className="form-label">Pays</label>
        <input className="form-control" type="text" value={utilisateur.Pays}></input>
        </div>
        </form>
        
        
        </>
    );
    
}

function Paiement() {

    return (
        <>
        
        <h2>Choisissez un moyen de paiement</h2>
        </>

    );
}