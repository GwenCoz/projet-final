import React from 'react'
import Button from 'react-bootstrap/Button';
import './connexion.css';
import { Adresse, Utilisateur } from './utilisateur';
import { useState } from "react";
import { GetUtilisateur } from '../Api_objects';


function Inscription() {
    const [utilisateur,setutilisateur]= useState<Utilisateur>(null);
    const [confirmation,setconfirmation]=useState<String>("");
    const [adresse,setadresse] = useState <Adresse>(null);
    const [isValide,setvalide] = useState<boolean>(true)
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if ( utilisateur.Mdp == confirmation ) {
            utilisateur.adresse=[adresse]
            const test = fetch('http://localhost:52550/api/client/post/',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(utilisateur)
                
            })
            GetUtilisateur(utilisateur.Email,utilisateur.Mdp);
            window.location.href="Connexion";
        }else(setvalide(false))
    }               
      
    
    
    return (
        
        <div className="container">
            <h2>S'inscrire</h2>
            <form className="formulaire" onSubmit={handleSubmit}>
            
                <h5>Informations</h5><hr/>
                <label >Nom</label>
                <input type = "text" className="form-control" required
                onChange={(e) => setutilisateur({ ...utilisateur, Nom: e.target.value })}/>   
            
                <label htmlFor="">Prenom</label>
                <input type = "text"  className="form-control"required
                onChange={(e) => setutilisateur({ ...utilisateur, Prenom: e.target.value })}/>   
            
                <label htmlFor="">Mot de passe</label>
                <input type = "password"  className="form-control"required name='password'
                onChange={(e) => setutilisateur({ ...utilisateur, Mdp: e.target.value })}/>   
            
                <label htmlFor=""> Confirmer Mot de passe</label>
                <input type = "password"  className="form-control"required name='password2'
                onChange={(e) => setconfirmation(e.target.value)}/>   
            
                <label htmlFor="">Telephone</label>
                <input type = "tel" className="form-control"required
                onChange={(e) => setutilisateur({ ...utilisateur, Telephone: e.target.value })}/>   
                
                <label htmlFor="">Email</label>
                <input type = "email" className="form-control" required
                onChange={(e) => setutilisateur({ ...utilisateur, Email: e.target.value })}/>

                <h5>Adresse</h5><hr/>

                <label >Nom de l'adresse :</label>
                <input type="text"
                onChange={(e) => setadresse({ ...adresse, Nom_Adresse: e.target.value })}
                required className="form-control"/>
                
                <label >Rue :</label>
                <input type="text"
                onChange={(e) => setadresse({ ...adresse, Rue: e.target.value })}
                required className="form-control"/>
                

                <label > Complement : </label>
                <input type="text"
                onChange={(e) => setadresse({ ...adresse, Complement: e.target.value })}
                className="form-control"
                />

                <label >Code Postal :</label>
                <input type="text"
                onChange={(e) => setadresse({ ...adresse, Code_Postal: e.target.value })}
                required className="form-control"/>

                <label >Departement :</label>
                <input type="text" className="form-control"
                onChange={(e) => setadresse({ ...adresse, Departement: e.target.value })}
                />

                <label > Ville :</label>
                <input type="text" className="form-control"
                onChange={(e) => setadresse({ ...adresse, Ville: e.target.value })}
                required/>
                
                <label > Pays :</label>
                <input type="text" className="form-control"
                onChange={(e) => setadresse({ ...adresse, Pays: e.target.value })}
                required/>

                <p/><p/> 

                <input id="btn_submit" type="submit" value={"Valider"}/>
            </form>
            {!isValide && <p style={{"color":"#dc3545"}}>Erreur de saisie de Mot de passe</p>}
        </div>

    );

}
export default Inscription;