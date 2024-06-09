import  { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Logo_cloud from './components/Logo_cloud';
import Navbar from './components/Navbar';
import P_lists from './components/P_lists';
import Products from './components/Services';
import Promo from './components/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Team from './components/Company';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Promo />
      <Products />
      <P_lists />
      <Team/>
      <Logo_cloud />
      <Footer />
    </>
  );
}

export default App;
