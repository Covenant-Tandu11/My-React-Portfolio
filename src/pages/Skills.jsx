import { useState } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaMobileScreenButton,
  FaGithub, FaFigma
} from 'react-icons/fa6';
import {
  SiVercel, SiMysql, SiFirebase
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import ScrollReveal from '../components/ScrollReview';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Frontend', 'Tools', 'Databases'];

  const skillsData = {
    Frontend: {
      dotColor: 'bg-purple-500',
      barColor: 'bg-purple-500',
      textColor: 'text-purple-600 dark:text-purple-400',
      proficiencyColors: {
        EXPERT: 'text-purple-600 dark:text-purple-400',
        PROFICIENT: 'text-purple-500 dark:text-purple-400',
        LEARNING: 'text-purple-400 dark:text-purple-300'
      },
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="text-blue-500" />, level: 92, proficiency: 'EXPERT' },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" />, level: 80, proficiency: 'PROFICIENT' },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />, level: 60, proficiency: 'PROFICIENT' },
        { name: 'React', icon: <FaReact className="text-cyan-400" />, level: 50, proficiency: 'PROFICIENT' },
        { name: 'Responsive Design', icon: <FaMobileScreenButton className="text-purple-500" />, level: 85, proficiency: 'EXPERT' },
      ]
    },
    Tools: {
      dotColor: 'bg-orange-500',
      barColor: 'bg-orange-500',
      textColor: 'text-orange-500 dark:text-orange-400',
      proficiencyColors: {
        EXPERT: 'text-orange-600 dark:text-orange-400',
        PROFICIENT: 'text-orange-500 dark:text-orange-400',
        LEARNING: 'text-orange-400 dark:text-orange-300'
      },
      skills: [
        { name: 'Git & GitHub', icon: <FaGithub className="text-gray-800 dark:text-gray-200" />, level: 85, proficiency: 'EXPERT' },
        { name: 'VS Code', icon: <VscCode className="text-blue-500" />, level: 95, proficiency: 'EXPERT' },
        { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" />, level: 70, proficiency: 'PROFICIENT' },
        { name: 'Figma', icon: <FaFigma className="text-purple-600" />, level: 65, proficiency: 'LEARNING' },
      ]
    },
    Databases: {
      dotColor: 'bg-teal-500',
      barColor: 'bg-teal-500',
      textColor: 'text-teal-500 dark:text-teal-400',
      proficiencyColors: {
        EXPERT: 'text-teal-600 dark:text-teal-400',
        PROFICIENT: 'text-teal-500 dark:text-teal-400',
        LEARNING: 'text-teal-400 dark:text-teal-300'
      },
      skills: [
        { name: 'MySQL', icon: <SiMysql className="text-blue-500" />, level: 10, proficiency: 'LEARNING' },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" />, level: 10, proficiency: 'LEARNING' },
      ]
    }
  };

  const categoriesToRender = activeFilter === 'All' 
    ? Object.keys(skillsData) 
    : [activeFilter];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050507] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <ScrollReveal>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-purple-600"></div>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest">
                My Skills
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 bg-clip-text text-transparent leading-tight">
              Skills & Expertise
            </h1>
          </div>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal delay={150}>
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white dark:bg-[#0f111a] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Render Categories */}
        {categoriesToRender.map((categoryKey, index) => {
          const category = skillsData[categoryKey];
          
          return (
            <ScrollReveal key={categoryKey} delay={index * 200}>
              <div className="mb-12 last:mb-0">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-3 h-3 rounded-full ${category.dotColor}`}></div>
                  <h2 className={`text-2xl sm:text-3xl font-bold font-heading ${category.textColor}`}>
                    {categoryKey}
                  </h2>
                </div>

                {/* Skills Card */}
                <div className="bg-white dark:bg-[#0f111a] rounded-3xl border border-gray-200 dark:border-white/10 p-6 sm:p-8 lg:p-10">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    
                    {/* Left: Icon Badges */}
                    <div className="flex flex-wrap gap-4">
                      {category.skills.map((skill, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center justify-center p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 min-w-[100px] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                          <span className="text-3xl mb-2">{skill.icon}</span>
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center mb-1">
                            {skill.name}
                          </span>
                          <span className={`text-[10px] font-bold uppercase tracking-wider ${category.proficiencyColors[skill.proficiency]}`}>
                            {skill.proficiency}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Right: Progress Bars */}
                    <div className="space-y-6">
                      {category.skills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{skill.icon}</span>
                              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                {skill.name}
                              </span>
                            </div>
                            <span className={`text-sm font-bold ${category.textColor}`}>
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${category.barColor} rounded-full transition-all duration-1000 ease-out`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}

      </div>
    </div>
  );
};

export default Skills;