import Image from 'react-bootstrap/Image';
import { useEffect, useState } from 'react';
import { Utilisateur } from './Utilisateur/utilisateur';
import "./Header&Footer.css";
import { useCart } from 'react-use-cart';



function Header() {

  const {
    totalItems,
    emptyCart,
    updateCartMetadata,
    metadata,
    items,

  } = useCart();


  const [utilisateur, setutilisateur] = useState<Utilisateur>(null)


  if (utilisateur == null && sessionStorage.getItem("user")) {
    setutilisateur(JSON.parse(sessionStorage.getItem("user")));
    updateCartMetadata({ "logged": true })
  }



  if (!sessionStorage.getItem("user") && metadata["logged"]) {
    emptyCart();
    updateCartMetadata({ "logged": false })
  }



  function Deconnexion() {
    sessionStorage.clear();
    emptyCart();
    window.location.reload();

    if (totalItems && totalItems > 0) {
      SavePanier()
    }

  }

  function SavePanier() {
    const articles = items.map(({ id, quantity }) => ({ "id_article": id, "quantite": quantity }));


    var commande = {
      "commandes_articles": articles
      ,
      "id_utilisateur": utilisateur.id,
      "date": null,
      "Status": "Panier"
    }

    const test = fetch('http://localhost:52550/api/commande/post',

      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(commande)
      })

  }

  return (
    <div>
      <div>

        <nav id='BarUtilisateur'>

          {utilisateur &&

            <p id='Bonjour'>Bonjour {utilisateur.Prenom} ! </p>

          }
          <Image id='Logo' src="./Images/logo.png" onClick={() => window.location.href = "/"} />

          <ul id="BarUtilisateur_ListBouton">
            <li className="List_Element">
              <a className="List_link" href="/panier"> {(totalItems != 0) && <p id='pastille_panier'>{totalItems}</p>}<Image className='icone green medium' src="./Images/Logo_panier.png" /> <p className='List_nom green'>Panier</p></a>

            </li>

            {utilisateur &&
              <>
                <li className="List_Element">
                  <a className="List_link" href="/profil"><p className='List_nom green'>Mon profil</p></a>
                </li>

                <li className="List_Element">
                  <a type="button" className="List_link" onClick={Deconnexion}><p className='List_nom green'>Deconnexion</p></a>
                </li>
              </>

              ||

              <li className='List_Element'>
                <a className="List_link" href="/connexion"><p className='List_nom green'>Connexion</p></a>
              </li>
            }

          </ul>

        </nav>



        <div id='Barre_Navigation'>
           
            <a className="Link btn_div Gras" href='/'> <Image className='icone white small' src="./Images/Logo_home.png" /> <p className='Btn_text'>Accueil</p> </a>
            

            <div id='Plante_Section'>
              <a  id="NosPlantes" href="/nos_plantes" ><p>Nos Plantes</p></a>
              <a  href="/nos_plantes_interieur" ><p>Plantes d'intérieur</p></a>
              <a  href="/nos_plantes_exterieur" ><p>Plantes d'extérieur</p></a>
            </div>
            <a className="Link btn_div" href='#'> <p className='Btn_text'>A propos</p> </a>

        </div>
      </div>
    </div>
  );
}

export default Header;