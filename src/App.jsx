import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import Navbar from "./component/Navbar/Navbar"
import FoodDetail from "./pages/FoodDetail/FoodDetail"
import Footer from "./component/Footer/Footer"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="food/:id" element={<FoodDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
