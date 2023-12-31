import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Affichage_produits from './components/Card_Plante/Affichage_produits';
import Affichage_article from './components/Card_Plante/Affichage_article';

import Connexion from './components/Utilisateur/Connexion';
import { CartProvider } from 'react-use-cart';
import Profil from './components/Utilisateur/profil';
import Commander from './components/Achats_utilisateur/Commander';
import Panier from './components/Achats_utilisateur/panier';
import NoPage from './components/NoPage';
import Home from './components/Home';
import Inscription from './components/Utilisateur/Inscription';

function App() {

  return (

    <CartProvider>


      <div className="App">

        <BrowserRouter>

          <Header />

          <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="nos_plantes" element={<Affichage_produits/>} />
            <Route path="nos_plantes_interieur" element={<Affichage_produits lieu="Interieur"/>} />
            <Route path="nos_plantes_exterieur" element={<Affichage_produits lieu="Exterieur"/>} />
            <Route path="nos_plantes" element={<Affichage_produits/>} />
            <Route path="page_article/:id" element={<Affichage_article/>} />
            <Route path="panier" element={<Panier/>} />
            <Route path="connexion" element={<Connexion/>} />
            <Route path="inscription" element={<Inscription/>} />
            <Route path="profil" element={<Profil/>} />
            <Route path="commande" element={<Commander/>} />
            <Route path="*" element={<NoPage/>} />
            <Route path="inscription" element={<Inscription/>} />

          </Routes>

          <Footer />

        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
