import { Component, useEffect, useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import './connexion.css';
import { render } from "@testing-library/react";


const Inscription = () => {

    const [client, SetClient] = useState({});
    const [message, setMessage] = useState('');
    
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(client)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const reponse = await fetch("http://localhost:52550/api/clients", requestOptions);
            if (reponse.ok) {
                setMessage("Enregistrement validé")
            } else {
                setMessage("Erreur d'enregistrement.Veuillez recommencer")
            }
        }
        catch (error)
        {
            setMessage("Veuillez ressayer.")   }
    }


    return (
    <div id="Div-Formulaire" onSubmit={handleSubmit}>
       <h5 id="Titre"> Inscription </h5>
       
       <form> 
       <label >Nom: </label>
       <input type="text" name="nom" onChange={(e) => SetClient({ ...client, ['nom']: e.target.value })}
       />
       
        <label>Prenom: </label>
        <input type = "text" name="prenom" onChange={(e) => SetClient({ ...client, ['prenom']: e.target.value })}/>   
        
        <label>Mot de passe:</label>
        <input type = "password" name="mot-de-passe" onChange={(e) => SetClient({ ...client, ['mot-de-passe']: e.target.value })}/>   
        
        <label >Telephone:</label>
        <input type = "tel" name="telephone" onChange={(e) => SetClient({ ...client, ['telephone']: e.target.value })}/>   
       
        <label >Email</label>
        <input type = "email"  name="email" onChange={(e) => SetClient({ ...client, ['email']: e.target.value })} />  

        <input id="btn_submit" type="submit"/>
        
        </form>
        
    </div>
        
    );

}
export default Inscription;