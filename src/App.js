
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS uchun kerakli CSS fayl
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Video from './components/Video';
import Headers from './Headers';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animatsiya davomiyligi
     
      delay: 100, // Animatsiya boshlanishigacha kechikish (millisekundda)
      easing: 'ease-in-out', // Animatsiya harakatini sozlash
    
    });
  }, []);
  return (
    
    <div className="App">
       
   
     <Headers/>  
      
     <main>
      <Hero/>
      <About/>
      <Projects/>

      <Contact/>
      <Video/>

     </main>
     <Footer/>
    </div>
  );
}

export default App;
