// import logo from './logo.svg';
import React from 'react'
import {BrowserRouter,  Routes ,Route} from "react-router-dom"

import Home from "./components/Home/Home"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetails from './components/MovieDetails/MovieDetails';

import "./App.scss"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
     <Header/>
      <div className='container'>
      <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path ="/movie/:imdbID" element ={<MovieDetails/>}/>
        <Route element={<PageNotFound/>}/>
        
       </Routes>
       </div>
        <Footer/>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
