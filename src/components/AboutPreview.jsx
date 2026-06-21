import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import ScrollReveal from './ScrollReview';

const AboutPreview = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#050507]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Write-up */}
          <ScrollReveal animation="animate-fade-in-left">
            <div className="order-2 lg:order-1">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-purple-600"></div>
                  <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest">
                    About
                  </p>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading leading-tight mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 bg-clip-text text-transparent">
                  The person behind the code.
                </h2>
              </div>

              <div className="space-y-5 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                <p>
                  I'm a passionate Web Developer and Software Engineering student based in Nigeria. 
                  I specialize in building <strong className="text-gray-900 dark:text-white">clear, performant, and beautiful web products</strong> 
                  that communicate effectively and provide exceptional user experiences.
                </p>
                <p>
                  My journey in tech started in 2024, and since then, I've been constantly learning and 
                  growing. I bring both technical precision and creative problem-solving to every project I work on.
                </p>
              </div>

              <button
                onClick={() => navigate('/about')}
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0f111a] text-gray-900 dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-white/5 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 group cursor-pointer"
              >
                More About Me
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </ScrollReveal>

          {/* RIGHT SIDE: Card */}
          <ScrollReveal animation="animate-fade-in-right" delay={200}>
            <div className="order-1 lg:order-2">
              <div className="bg-white dark:bg-[#0f111a] rounded-3xl border border-gray-200 dark:border-white/10 p-8 sm:p-10 shadow-xl">
                
                {/* Profile Section */}
                <div className="text-center mb-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-4xl font-bold text-white font-heading">
                    CT
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-2">
                    Covenant Tandu
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Web Developer · Software Engineering Student
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-white/10">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-purple-600 mb-1">3+</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-purple-600 mb-1">10+</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-purple-600 mb-1">∞</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Passion</p>
                  </div>
                </div>

                {/* Contact Links */}
                <div className="space-y-4">
                  <a 
                    href="https://linkedin.com/in/yourprofile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-500 border border-transparent transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <FaLinkedin className="text-blue-600 text-lg" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">LinkedIn</span>
                    </div>
                    <FaExternalLinkAlt className="text-gray-400 group-hover:text-purple-500 text-xs" />
                  </a>

                  <a 
                    href="mailto:covenanttandu.dev@gmail.com"
                    className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-500 border border-transparent transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <FaEnvelope className="text-red-500 text-lg" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">covenanttandu.dev@gmail.com</span>
                    </div>
                    <FaExternalLinkAlt className="text-gray-400 group-hover:text-purple-500 text-xs" />
                  </a>

                  <a 
                    href="https://github.com/Covenant-Tandu11" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-500 border border-transparent transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <FaGithub className="text-gray-800 dark:text-gray-200 text-lg" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">GitHub</span>
                    </div>
                    <FaExternalLinkAlt className="text-gray-400 group-hover:text-purple-500 text-xs" />
                  </a>
                </div>

              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;