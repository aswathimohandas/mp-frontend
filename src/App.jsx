import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pges/Home'
import Landing from './pges/Landing'
import History from './pges/History'
import Header from './components/Header'
import Footer from './components/Footer'
import Registration from './pges/Registration'
import Login from './pges/Login'
import { Routes,Route } from 'react-router-dom'
import { ToastContainer} from 'react-toastify'


function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/his' element={<History/>}/>
      <Route path='/reg' element={<Registration/>}/>
      <Route path='/log' element={<Login/>}/>
    </Routes>
    
    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default App
