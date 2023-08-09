import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header/>

          <Routes>

            {/* <Route path="/" element={<Layout/>} />
            <Route path="Test1" element={<Test1/>} />
            <Route path="*" element={<NoPage/>} /> */}

          </Routes>

        <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
