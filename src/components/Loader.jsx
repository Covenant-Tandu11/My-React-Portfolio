import { useState, useEffect } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Increment progress randomly to simulate real loading
        const increment = Math.floor(Math.random() * 15) + 5;
        const newProgress = prev + increment;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          // Wait a tiny bit after hitting 100% before fading out
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return newProgress;
      });
    }, 150); // Speed of the loader

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-[#050507] transition-colors duration-300">
      
      {/* Logo */}
      <div className="mb-12 text-3xl font-bold font-heading tracking-tight">
        <span className="text-[#5951D0]">&lt;</span>
        <span className="text-gray-900 dark:text-white">Covenant</span>
        <span className="text-[#5951D0]">/&gt;</span>
      </div>

      {/* Progress Bar Container */}
      <div className="w-64 sm:w-80 h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-[#5951D0] rounded-full transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Percentage Text */}
      <p className="text-sm font-mono text-gray-500 dark:text-gray-400">
        {progress}%
      </p>

    </div>
  );
};

export default Loader;