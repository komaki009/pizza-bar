import foodsData from "../data/FOOD_DATA.json"
import { createContext, useState } from "react"

export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
  const [foods, setFoods] = useState(foodsData)

  return (
    <StoreContext.Provider value={{ foods, setFoods }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
