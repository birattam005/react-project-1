import React from 'react'
import Header from './MyComponets/Header';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import "./styles/App.scss"
import "./styles/colors.scss"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route />
      </Routes>
    </Router>
  )
}

export default App

