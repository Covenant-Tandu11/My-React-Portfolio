import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReview';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual Formspree endpoint
      const response = await fetch('https://formspree.io/f/xaqgwabd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050507] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        
        {/* --- HEADER SECTION --- */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-purple-600"></div>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest">
                Get In Touch
              </p>
              <div className="w-8 h-0.5 bg-purple-600"></div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 bg-clip-text text-transparent">
              Let's build something <br className="hidden sm:block" />
              worth building.
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you have a project in mind, a team that needs a developer, or just want to start a conversation — my inbox is open.
            </p>

            {/* Email Button */}
            <a 
              href="mailto:covenanttandu.dev@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-[#5951D0]/30 bg-[#5951D0]/10 text-[#5951D0] hover:bg-[#5951D0]/20 transition-all duration-300 group font-mono text-sm sm:text-base"
            >
              <Mail className="w-5 h-5" />
              covenanttandu.dev@gmail.com
            </a>
          </div>
        </ScrollReveal>

        {/* --- CONTACT FORM --- */}
        <ScrollReveal delay={200}>
          <div className="bg-white dark:bg-[#0f111a] rounded-3xl border border-gray-200 dark:border-white/10 p-6 sm:p-10 shadow-xl">
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400">
                ✗ Something went wrong. Please try again or email me directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-mono text-gray-500 dark:text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-gray-50 dark:bg-[#050507] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#5951D0] focus:ring-1 focus:ring-[#5951D0] transition-all disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-gray-500 dark:text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-gray-50 dark:bg-[#050507] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#5951D0] focus:ring-1 focus:ring-[#5951D0] transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Subject Row */}
              <div>
                <label className="block text-sm font-mono text-gray-500 dark:text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project enquiry / Job opportunity / Collaboration"
                  required
                  disabled={isSubmitting}
                  className="w-full bg-gray-50 dark:bg-[#050507] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#5951D0] focus:ring-1 focus:ring-[#5951D0] transition-all disabled:opacity-50"
                />
              </div>

              {/* Message Row */}
              <div>
                <label className="block text-sm font-mono text-gray-500 dark:text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and what you're looking to achieve..."
                  rows="6"
                  required
                  disabled={isSubmitting}
                  className="w-full bg-gray-50 dark:bg-[#050507] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#5951D0] focus:ring-1 focus:ring-[#5951D0] transition-all resize-none disabled:opacity-50"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#5951D0] hover:bg-[#4a43b5] text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#5951D0]/30 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⟳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>

            </form>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default Contact;