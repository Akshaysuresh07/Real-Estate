
import React from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import Sell from './pages/Sell'
import Buy from './pages/Buy'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Favourite from './pages/Favourites'

function App() {


  return (
    <>
     <Header/>
     <Routes>
     <Route path ="/" element={<LandingPage/>}/>
     <Route path ="/Sell" element={<Sell/>}/>
     <Route path ="/Buy" element={<Buy/>}/>
     <Route path ="/Favourites" element={<Favourite/>}/>
      </Routes>
        

   
      <Footer/>
    </>
  )
}

export default App
