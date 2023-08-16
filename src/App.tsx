import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Affichage_produits from './components/Card_Plante/Affichage_produits';
<<<<<<< Updated upstream
=======
import Affichage_article from './components/Card_Plante/Affichage_article';
import Panier from './components/Panier';
import { CartProvider } from 'react-use-cart';
import Connexion from './components/Utilisateur/Connexion';




>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header/>

          <Routes>


            <Route path="nos_plantes" element={<Affichage_produits/>} />
<<<<<<< Updated upstream
            {/* <Route path="*" element={<NoPage/>} /> */}
=======
            <Route path="page_article/:id" element={<Affichage_article/>} />
            <Route path="page_article2/:nom" element={<Affichage_article/>} />
            <Route path="panier" element={<Panier/>} />
            <Route path="connexion" element={<Connexion/>} />


>>>>>>> Stashed changes

          </Routes>

        <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
