import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './WaptechComponents/Header'
import Footer from './WaptechComponents/Footer'
import Homepage from './WaptechComponents/Homepage/Data Analytics/Homepage'
import Farmersharing from './WaptechComponents/Navbar/FarmerToFarmer'
import NotFound from './WaptechComponents/NotFoundPage'
import ContactUs from './WaptechComponents/Navbar/ContactUs'
import Register from './WaptechComponents/auth.jsx/Register'
import './App.css'
import Login from './WaptechComponents/auth.jsx/login'
import { Context } from './WaptechComponents/context/userContext/Context'
import { useContext } from 'react'
function App() {
  const {user}=useContext(Context)

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes >
      <Route path='/' element={<Homepage/>} />
      {/* the above code displays the Home page in the system */}
      <Route path='/Register' element={<Register/>}/>
      {/* The  user registration page */}
      <Route path='/login' element={<Login/>}/>
      {/* this is the login page  */}
      <Route path="/Farmers sharing" element={user ? <Farmersharing/> : <Homepage/>} />
      {/* this code displays the farmers sharing tab */}
      {/* this opens the trainings tab */}
      <Route path="/Contact Us" element={<ContactUs/>} />
      {/* the contacts tab */}
      <Route path="*" element={<NotFound/>} />
      {/* the contacts tab */}
   
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
