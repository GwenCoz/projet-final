import { useEffect,useState } from "react";
import { Utilisateur } from "./utilisateur";

const Profil = () =>

{

    const [utilisateur,setutilisateur]= useState<Utilisateur>(JSON.parse (sessionStorage.getItem("user")));
    


    return (
    utilisateur &&
    <div className="Fond">
    <h3 className="green">Profil de {utilisateur.Prenom}</h3>
    
    </div>   
    );



}

export default Profil;