import { 
    FaLinkedin, FaGithub, FaEnvelope, FaCode, FaReact
} from 'react-icons/fa';
import { 
    SiTypescript, SiFlutter, SiJavascript 
} from 'react-icons/si';
import { 
    MapPin, Calendar, ArrowUpRight 
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReview';

const About = () => {
    const journey = [
        {
            year: '2024',
            title: 'The Foundation',
            desc: 'Started my journey by mastering the core building blocks of the web.',
            tech: [<FaCode key="code" />, <SiJavascript key="js" />],
            color: 'border-blue-500 bg-blue-500/10 text-blue-600 dark:text-blue-400'
        },
        {
            year: '2025',
            title: 'Component Architecture',
            desc: 'Transitioned to modern frontend development, building scalable UIs.',
            tech: [<FaReact key="react" />],
            color: 'border-cyan-500 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
        },
        {
            year: 'Present',
            title: 'Full Ecosystem',
            desc: 'Expanding into type-safe development and cross-platform mobile apps.',
            tech: [<SiTypescript key="ts" />, <SiFlutter key="flutter" />],
            color: 'border-purple-500 bg-purple-500/10 text-purple-600 dark:text-purple-400'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#050507] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-7xl">
                
                {/* --- HEADER --- */}
                <ScrollReveal className="mb-16 text-center sm:text-left">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-0.5 bg-purple-600"></div>
                        <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest">
                            About Me
                        </p>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-heading leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500">
                        The person <br className="hidden sm:block" />
                        behind the code.
                    </h1>
                </ScrollReveal>

                {/* --- GRID LAYOUT --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <ScrollReveal animation="animate-fade-in-left" className="md:col-span-2">
                        <div className="bg-white dark:bg-[#0f111a] rounded-3xl border border-gray-200 dark:border-white/10 p-8 sm:p-10 hover:shadow-xl transition-shadow duration-300 h-full">
                            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-6">
                                Hello, I'm Covenant.
                            </h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                                <p>
                                    I'm a passionate Web Developer and Software Engineering student based in Nigeria. 
                                    My journey into tech is driven by a simple belief: <strong className="text-gray-900 dark:text-white">great software should feel invisible.</strong>
                                </p>
                                <p>
                                    I specialize in building clear, performant, and beautiful web products. Whether it's a complex dashboard or a sleek landing page, I focus on clean architecture, user-centered design, and writing code that scales.
                                </p>
                                <p>
                                    When I'm not debugging, I'm exploring new frameworks, contributing to open-source, or refining my UI/UX skills to bridge the gap between design and engineering.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal animation="animate-fade-in-right" delay={200} className="flex flex-col gap-6">
                        {/* Location & Status */}
                        <div className="bg-white dark:bg-[#0f111a] rounded-3xl border border-gray-200 dark:border-white/10 p-6 flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <MapPin className="w-5 h-5 text-purple-500" />
                                <span className="font-semibold text-gray-900 dark:text-white">Based in Nigeria</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                </div>
                                <span className="text-sm text-gray-600 dark:text-gray-400">Available for work</span>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 text-white flex-1 flex flex-col justify-center">
                            <div className="flex items-baseline gap-2 mb-1">
                                <span className="text-5xl font-bold font-heading">3+</span>
                                <span className="text-sm font-medium opacity-80">Years Coding</span>
                            </div>
                            <div className="h-px w-full bg-white/20 my-4"></div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold font-heading">10+</span>
                                <span className="text-sm font-medium opacity-80">Projects Shipped</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* --- LEARNING PATH --- */}
                <div className="mb-16">
                    <ScrollReveal className="mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold font-heading bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 bg-clip-text text-transparent flex items-center gap-3">
                            <Calendar className="w-6 h-6 text-purple-500" /> My Learning Path
                        </h2>
                    </ScrollReveal>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        {journey.map((item, index) => (
                            <ScrollReveal key={index} delay={index * 150}>
                                <div 
                                    className={`group relative bg-white dark:bg-[#0f111a] rounded-3xl border border-gray-200 dark:border-white/10 p-6 hover:-translate-y-2 transition-transform duration-300 overflow-hidden h-full`}
                                >
                                    {/* Top Accent Line */}
                                    <div className={`absolute top-0 left-0 w-full h-1 ${item.color.split(' ')[0].replace('border', 'bg')}`}></div>
                                    
                                    <div className="flex items-center justify-between mb-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.color}`}>
                                            {item.year}
                                        </span>
                                        <div className="flex gap-2 text-lg text-gray-400 dark:text-gray-500">
                                            {item.tech}
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* --- CONNECT SECTION --- */}
                <div>
                    <ScrollReveal className="mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold font-heading bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 bg-clip-text text-transparent">
                            Let's build something together.
                        </h2>
                    </ScrollReveal>
                    
                    <div className="grid sm:grid-cols-3 gap-4">
                        <ScrollReveal delay={0}>
                            <a 
                                href="mailto:covenanttandu@gmail.com"
                                className="flex items-center justify-between p-6 rounded-2xl bg-white dark:bg-[#0f111a] border border-gray-200 dark:border-white/10 hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-lg transition-all duration-300 group h-full"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-500">
                                        <FaEnvelope className="text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-white">Email Me</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">covenanttandu.dev@gmail.com</p>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </ScrollReveal>

                        <ScrollReveal delay={150}>
                            <a 
                                href="https://linkedin.com/in/yourprofile" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-6 rounded-2xl bg-white dark:bg-[#0f111a] border border-gray-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 group h-full"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600">
                                        <FaLinkedin className="text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-white">LinkedIn</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Connect professionally</p>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </ScrollReveal>

                        <ScrollReveal delay={300}>
                            <a 
                                href="https://github.com/Covenant-Tandu11" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-6 rounded-2xl bg-white dark:bg-[#0f111a] border border-gray-200 dark:border-white/10 hover:border-gray-800 dark:hover:border-gray-200 hover:shadow-lg transition-all duration-300 group h-full"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                                        <FaGithub className="text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-white">GitHub</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">View my code</p>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </ScrollReveal>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;