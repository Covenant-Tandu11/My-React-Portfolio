import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  // Initialize darkMode from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') return true;
    if (savedTheme === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Sync state with actual DOM state on mount
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  const getActiveLink = () => {
    if (location.pathname === '/projects') return 'Projects';
    if (location.pathname === '/skills') return 'Skills';
    if (location.pathname === '/about') return 'About';
    if (location.pathname === '/contact') return 'Contact';
    if (location.pathname === '/') {
      const hash = location.hash;
      if (hash === '#contact') return 'Contact';
      return 'Home';
    }
    return null;
  };

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleLinkClick = (linkName, path) => {
    setIsMenuOpen(false);
    
    if (path === '/projects' || path === '/skills' || path === '/about' || path === '/contact') {
      navigate(path);
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(linkName.toLowerCase());
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(linkName.toLowerCase());
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-4 bg-white/80 dark:bg-[#050507]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      
      {/* Logo */}
      <div className="text-xl md:text-2xl font-bold tracking-tight cursor-pointer z-50">
        <span className="text-[#5951D0]">&lt;</span>
        <span className="text-gray-900 dark:text-white">Covenant</span>
        <span className="text-[#5951D0]">/&gt;</span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleLinkClick(link.name, link.path)}
            className={`relative text-[13px] cursor-pointer font-medium transition-colors group ${
              getActiveLink() === link.name
                ? 'text-gray-900 dark:text-[#D3D3DC] font-bold' 
                : 'text-gray-500 dark:text-[#64647F] hover:text-gray-900 dark:hover:text-[#D3D3DC]'
            }`}
          >
            {link.name}
            {getActiveLink() === link.name && (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#6a61fb]"></span>
            )}
          </button>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer"
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <a 
          href="/resume.pdf" download

          className="px-6 py-2.5 text-sm rounded-xl border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 hover:-translate-y-1 hover:border-[#5951D0] hover:text-[#5951D0] transition-all duration-300"
        >
          Resume
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 text-gray-700 dark:text-gray-300 z-50"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-[#050507] border-b border-gray-200 dark:border-gray-800 md:hidden flex flex-col p-6 gap-6 shadow-xl animate-in slide-in-from-top-5 duration-300">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.name, link.path)}
              className={`text-lg font-medium text-left ${
                getActiveLink() === link.name
                  ? 'text-[#5951D0] font-bold' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {link.name}
            </button>
          ))}
          
          {/* Mobile Theme Toggle & Resume */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
            <button 
              onClick={toggleTheme}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              <span className="text-sm">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm rounded-xl border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
            >
              Resume
            </a>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;