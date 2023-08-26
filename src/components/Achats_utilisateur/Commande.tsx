import { createContext, useState,useContext  } from "react";
import { Utilisateur } from "../Utilisateur/utilisateur";
import Collapsible from "./MonCollapse";

const UserContext = createContext(null);
const StepContext = createContext(undefined);
const PaymentContext = createContext (undefined);


function Commande ()
{
    const [utilisateur,setutilisateur] = useState<Utilisateur>(null)
    const [etape,setetape] = useState(1)
    const [paiement,setpaiement] = useState ("");

    if (utilisateur==null && sessionStorage.getItem("user"))
    {
      setutilisateur (JSON.parse (sessionStorage.getItem ("user")));
    }





    
    
    if (utilisateur)
    return (

        

        <>
        <UserContext.Provider value={{utilisateur,setutilisateur}}>
        <StepContext.Provider value={{etape,setetape}}>
        <PaymentContext.Provider value={{paiement,setpaiement}}>
        
        Votre commande : {utilisateur.Nom} {utilisateur.Prenom}<br/>

        <div className="p-3 border-bottom d-flex justify-content-between">
        <h6 className="font-weight-bold">1. Adresse de livraison</h6>
        </div>
        {etape==1 && <Adresse/>}

        <div className="p-3 border-bottom d-flex justify-content-between">
        <h6 className="font-weight-bold">2. Moyen de paiement</h6>
        </div>
        {etape==2 && <Paiement/>}

        <div className="p-3 border-bottom d-flex justify-content-between">
        <h6 className="font-weight-bold">3. Choix de la livraison</h6>
        </div>
        {etape==2 && <Récapitulatif>}
       

            
            {/* {etape==1 &&
            <> <Collapsible open title="1. Adresse de livraison">
            <Adresse/>
            </Collapsible>
            </>  
            
            || 

            <>
            <Collapsible title="1. Adresse de livraison">
            <Adresse/>
            </Collapsible>  
            </>
            } */}


    
  


        </PaymentContext.Provider>
        </StepContext.Provider>
        </UserContext.Provider>

        </>
    );

    return (
        <a href="/connexion">Veuillez vous identifier</a>
    );


    
}
    


export default Commande;

function Adresse() {
    
    const {utilisateur,setutilisateur} = useContext (UserContext);
    const {etape,setetape} = useContext (StepContext);


    
    const handleSubmit = (event) => {
        event.preventDefault();

        setetape (2);

        console.log (etape)

      }
    

    return(
        utilisateur &&
        <>
        
        <form onSubmit={handleSubmit}>
        
        <div className="mb-2">
        <label className="form-label">Nom</label>
        <input className="form-control" type="text" value={utilisateur.Nom} readOnly    
        />
        </div>
        
        <div className="mb-3">
        <label className="form-label">Prenom</label>
        <input className="form-control" type="text" value={utilisateur.Prenom} readOnly/>
        </div>
        
         <div className="mb-3">
        <label className="form-label">Rue</label>
        <input className="form-control" type="text" value={utilisateur.Rue || ""} required
        onChange= {e => setutilisateur({...utilisateur,"Rue":e.target.value})}/>
        </div>

       
        <div className="mb-3">
        <label className="form-label">Complement d'adresse</label>
        <input className="form-control" type="text" value={utilisateur.Complementaire || ""}
        onChange= {e => setutilisateur({...utilisateur,"Complementaire":e.target.value})}/>
        </div>
        
        <div className="mb-3">
        <label className="form-label">Ville</label>
        <input className="form-control" type="text" value={utilisateur.Ville || ""} required
        onChange= {e => setutilisateur({...utilisateur,"Ville":e.target.value})}/>
        </div>
        
        <div className="mb-3">
        <label className="form-label">Code postal</label>
        <input className="form-control" type="text" value={utilisateur.Code_postal || ""} required
        onChange= {e => setutilisateur({...utilisateur,"Code_postal":e.target.value})}/>
        </div>
        
        <div className="mb-3">
        <label className="form-label">Pays</label>
        <input className="form-control" type="text" value={utilisateur.Pays || ""} required
        onChange= {e => setutilisateur({...utilisateur,"Pays":e.target.value})}/>
        </div>
        <input type="submit"/>
        </form>
        
        
        </>
    );
    
}

function Paiement() {

    const {paiement,setpaiement} = useContext (PaymentContext);
    const {etape,setetape} = useContext (StepContext);

    

    function onValueChange(event) {
        setpaiement(event.target.value)
        }


    function formSubmit(event) {
        event.preventDefault();
        setetape (3)
        console.log(etape)

      }

    return (
        <>
        <form onSubmit={formSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Male"
              onChange={onValueChange}
              name="paiement"
            />
            Male
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Female"
              onChange={onValueChange}
              name="paiement"
            />
            Female
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Other"
              onChange={onValueChange}
              name="paiement"
            />
            Other
          </label>
        </div>
        <div>
          Selected option is : {paiement}
        </div>
        <button className="btn btn-default" type="submit">
          Submit
        </button>
      </form>

      </>

    );
}