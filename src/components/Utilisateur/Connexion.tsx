import { Component, createContext, useContext, useEffect, useRef, useState } from "react";
import { Utilisateur } from "./utilisateur";
import { GetUtilisateur } from "../Api_objects";
import "./connexion.css"
import { useCart } from "react-use-cart";
import { redirect } from "react-router-dom";


const Connexion = () => {

  const [connectinfo, setconnectinfo] = useState({ email: "", mdp: "" });
  const [utilisateur, setutilisateur] = useState<Utilisateur>(null);
  const [erreurconnexion, seterreurconnexion] = useState(false);
  const [couleurtexte, setcouleurtexte] = useState("black");
  const [tremblement, settremblement] = useState(false);
  const [IsPanier, setIsPanier] = useState(false);

  const { addItem } = useCart()


  const verifpanier = () => {
    // parcourir la liste des commandes en sens inverse, s'arrête à la première commande Status : Panier
    utilisateur.commandes.slice().reverse().every((commande) => {

      if (commande.Status == "Panier") {
        commande.commandes_articles.forEach((article) => {

          let p = article.articles

          addItem({ ...p, price: Number(p.Prix), id: String(p.id) }, article.quantite)
        })

        return false

      }
      return true


    });

    setIsPanier(true);
  }



  async function Recuperationutilisateur() {

    GetUtilisateur(connectinfo.email, connectinfo.mdp).then(setutilisateur)

    if (utilisateur == null || utilisateur.id == 0) {

      seterreurconnexion(true);
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


    if (utilisateur && utilisateur.id != 0) {
      sessionStorage.setItem("user", JSON.stringify(utilisateur))
      verifpanier();
    }

    if (sessionStorage.getItem("user") != undefined && IsPanier) {
      window.location.replace("/");
    }


  }, [utilisateur]);

  useEffect(() => {

    if (sessionStorage.getItem("user") != undefined && IsPanier) {
      window.location.replace("/");
    }
    
  }, [IsPanier]
  );






  if (utilisateur == null || utilisateur.id == 0)

    return (

      <>



        <div id="Div_Formulaire">
          <h5 id="Titre"> Déjà Client? </h5>

          <form className="Formulaire-animation" style={{ animationPlayState: tremblement ? "running" : "paused" }} onSubmit={handleSubmit}>
            <label >Email :</label>
            <input type="email"
              onChange={(e) => setconnectinfo({ ...connectinfo, email: e.target.value })}
              value={connectinfo.email} />
            

            <label > Mot de passe : </label>
            <input type="password"
              onChange={(e) => setconnectinfo({ ...connectinfo, mdp: e.target.value })}
              value={connectinfo.mdp}
            />


            <input id="btn_submit" type="submit"
            />
          </form>

          </div>

          {erreurconnexion && <h5>Erreur dans l'email ou le mot de passe, veuillez vérifier vos informations.</h5>}

        </>


        );


        return (

        <>
          Bonjour {utilisateur.Nom} {utilisateur.Prenom} <br /><br />


        </>
        );
}

        export default Connexion;

