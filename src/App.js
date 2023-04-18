import React from 'react'
import Header from './MyComponets/Header';
import Home from './MyComponets/Home';
import Footer from './MyComponets/Footer';
import Contact from './MyComponets/Contact';
import Services from './MyComponets/Services';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import "./styles/App.scss"
import "./styles/colors.scss"
import "./styles/Header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import "./styles/mediaquery.scss"


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/services" element={<Services />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

