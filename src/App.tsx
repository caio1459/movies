import { Outlet } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import FavoritesProvider from "./contexts/favoritesContext"


function App() {
  return (
    <>
      <FavoritesProvider>
        <Header />
        <Outlet />
        <Footer />
      </FavoritesProvider>
    </>
  )
}

export default App