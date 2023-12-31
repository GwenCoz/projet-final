import { useEffect,useState } from "react";
import { Adresse, Commande, Utilisateur } from "./utilisateur";
import { GetUtilisateur } from "../Api_objects";


const Profil = () =>

{
    const [utilisateur,setutilisateur]= useState<Utilisateur>(JSON.parse (sessionStorage.getItem("user")));
    const [commande,setcommande] = useState <Commande>(null)
    const [adresse,setadresse] = useState <Adresse>(null)
    const [newAdress, setnewAdress] = useState <boolean>(false)

    useEffect(() => {GetUtilisateur(utilisateur.Email, utilisateur.Mdp).then(setutilisateur)})

      const handleChange = (e) => {
          setcommande((utilisateur.commandes[e.target.value]))
      
      }
    
      const handleChangeAdresse = (e) => {
        if (e.target.value ==-1){
          setnewAdress(true);
          const adresse2 = new Adresse();
          adresse2.Id_Client=utilisateur.id;
          setadresse(adresse2);
        }else{
          setnewAdress(false);
          setadresse((utilisateur.adresse[e.target.value]))
        }
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

    const handleSubmit = (event) => {
        event.preventDefault();
        if (adresse.Rue!=null && adresse.Code_Postal!=null && adresse.Nom_Adresse!=null && adresse.Ville!=null && adresse.Pays!=null ) {
          if(newAdress){
            const test = fetch('http://localhost:52550/api/adresse/post/',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(adresse)
            })
          }else{
            const test = fetch('http://localhost:52550/api/adresse/put/',
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(adresse)
            })
          }   
          window.location.reload();
        }               
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
        <option key={-1} value={-1}> Ajouter Adresse </option>
    </select>

    {(adresse || newAdress)&&
    <>  
        <div >

          <form className="formulaire" onSubmit={handleSubmit}>
            <label >Nom :</label>
            <input type="text"
              onChange={(e) => setadresse({ ...adresse, Nom_Adresse: e.target.value })}
              value={adresse.Nom_Adresse} 
              required/>
            
            <label >Rue :</label>
            <input type="text"
              onChange={(e) => setadresse({ ...adresse, Rue: e.target.value })}
              value={adresse.Rue} required/>
            

            <label > Complement : </label>
            <input type="text"
              onChange={(e) => setadresse({ ...adresse, Complement: e.target.value })}
              value={adresse.Complement}
            />

            <label >Code Postal :</label>
            <input type="text"
              onChange={(e) => setadresse({ ...adresse, Code_Postal: e.target.value })}
              value={adresse.Code_Postal} required />

            <label >Departement :</label>
            <input type="text"
              onChange={(e) => setadresse({ ...adresse, Departement: e.target.value })}
              value={adresse.Departement} />

            <label > Ville :</label>
            <input type="text"
              onChange={(e) => setadresse({ ...adresse, Ville: e.target.value })}
              value={adresse.Ville} required/>
            
            <label > Pays :</label>
            <input type="text"
              onChange={(e) => setadresse({ ...adresse, Pays: e.target.value })}
              value={adresse.Pays} required/>


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
          <>
          {(commande.Status=="Commandé" ) &&
            <option key={commande.id} value={index}>{todate(commande.date)}</option>
          }
          </>
          )}
    </select> 
    

    {commande &&
    
    <>
        <p className="m-3" style={{"textAlign":"left"}}> Date de commande {todate(commande.date)}</p>
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