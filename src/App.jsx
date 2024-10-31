import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark'); // Add dark class to the HTML element
  }, []);
  return (
    <div className="mx-auto">
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default App;
