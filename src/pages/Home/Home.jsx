import React from "react"
import "./Home.css"
import Header from "../../component/Header/Header"
import FoodList from "../../component/FoodList/FoodList"
import AppDownload from "../../component/AppDownload/AppDownload"

const Home = () => {
  return (
    <div>
      <Header />
      <FoodList />
      <AppDownload />
    </div>
  )
}

export default Home
