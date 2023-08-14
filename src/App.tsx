import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Affichage_produits from './components/Card_Plante/Affichage_produits';
import Affichage_article from './components/Card_Plante/Affichage_article';



function App() {

  return (
    <div className="App">

      <BrowserRouter>

        <Header/>

          <Routes>

            {/* <Route path="/" element={<Layout/>}/> */}
            <Route path="nos_plantes" element={<Affichage_produits/>} />
            <Route path="page_article/:id" element={<Affichage_article/>} />
            <Route path="page_article2/:nom" element={<Affichage_article/>} />



          </Routes>

        <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
