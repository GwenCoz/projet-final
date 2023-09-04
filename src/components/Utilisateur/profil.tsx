import { useEffect,useState } from "react";
import { Commande, Utilisateur } from "./utilisateur";


const Profil = () =>

{
    const [utilisateur,setutilisateur]= useState<Utilisateur>(JSON.parse (sessionStorage.getItem("user")));
    const [commande,setcommande] = useState <Commande>(null)

    const handleChange = (e) => {
        setcommande((utilisateur.commandes[e.target.value]))
    
      }
    
    const todate = (datestring)=>
    {

        let date = new Date (datestring).toLocaleDateString();
        let time = new Date (datestring).toLocaleTimeString();
        

        return date+" "+time;
    }

    const totalcommande = (commande:Commande) =>
    {
        let total = 0
        commande.commandes_articles.map (articles=>total+=(articles.articles.Prix * articles.quantite))
        return String (total);
    }

    return (
    utilisateur &&
      
    <div className="Fond">
    <h3 className="green">Profil de {utilisateur.Prenom}</h3>
    
    </div>   

    Vos adresses :

        <h6>Choisir la commande</h6>
    <select onChange={(e) => handleChange(e)} name="Choisissez votre adresse">
        <option></option>
        {utilisateur.commandes.map((commande, index) => <option key={commande.id} value={index}>{todate(commande.date)}</option>)}
    </select> 
    

    {commande &&
    
    <ul>
    <li>Date de commande {todate(commande.date)}</li>
    <li>Status de la commande : {commande.Status}</li>

    {commande.commandes_articles.map ((article_commande)=> <li>{article_commande.articles.Nom} ,prix unitaire : {article_commande.articles.Prix} quantité : {String(article_commande.quantite)}</li>)}
    <li>Total : {totalcommande(commande)}</li>
    </ul>

    }
    
 
    </>
    
    );



}

export default Profil;