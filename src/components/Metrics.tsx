
import React from 'react';
import { motion } from 'framer-motion';
import { metrics } from '../data/data';

const Metrics: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center md:text-left flex flex-col md:flex-row items-center gap-6"
            >
              <div className="text-5xl lg:text-7xl font-black text-usaBlue-deep italic tracking-tighter">
                <Counter value={metric.value} />
                <span className="text-usaRed">{metric.suffix}</span>
              </div>
              <div className="h-10 w-[1px] bg-usaRed hidden md:block" />
              <p className="text-usaBlue-deep/40 font-black uppercase tracking-[0.3em] text-[10px] max-w-[120px]">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter: React.FC<{ value: number }> = ({ value }) => {
  const [count, setCount] = React.useState(0);
  const nodeRef = React.useRef(null);

  React.useEffect(() => {
    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    });

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={nodeRef}>{count}</span>;
};

export default Metrics;
