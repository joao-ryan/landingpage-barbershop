
import React from 'react';
import { motion } from 'framer-motion';
import { courses } from '../data/data';
import { GraduationCap, ArrowRight } from 'lucide-react';
import Button from './Button';

const Courses: React.FC = () => {
  return (
    <section id="academy" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <h2 className="text-usaRed text-[10px] font-black tracking-[0.4em] uppercase mb-4">The Academy</h2>
            <h3 className="text-5xl font-black text-usaBlue-deep leading-none tracking-tighter uppercase mb-8">
              Torne-se <br />um <span className="text-usaRed">Mestre.</span>
            </h3>
            <p className="text-gray-500 font-medium mb-10 leading-relaxed">
              O instituto BlackBlade forma profissionais prontos para o mercado de luxo. Técnica impecável e gestão de carreira.
            </p>
            <div className="w-full h-1 barber-stripe-thin opacity-30" />
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 bg-white border border-gray-100 shadow-soft hover:shadow-premium transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-usaBlue-deep text-white flex items-center justify-center mb-8 group-hover:bg-usaRed transition-colors">
                  <GraduationCap size={24} />
                </div>
                <span className="text-[10px] font-black text-usaRed uppercase tracking-widest mb-4 block">
                  {course.level}
                </span>
                <h4 className="text-2xl font-black text-usaBlue-deep uppercase mb-4 leading-tight">
                  {course.title}
                </h4>
                <p className="text-gray-500 text-sm mb-10 leading-relaxed font-medium">
                  {course.description}
                </p>
                <div className="flex items-center justify-between pt-8 border-t border-gray-50 text-[10px] font-black uppercase tracking-widest text-usaBlue-deep">
                  <span>{course.duration}</span>
                  <a href="#" className="flex items-center gap-2 hover:text-usaRed transition-colors">
                    Detalhes <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
