import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Logo_cloud from './components/Logo_cloud'
import Navbar from './components/Navbar'
import P_lists from './components/P_lists'
import Products from './components/Products'
import Promo from './components/Promo'
function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Promo/>
      <Products/>
      <P_lists/>
      <Logo_cloud/>
      
      <Footer/>
    </>
  )
}

export default App
