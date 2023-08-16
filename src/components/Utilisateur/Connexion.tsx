import { useEffect, useState } from "react";

const Connexion = () =>

{

    const [utilisateur, setutilisateur] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${utilisateur}`)

      }
      console.log (utilisateur)


    return (

    <> 
    Déjà Client?

    <form onSubmit={handleSubmit}>
      <label>Email:
        <input type="email"
        onChange={(e) => setutilisateur({...utilisateur,email:e.target.value})} />
        
      </label><br/>

      <label>Mot de passe:
        <input type="password"
         onChange={(e) => setutilisateur({...utilisateur,mdp:e.target.value})} />
      </label>

      <input type="submit" />
    </form>

    </>   
    );
}

export default Connexion;