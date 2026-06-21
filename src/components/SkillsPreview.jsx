import { useNavigate } from 'react-router-dom';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaMobileScreenButton,
   FaGithub, FaFigma,
} from 'react-icons/fa6';
import {
  SiVercel,SiMysql, SiFirebase
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import ScrollReveal from './ScrollReview';

const SkillsPreview = () => {
  const navigate = useNavigate();

  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-blue-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Responsive Design', icon: <FaMobileScreenButton className="text-purple-500" /> },
    { name: 'Git & GitHub', icon: <FaGithub className="text-gray-800 dark:text-gray-200" /> },
    { name: 'VS Code', icon: <VscCode className="text-blue-500" /> },
    { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" /> },
    { name: 'Figma', icon: <FaFigma className="text-purple-600" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0f]">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header with Animation */}
        <ScrollReveal>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-purple-600"></div>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest">
                Tech Stack
              </p>
            </div>
            <h2 className="bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-5xl font-bold font-heading bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 leading-tight">
              What I Work With
            </h2>
          </div>
        </ScrollReveal>

        {/* Skills Grid with Staggered Animations */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-12">
          {skills.map((skill, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div
                className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0f111a] hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-default group"
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Skills Button with Delay */}
        <ScrollReveal delay={skills.length * 80 + 100}>
          <button
            onClick={() => navigate('/skills')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0f111a] text-gray-900 dark:text-white font-semibold hover:bg-gray-50 dark:hover:bg-white/5 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 group cursor-pointer"
          >
            View All Skills
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default SkillsPreview;