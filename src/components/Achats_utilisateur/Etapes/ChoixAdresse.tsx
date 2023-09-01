import { createContext, useState, useContext } from "react";
import {UserContext,StepContext,AdresseContext} from "../Commander"

function ChoixAdresse() {

    const [utilisateur, setutilisateur] = useContext(UserContext);
    const { etape, setetape } = useContext(StepContext);
    const [choixadresse, setchoixadresse] = useContext(AdresseContext);
  
  
    const handleChange = (e) => {
      setchoixadresse(utilisateur.adresse[e.target.value])
  
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      setetape(2);
  
    }
  
  
    return (
      utilisateur &&
      <>
        <h6>Choisir l'adresse d'expédition</h6>
        <select onChange={(e) => handleChange(e)} name="Choisissez votre adresse">
          <option></option>
          {utilisateur.adresse.map((adr, index) => <option key={adr.Id} value={index}>{adr.Nom_Adresse}</option>)}
        </select>
  
        {choixadresse &&
          <form className="formulaire" onSubmit={handleSubmit}>
            
              <label className="form-label">Nom</label>
              <input className="form-control" type="text" value={utilisateur.Nom} readOnly
              />
  
              <label className="form-label">Prenom</label>
              <input className="form-control" type="text" value={utilisateur.Prenom} readOnly />
  
              <label className="form-label">Rue</label>
              <input className="form-control" type="text" value={choixadresse.Rue || ""} required
                onChange={e => setutilisateur({ ...utilisateur, "Rue": e.target.value })} />
  
  
              <label className="form-label">Complement d'adresse</label>
              <input className="form-control" type="text" value={choixadresse.Complement || ""}
                onChange={e => setutilisateur({ ...utilisateur, "Complementaire": e.target.value })} />
  
              <label className="form-label">Ville</label>
              <input className="form-control" type="text" value={choixadresse.Ville || ""} required
                onChange={e => setutilisateur({ ...utilisateur, "Ville": e.target.value })} />
  
            
              <label className="form-label">Code postal</label>
              <input className="form-control" type="text" value={choixadresse.Code_Postal || ""} required
                onChange={e => setutilisateur({ ...utilisateur, "Code_postal": e.target.value })} />
  

              <label className="form-label">Pays</label>
              <input className="form-control" type="text" value={choixadresse.Pays || ""} required
                onChange={e => setutilisateur({ ...utilisateur, "Pays": e.target.value })} />
                
            <input id="btn_submit" type="submit" />
          </form>
        }
  
      </>
    );
  
  }

  export default ChoixAdresse