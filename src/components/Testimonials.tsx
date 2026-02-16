
import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/data';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Quote size={32} className="text-usaRed/20 mb-8" />
                <p className="text-usaBlue-deep text-lg font-medium italic mb-10 leading-relaxed">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 flex items-center justify-center font-black text-usaBlue-deep text-xs border border-gray-200">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-usaBlue-deep">{t.name}</h4>
                    <span className="text-[10px] text-usaRed font-bold uppercase tracking-widest">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
