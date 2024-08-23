import React from "react"
import "./AppDownload.css"
import appStore from "../../assets/app_store.png"
import playStore from "../../assets/play_store.png"

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>App 下載</p>
      <div className="app-download-platforms">
        <img src={appStore} alt="" />
        <img src={playStore} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
