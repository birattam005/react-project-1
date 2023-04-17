import React from 'react'
import Header from './MyComponets/Header';
import Home from './MyComponets/Home';
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


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App

