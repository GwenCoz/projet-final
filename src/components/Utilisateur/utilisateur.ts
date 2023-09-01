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