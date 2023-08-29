import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect,useState } from 'react';
import { Utilisateur } from './Utilisateur/utilisateur';
import "./Header&Footer.css";
import { useCart } from 'react-use-cart';

function Deconnexion()
{
  sessionStorage.clear();
  window.location.reload();
}

function Header(){

  const [utilisateur,setutilisateur] = useState<Utilisateur>(null)

  if (utilisateur==null && sessionStorage.getItem("user"))
  {
    setutilisateur (JSON.parse (sessionStorage.getItem ("user")));
  }

  const {
    totalItems,
  } = useCart();
  
  return (
    <div>
      <div>
        
        {utilisateur && 
          <div id='BarBonjour'>
            Bonjour {utilisateur.Prenom} {utilisateur.Nom}
          </div>
        }
          
        <nav id='BarUtilisateur'>
          <Image id='Logo' src="./Images/logo.png" />

          <ul id="BarUtilisateur_ListBouton">
            <li className="List_Element">
              <a className="List_link" href="/panier"> <Image className='icone green' src="./Images/Logo_panier.png" /> <p className='List_nom green'>Panier</p></a>
              <p>{totalItems}</p>
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
        

        <div>
          <div className="container-fluid">
            <nav className="navbar navbar-expand-sm bg-success navbar-dark justify-content-center m-0 p-0">  
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

              <Nav >
                <Nav.Item>
                  <Nav.Link style={{color:"white"}} href="/"><Image className='icone antiqueWhite' src="./Images/Logo_home.png" /> <b>Page d'accueil</b></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link style={{color:"white"}} href="/nos_plantes" >Nos Plantes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link style={{color:"white"}}>Plantes d'interieur</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link style={{color:"white"}}>Plantes d'extérieur</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link style={{color:"white"}}>A propos</Nav.Link>
                </Nav.Item>
              </Nav>
            </nav>
          </div>
        </div>
      </div>
    </div>      
);
}

export default Header;