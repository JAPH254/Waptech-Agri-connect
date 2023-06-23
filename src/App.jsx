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
import Logout from './WaptechComponents/Navbar/logout'
function App() {
  const [count, setCount] = useState(0)

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
      <Route path="/Farmers sharing" element={<Farmersharing/>} />
      {/* this code displays the farmers sharing tab */}
      <Route path="/Logout" element={<Logout/>} />
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
