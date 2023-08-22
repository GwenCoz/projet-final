import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Affichage_produits from './components/Card_Plante/Affichage_produits';
import Affichage_article from './components/Card_Plante/Affichage_article';

import Connexion from './components/Utilisateur/Connexion';
import { CartProvider } from 'react-use-cart';
import Panier from './components/Achats_utilisateur/panier';
import Profil from './components/Utilisateur/profil';
import Commande from './components/Achats_utilisateur/Commande';


function App() {

  return (

    <CartProvider>
    <div className="App">

      <BrowserRouter>

        <Header/>

          <Routes>


            <Route path="nos_plantes" element={<Affichage_produits/>} />
            <Route path="page_article/:id" element={<Affichage_article/>} />
            <Route path="panier" element={<Panier/>} />
            <Route path="connexion" element={<Connexion/>} />
            <Route path="profil" element={<Profil/>} />
            <Route path="commande" element={<Commande/>} />




          </Routes>

        <Footer/>

      </BrowserRouter>
    </div>
    </CartProvider>
  );
}

export default App;
