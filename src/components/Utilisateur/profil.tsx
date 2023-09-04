import { useEffect,useState } from "react";
import { Adresse, Commande, Utilisateur } from "./utilisateur";


const Profil = () =>

{
    const [utilisateur,setutilisateur]= useState<Utilisateur>(JSON.parse (sessionStorage.getItem("user")));
    const [commande,setcommande] = useState <Commande>(null)
    const [adresse,setadresse] = useState <Adresse>(null)

    const handleChange = (e) => {
        setcommande((utilisateur.commandes[e.target.value]))
    
      }
      const handleChangeAdresse = (e) => {
        setadresse((utilisateur.adresse[e.target.value]))
    
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
    
    <>
    <div className="Fond">
    <h2 className="green">Profil de {utilisateur.Prenom}</h2>
    
        
    <h5>Vos adresses :</h5>
    <select style={{"width":"200px", "textAlign": "center"}} onChange={(e) => handleChangeAdresse(e)} name="Choisissez votre adresse">
        <option></option>
        {utilisateur.adresse.map((adresse, indexadress) => 
        <option key={adresse.Id} value={indexadress}>{adresse.Nom_Adresse}</option>)}
        <option> Nouvelle Adresse</option>
    </select>

    {adresse &&
    
    <>
        <table className="green Table_Recap">
            <tbody>
            <tr><th>Rue</th><td>{adresse.Rue}</td></tr>
            <tr><th>Complement</th><td>{adresse.Complement}</td></tr>
            <tr><th>Code Postal</th><td>{adresse.Code_Postal}</td></tr>
            <tr><th>Ville</th><td>{adresse.Ville}</td></tr>
            <tr><th>Pays</th><td>{adresse.Pays.toUpperCase()}</td></tr>     
            </tbody>
        </table>
        <button id="Edit_Adress" onClick={()=> window.location.href = "#" }>Modifier Adresse</button>
    </>
    }

    <hr style={{"width":"50%", "margin":"10px auto"}}/>

    <h5>Selectionner une commande</h5>
    <select style={{"width":"200px", "textAlign": "center"}} onChange={(e) => handleChange(e)} name="Choisissez votre commande">
        <option></option>
        {utilisateur.commandes.map((commande, index) => 
        <option key={commande.id} value={index}>{todate(commande.date)}</option>)}
    </select> 
    

    {commande &&
    
    <>
        <p className="m-3" style={{"textAlign":"left"}}> Date de commande {todate(commande.date)}</p>
        <p className="m-3" style={{"textAlign":"left"}}> Status de la commande : {commande.Status}</p>
        <table className="green Table_Recap">
            <thead>
                <tr><th style={{"width":"250px"}}>Plantes</th><th style={{"width":"100px"}}>Prix Unitaire</th><th style={{"width":"100px"}}>Quantité</th></tr>
            </thead>
            <tbody>
            {commande.commandes_articles.map ((article_commande)=> 
                <tr><td>{article_commande.articles.Nom}</td> <td> {article_commande.articles.Prix} € </td><td>{String(article_commande.quantite)}</td></tr>
            )}
            </tbody>
            <tfoot> <tr><th colSpan={3}>Total : {totalcommande(commande)} €</th></tr></tfoot>
        </table>
    </>
    }

    </div>
    
 
    </>
    
    );



}

export default Profil;