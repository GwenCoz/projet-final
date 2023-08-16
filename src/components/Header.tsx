import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect,useState } from 'react';
import { Utilisateur } from './Utilisateur/utilisateur';

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



        return (
           <div>
<div className="container-fluid">

<nav className="navbar navbar-expand-sm justify-content-center bg-danger text-white">
Mega soldes, une plante achetée, une deuxième vous est imposée!  
</nav>
</div>

<div>
<div className="container-fluid">
{utilisateur && <div className="navbar justify-content-start">
  Bonjour {utilisateur.Prenom} {utilisateur.Nom}
  </div>}
  
    <nav className="navbar navbar-expand-sm justify-content-end">
    <Image src=""/>

        <ul className="navbar-nav ">

        <li className="nav-item">
            <a className="nav-link" href="/panier">Panier</a>
        </li>

        
            {utilisateur &&
            <>
            <li className="nav-item ">
            <a className="nav-link" href="/profil">Mon profil</a>
            </li>

            <li className="nav-item">
            <a type="button" className="nav-link" onClick={Deconnexion}>Deconnexion</a>
            </li>
            </>

            ||
      

        <li>
          <a className="nav-link" href="/connexion">Connexion</a>
        </li>
        }

        </ul>

    </nav>
</div>

<div>
<div className="container-fluid">
    <nav className="navbar navbar-expand-sm bg-success navbar-dark justify-content-center">  
       <Dropdown>
       <Dropdown.Toggle variant="success" id="dropdown-basic">
        Plantes d'intérieur
       </Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item href="/nos_plantes">Par Taille</Dropdown.Item>
        <Dropdown.Item href="/nos_plantes">Par Emplacement</Dropdown.Item>
        <Dropdown.Item href="/nos_plantes">Par Beauté</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown> 

      <Nav >
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