import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './WaptechComponents/Header'
import Footer from './WaptechComponents/Footer'
import Homepage from './WaptechComponents/Homepage/Homepage'
import DataAnalytics from './WaptechComponents/Homepage/Data Analytics/DataAnalytics'
import Farmersharing from './WaptechComponents/Navbar/FarmerToFarmer'
import Trainings from './WaptechComponents/Navbar/Trainigs'
import NotFound from './WaptechComponents/NotFoundPage'
import ContactUs from './WaptechComponents/Navbar/ContactUs'
import './App.css'
import MarketLinkage from './WaptechComponents/Navbar/MarketLinkage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes >
      <Route path='/' element={<Homepage/>} />
      {/* the above code displays the Home page in the system */}
      <Route path="/Data Analytics" element ={<DataAnalytics/>} />
      {/* this code displays the Data Analytics tab */}
      <Route path="/Farmers sharing" element={<Farmersharing/>} />
      {/* this code displays the farmers sharing tab */}
      <Route path="/Market linkage" element={<MarketLinkage/>} />
      {/* this is the market linkagee tab. */}
      <Route path="/Trainings" element={<Trainings/>} />
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
