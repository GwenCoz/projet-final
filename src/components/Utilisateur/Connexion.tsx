import { Component, useEffect, useRef, useState } from "react";
import { Utilisateur } from "./utilisateur";
import { GetUtilisateur } from "../Api_objects";
import "./connexion.css"

export var user = new Utilisateur;
const Connexion = () =>

{
    function verifutilisateur()
    {
      if (utilisateur && utilisateur.id==0)
      {
      seterreurconnexion (true);
      setcouleurtexte("red");
      settremblement(true);
      setTimeout(() => settremblement(false), 2000);
    }
    }

    const [connectinfo, setconnectinfo] = useState({email:"",mdp:""});
    const [utilisateur,setutilisateur] = useState<Utilisateur>(null);
    const [erreurconnexion,seterreurconnexion] = useState (false);
    const [couleurtexte,setcouleurtexte] = useState ("black");
    const [tremblement,settremblement] = useState (false);

    async function Recuperationutilisateur() {

      const myPromise = GetUtilisateur (connectinfo.email,connectinfo.mdp)

      await myPromise.then(function(response) {
        setutilisateur(response);
        user = utilisateur;
      });

        if (utilisateur==null || utilisateur.id==0)
        {
  
        seterreurconnexion (true);
        setcouleurtexte("red");
        settremblement(true);
        setTimeout(() => settremblement(false), 500);
        }
      }

    const handleSubmit = (event) => {
        event.preventDefault();

        Recuperationutilisateur();

      }

      useEffect(() => {


        if (utilisateur && utilisateur.id!=0)
        {
            sessionStorage.setItem ("user",JSON.stringify(utilisateur))
        }

        if (sessionStorage.getItem ("user")!=undefined)
        {
          window.location.replace ("/");
        }
    
    
      },);
  

    if (utilisateur==null || utilisateur.id==0)

    return (

    <div id="Div_Formulaire"> 
      <h5 id="Titre"> Déjà Client? </h5>

      <form className="Formulaire-animation" style={{ animationPlayState:tremblement?"running":"paused"}} onSubmit={handleSubmit}>
        <label >Email :</label>
        <input type="email"
        onChange={(e) => setconnectinfo({...connectinfo,email:e.target.value})}
        value={connectinfo.email}
        />

        <label > Mot de passe : </label>
        <input type="password"
        onChange={(e) => setconnectinfo({...connectinfo,mdp:e.target.value})}
        value={connectinfo.mdp}
          />
          
        

        <input id="btn_submit" type="submit"
        />
      </form>

      {erreurconnexion && <h5>Erreur dans l'email ou le mot de passe, veuillez vérifier vos informations.</h5>}

    </div>   
    );


    return (

        <>Bonjour {utilisateur.Nom} {utilisateur.Prenom}</>
    );
}

export default Connexion;