export class Commande {
    id: number;
    id_utilisateur: number;
    date: Date;
    Status : string;
    commandes_articles: CommandeArticles[];
    
}

export class CommandeArticles{
    id_commande: number;
    id_article : number;
    quantite : number;

}