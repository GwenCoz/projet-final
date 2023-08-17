import { useEffect, useState } from "react";
import { Utilisateur } from "./utilisateur";
import { GetUtilisateur } from "../Api_objects";
import { redirect } from "react-router-dom";


const Connexion = () =>

{
    

    const [connectinfo, setconnectinfo] = useState({email:null,mdp:null});

    const [utilisateur,setutilisateur] = useState<Utilisateur>(null);
    const [erreurconnexion,seterreurconnexion] = useState (false);



    const handleSubmit = (event) => {
        event.preventDefault();

        GetUtilisateur (connectinfo.email).then (setutilisateur);
        
        

        if (utilisateur==null)
        {
            seterreurconnexion (true);
        }
        else
        {
            seterreurconnexion (false);
            
            
        }





      }

      useEffect(() => {


        if (sessionStorage.getItem ("user")==undefined && utilisateur)
        {
            sessionStorage.setItem ("user",JSON.stringify(utilisateur))
        }

        if (sessionStorage.getItem ("user")!=undefined)
        {
          window.location.replace ("/");
        }



        console.log (sessionStorage.getItem("user"))




    
    
      },);
    



    if (utilisateur==null)
    return (

    <> 
    Déjà Client?

    <form onSubmit={handleSubmit}>
      <label>Email:
        <input type="email"
        onChange={(e) => setconnectinfo({...connectinfo,email:e.target.value})} />
        
      </label><br/>

      <label>Mot de passe:
        <input type="password"
         onChange={(e) => setconnectinfo({...connectinfo,mdp:e.target.value})} />
      </label>

      <input type="submit"
       />
    </form>

    {erreurconnexion && <>Erreur dans l'email ou le mot de passe, veuillez vérifier vos informations.</>}

    </>   
    );


    return (

        <>Bonjour {utilisateur.Nom} {utilisateur.Prenom}</>
    );
}

export default Connexion;