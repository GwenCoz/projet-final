import Image from 'react-bootstrap/Image';
import { useEffect,useState } from 'react';
import { Utilisateur } from './Utilisateur/utilisateur';
import "./Header&Footer.css";
import { useCart } from 'react-use-cart';



function Header(){

  const {
    totalItems,
    emptyCart,
    updateCartMetadata,
    metadata

  } = useCart();


  const [utilisateur,setutilisateur] = useState<Utilisateur>(null)


  if (utilisateur==null && sessionStorage.getItem("user"))
  {
    setutilisateur (JSON.parse (sessionStorage.getItem ("user")));
    updateCartMetadata ({"logged":true})
  }

  if (!utilisateur && metadata["logged"])
  {
    emptyCart();
    updateCartMetadata ({"logged":false})
  }




  function Deconnexion()
{
  sessionStorage.clear();
  emptyCart();
  window.location.reload();
  
}
  
  return (
    <div>
      <div>
          
        <nav id='BarUtilisateur'>

          {utilisateur && 
            
            <p id='Bonjour'>Bonjour {utilisateur.Prenom} ! </p>
            
          }
          <Image id='Logo' src="./Images/logo.png" onClick={()=>window.location.href ="/"}/>
          
          <ul id="BarUtilisateur_ListBouton">
            <li className="List_Element">
              <a className="List_link" href="/panier"> { (totalItems!=0) && <p id='pastille_panier'>{totalItems}</p>}<Image className='icone green medium' src="./Images/Logo_panier.png" /> <p className='List_nom green'>Panier</p></a>
              
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
           
            {/* <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Plantes d'intérieur
            </Dropdown.Toggle>
              <Dropdown.Menu>
              <Dropdown.Item href="/nos_plantes">Par Taille</Dropdown.Item>
              <Dropdown.Item href="/nos_plantes">Par Emplacement</Dropdown.Item>
              <Dropdown.Item href="/nos_plantes">Par Beauté</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>  */}
            
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