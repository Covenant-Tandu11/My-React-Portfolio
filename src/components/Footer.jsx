import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#050507]">
      <div className="container mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {year} Covenant Tandu. All rights reserved.
        </p>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          {['About', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => navigate(`/${item.toLowerCase()}`)}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#5951D0] dark:hover:text-[#5951D0] transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;