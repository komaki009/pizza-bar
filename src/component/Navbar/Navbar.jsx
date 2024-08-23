import React, { useContext, useState } from "react"
import "./Navbar.css"
import logo from "../../assets/logo.png"
import cartIcon from "../../assets/grocery-store.png"
import { Link } from "react-router-dom"
import { StoreContext } from "../../context/StoreContext"
import { HashLink } from "react-router-hash-link"

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("all")
  const { cart } = useContext(StoreContext)

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
    const yOffset = -100
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" })
  }

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("all")}
          className={menu === "all" ? "active" : ""}
        >
          首頁
        </Link>
        <HashLink
          smooth
          to="/#food-list"
          scroll={scrollWithOffset}
          onClick={() => setMenu("classic")}
          className={menu === "classic" ? "active" : ""}
        >
          餐點
        </HashLink>
        <HashLink
          smooth
          to="/#app-download"
          scroll={scrollWithOffset}
          onClick={() => setMenu("new")}
          className={menu === "new" ? "active" : ""}
        >
          下載
        </HashLink>
        <HashLink
          smooth
          to="/#footer"
          scroll={scrollWithOffset}
          onClick={() => setMenu("non-staple-food")}
          className={menu === "non-staple-food" ? "active" : ""}
        >
          關於
        </HashLink>
      </ul>
      <div className="navbar-right">
        <div className="navbar-cart">
          <Link to="/cart">
            <img src={cartIcon} alt="" />
          </Link>
          {cart.length > 0 && <div className="dot"></div>}
        </div>
        <button onClick={() => setShowLogin(true)}>登入</button>
      </div>
    </div>
  )
}

export default Navbar
