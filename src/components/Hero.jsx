import { useState, useRef } from 'react';
import { ArrowRight, ArrowDown, Code2, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xRotation = ((y - rect.height / 2) / rect.height) * -12;
        const yRotation = ((x - rect.width / 2) / rect.width) * 12;
        
        setMousePosition({ x: xRotation, y: yRotation });
    };

    const handleMouseLeave = () => setMousePosition({ x: 0, y: 0 });

    const scrollToNextSection = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gray-50 dark:bg-[#050507] transition-colors duration-500">
        
        {/* Background Blobs - Light Mode */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none dark:hidden">
            <div className="absolute top-[-10%] right-[-5%] w-150 h-150 bg-purple-200/40 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-pink-200/40 rounded-full blur-[120px]" />
            <div className="absolute top-[40%] left-[30%] w-100 h-100 bg-teal-100/40 rounded-full blur-[100px]" />
        </div>

        {/* Background Blobs - Dark Mode */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none hidden dark:block">
            <div className="absolute top-[-10%] right-[-5%] w-150 h-150 bg-purple-900/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-150 h-150 bg-indigo-900/20 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center pt-24 sm:pt-32 pb-20">
            
            {/* LEFT SIDE: Content */}
            <div className="space-y-6 sm:space-y-8 max-w-3xl order-2 lg:order-1 z-20">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm shadow-sm animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold leading-[0.9] tracking-tight text-gray-900 dark:text-white animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                Hi, I'm
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500">
                Covenant Tandu
                </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 font-medium tracking-wide flex flex-wrap gap-x-2 sm:gap-x-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <span>Web Developer</span>
                <span className="text-purple-500 hidden sm:inline mx-2">·</span>
                <span>Software Engineering Student</span>
                <span className="text-purple-500 hidden sm:inline mx-2">·</span>
                <span>Problem Solver</span>
            </p>

            {/* Write-up */}
            <p className="text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed text-sm sm:text-base md:text-lg animate-fade-in-up" style={{ animationDelay: '450ms' }}>
                A passionate developer focused on building scalable web applications, management systems, and intelligent digital solutions that solve real-world problems.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <button 
                    onClick={() => navigate('/projects')}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-semibold transition-all shadow-lg shadow-[#5951D0]/20 flex items-center gap-2 text-sm sm:text-base cursor-pointer"
                >
                    View Projects <ArrowRight className="w-4 h-4" />
                </button>
                <a href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-900 dark:text-white rounded-xl font-semibold transition-all text-sm sm:text-base">
                    Contact Me
                </a>
            </div>

            {/* Stats & Scroll Arrow */}
            <div className="pt-6 sm:pt-8 flex items-center gap-4 sm:gap-6 md:gap-8 border-t border-gray-200 dark:border-white/10 animate-fade-in-up" style={{ animationDelay: '750ms' }}>
                <div className="flex gap-4 sm:gap-6 md:gap-8">
                <div>
                    <p className="text-2xl sm:text-[24px] md:text-[28.8px] font-extrabold font-heading bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">3+</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 font-medium mt-1">Projects</p>
                </div>
                <div>
                    <p className="text-2xl sm:text-[24px] md:text-[28.8px] font-extrabold font-heading bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">1+</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 font-medium mt-1">Years Experience</p>
                </div>
                </div>
                
                {/* Bouncing Scroll Arrow */}
                <button 
                onClick={scrollToNextSection}
                className="ml-auto p-2.5 sm:p-3 rounded-full border border-gray-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/5 transition-all group animate-bounce"
                aria-label="Scroll down"
                >
                <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400 group-hover:text-[#5951D0]" />
                </button>
            </div>
            </div>

            {/* RIGHT SIDE - Code Card */}
            <div className="hidden lg:flex justify-center items-center perspective-1000 order-1 lg:order-2 relative z-20 animate-slide-in-right" style={{ animationDelay: '500ms' }}>
            <div 
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                transform: `rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg)`,
                transition: 'transform 0.1s ease-out'
                }}
                className="relative w-full max-w-md bg-white dark:bg-[#0f111a] border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl cursor-pointer"
            >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-6 sm:mb-8 border-b border-gray-100 dark:border-white/5 pb-4">
                <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500" />
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">developer.js</span>
                </div>

                {/* Code Content */}
                <div className="font-mono text-xs sm:text-sm md:text-base space-y-2">
                <p className="text-purple-500 dark:text-purple-400">const <span className="text-blue-500 dark:text-blue-400">developer</span> = {'{'}</p>
                <div className="pl-4 space-y-1">
                    <p><span className="text-pink-500 dark:text-pink-400">name:</span> <span className="text-green-600 dark:text-green-400">"Covenant Tandu"</span>,</p>
                    <p><span className="text-pink-500 dark:text-pink-400">role:</span> <span className="text-green-600 dark:text-green-400">"Web Developer"</span>,</p>
                    <p><span className="text-pink-500 dark:text-pink-400">based:</span> <span className="text-green-600 dark:text-green-400">"Nigeria"</span>,</p>
                    <p className='dark:text-gray-300'><span className="text-pink-500 dark:text-pink-400">stack:</span> [</p>
                    <div className="pl-4 space-y-1 text-gray-600 dark:text-gray-300">
                    <p>"React & Next.js",</p>
                    <p>"TypeScript",</p>
                    <p>"Tailwind CSS",</p>
                    <p>"Flutter"</p>
                    <p>"UI/UX Design"</p>
                    </div>
                    <p className='dark:text-gray-300'>],</p>
                    <p><span className="text-pink-500 dark:text-pink-400">available:</span> <span className="text-orange-500 dark:text-orange-400">true</span>,</p>
                </div>
                <p className="text-purple-500 dark:text-purple-400">{'}'}</p>
                </div>

                {/* Floating Icons */}
                <div className="absolute -right-4 sm:-right-6 top-10 sm:top-12 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10">
                <Code2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#5951D0]" />
                </div>
                <div className="absolute -left-2 sm:-left-4 bottom-20 sm:bottom-24 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10">
                <Terminal className="w-6 h-6 sm:w-7 sm:h-7 text-teal-500" />
                </div>
            </div>
            </div>

        </div>
        </section>
    );
};

export default Hero;