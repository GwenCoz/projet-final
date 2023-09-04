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

    const handleSubmitModif = (event) => {
        event.preventDefault();
    
        const adresses = [{"Id_Client":adresse.Id_Client,"Code_Postal":adresse.Code_Postal,"Complement":adresse.Complement
                            ,"Departement":adresse.Departement,"Pays":adresse.Pays,"Rue":adresse.Rue,"Ville":adresse.Ville, "Nom_Adresse":adresse.Nom_Adresse}]
        var client = {
            "adresse":adresses,
            "id": utilisateur.id,
            "Nom": utilisateur.Nom,
            "Prenom": utilisateur.Prenom,
            "Mdp": utilisateur.Mdp,
            "Email": utilisateur.Email
        }  
        const test = fetch('http://localhost:52550/api/client/put',
         

        {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(client)
        })                    
      }
      const handleSubmitCreer = (event) => {
        event.preventDefault();
    
        const adresses = [{"Code_Postal":adresse.Code_Postal,"Complement":adresse.Complement
                            ,"Departement":adresse.Departement,"Pays":adresse.Pays,"Rue":adresse.Rue,"Ville":adresse.Ville, "Nom_Adresse":adresse.Nom_Adresse }];
        
        
        var client = {
            "adresse":adresses,
            "id": utilisateur.id,
            "Nom": utilisateur.Nom,
            "Prenom": utilisateur.Prenom,
            "Mdp": utilisateur.Mdp,
            "Email": utilisateur.Email
        }                   
        const test = fetch('http://localhost:52550/api/client/post',

        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(client)
        })                    
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
        <option key={-1} value={null}> Ajouter Adresse </option>
    </select>

    {adresse &&
    <>  
        <div >

          <form className="formulaire" onSubmit={handleSubmitModif}>
            <label >Nom :</label>
            <input type="text"
              onChange={(e) => setadresse({ ...adresse, Nom_Adresse: e.target.value })}
              value={adresse.Nom_Adresse} />
            
            <label >Rue :</label>
            <input type="text"
              onChange={(e) => setadresse({ ...adresse, Rue: e.target.value })}
              value={adresse.Rue} />
            

            <label > Complement : </label>
            <input type="text"
              onChange={(e) => setadresse({ ...adresse, Complement: e.target.value })}
              value={adresse.Complement}
            />

            <label >Code Postal :</label>
            <input type="text"
              onChange={(e) => setadresse({ ...adresse, Code_Postal: e.target.value })}
              value={adresse.Code_Postal} />

            <label >Departement :</label>
            <input type="text"
              onChange={(e) => setadresse({ ...adresse, Departement: e.target.value })}
              value={adresse.Departement} />

            <label > Ville :</label>
            <input type="text"
              onChange={(e) => setadresse({ ...adresse, Ville: e.target.value })}
              value={adresse.Ville} />
            
            <label > Pays :</label>
            <input type="text"
              onChange={(e) => setadresse({ ...adresse, Pays: e.target.value })}
              value={adresse.Pays} />


            <input id="btn_submit" type="submit" value={"Modifier Adresse"}/>
            
          </form>

        </div>
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