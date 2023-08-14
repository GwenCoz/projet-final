import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';





function Header(){

        return (
           <div>
<div className="container-fluid">

<nav className="navbar navbar-expand-sm justify-content-center bg-danger text-white">
Mega soldes, une plante achetée, une deuxième vous est imposée!  
</nav>
</div>

<div>
<div className="container-fluid">
    <nav className="navbar navbar-expand-sm justify-content-end">
    <Image src=""/>

        <ul className="navbar-nav ">

        <li className="nav-item ">
            <a className="nav-link" href="#">Connexion</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href={"/panier"}>Panier</a>
        </li>

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