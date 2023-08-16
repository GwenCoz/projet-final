import { useEffect,useState } from "react";
import { Utilisateur } from "./utilisateur";

const Profil = () =>

{

    const [utilisateur,setutilisateur]= useState<Utilisateur>(JSON.parse (sessionStorage.getItem("user")));
    


    return (
    utilisateur &&
    <>
    Profil de {utilisateur.Nom}
    
    </>   
    );



}

export default Profil;