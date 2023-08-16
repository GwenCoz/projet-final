import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Affichage_produits from './components/Card_Plante/Affichage_produits';
import Panier from './components/panier';

import Affichage_article from './components/Card_Plante/Affichage_article';
import { CartProvider } from 'react-use-cart';
import Connexion from './components/Utilisateur/Connexion';

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



          </Routes>

        <Footer/>

      </BrowserRouter>
    </div>
    </CartProvider>
  );
}

export default App;
