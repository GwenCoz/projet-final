import { Plante } from "../Card_Plante/Plante";

export class Utilisateur {
    id: number;
    Nom: string;
    Prenom: string;
    Mdp: string;
    Email : string;
    Pays: string;
    Code_postal: number;
    Ville: string;
    Rue: string;
    Complementaire: string;
    adresse: Adresse[];
    commandes:Commande[];
    
}

export class Adresse{
    Id: number;
    Id_Client : number;
    Pays : string;
    Code_Postal : string;
    Ville : string;
    Departement : string;
    Rue : string;
    Complement : string;
    Nom_Adresse : string;
    
}

export class Commande{
    commandes_articles : Commandes_articles[];
    id: number;
    id_utilisateur: number;
    date: string;
    Status: string;
}

export class Commandes_articles{
    id_commande: number;
    id_article: number;
    quantite: number;
    articles: Plante;
}