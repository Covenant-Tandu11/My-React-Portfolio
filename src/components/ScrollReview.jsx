import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ScrollReveal = ({ children, animation = 'animate-fade-in-up', delay = 0, className = '' }) => {
  const ref = useScrollAnimation({ animation, delay });

  return (
    <div ref={ref} className={`scroll-hidden ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;