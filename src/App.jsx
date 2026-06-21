import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import SkillsPreview from './components/SkillsPreview';
import AboutPreview from './components/AboutPreview';
import ContactPreview from './components/ContactPreview';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact'; 
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';

function App() {
   useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      // No saved preference - use system preference and save it
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 font-sans transition-colors duration-300">
        <Loader/>
        <CustomCursor/>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <FeaturedProjects />
              <SkillsPreview />
              <AboutPreview />
              <ContactPreview />
              <Footer/>
            </>
          } />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> {/* Add this */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;