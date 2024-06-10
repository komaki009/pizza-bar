import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import Navbar from "./component/Navbar/Navbar"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
