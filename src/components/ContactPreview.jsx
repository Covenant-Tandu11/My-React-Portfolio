import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReview';

const ContactPreview = () => {
  const navigate = useNavigate();

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-white dark:bg-[#0a0a0f]">
      <div className="container mx-auto max-w-4xl">
        
        <ScrollReveal delay={100}>
          <div className="bg-gray-50 dark:bg-[#0f111a] rounded-3xl border border-gray-200 dark:border-white/10 p-8 sm:p-16 text-center">
            
            {/* Label */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-0.5 bg-purple-600"></div>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest">
                Let's Work Together
              </p>
              <div className="w-8 h-0.5 bg-purple-600"></div>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-6 leading-tight">
              Have a Project in Mind?
            </h2>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              I'm always excited to collaborate on interesting projects. 
              Whether it's a startup idea, internship opportunity, or open source contribution — 
              let's talk.
            </p>

            {/* CTA Button */}
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-1 group cursor-pointer"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default ContactPreview;