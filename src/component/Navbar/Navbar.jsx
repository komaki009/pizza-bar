import React, { useState } from "react"
import "./Navbar.css"
import logo from "../../assets/logo.png"
import cartIcon from "../../assets/grocery-store.png"

const Navbar = () => {
  const [menu, setMenu] = useState("all")

  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("all")}
          className={menu === "all" ? "active" : ""}
        >
          所有餐點
        </li>
        <li
          onClick={() => setMenu("classic")}
          className={menu === "classic" ? "active" : ""}
        >
          經典口味
        </li>
        <li
          onClick={() => setMenu("new")}
          className={menu === "new" ? "active" : ""}
        >
          新口味
        </li>
        <li
          onClick={() => setMenu("non-staple-food")}
          className={menu === "non-staple-food" ? "active" : ""}
        >
          副食
        </li>
      </ul>
      <div className="navbar-right">
        <div className="navbar-cart">
          <img src={cartIcon} alt="" />
          <div className="dot"></div>
        </div>
        <button>登入</button>
      </div>
    </div>
  )
}

export default Navbar
