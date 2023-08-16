import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Affichage_produits from './components/Card_Plante/Affichage_produits';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header/>

          <Routes>

            {/* <Route path="/" element={<Layout/>}/> */}
            <Route path="nos_plantes" element={<Affichage_produits/>} />
            {/* <Route path="*" element={<NoPage/>} /> */}

          </Routes>

        <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
