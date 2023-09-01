import React from 'react'
import Button from 'react-bootstrap/Button';
import './connexion.css';


function Inscription() {
    return (
        <div>
            <div className="container">
                <form action="" className ="mx-auto mt-20" method="post"></form>
                <div>
                    <h2>S'identifier</h2>
                </div>
<div>
    <label htmlFor="">Nom</label>
    <input type = "text" className="form-control" />   
</div>  
<div>
    <label htmlFor="">Prenom</label>
    <input type = "text"  className="form-control"/>   
</div>
<div>
    <label htmlFor="">Mot de passe</label>
    <input type = "password"  className="form-control"/>   
</div>
<div>
    <label htmlFor="">Telephone</label>
    <input type = "tel" className="form-control"/>   
</div>
<div>
    <label htmlFor="">Email</label>
    <input type = "email" className="form-control" />   
</div>
<br/>
<div>
<Button variant="success">S'inscrire</Button>{' '}
</div>

            </div>
        </div>

    );

}
export default Inscription;