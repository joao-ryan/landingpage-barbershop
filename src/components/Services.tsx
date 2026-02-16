
import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/data';
import { Scissors } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-usaWhite-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-usaRed text-[10px] font-black tracking-[0.4em] uppercase mb-4">The Barbershop</h2>
            <h3 className="text-4xl md:text-5xl font-black text-usaBlue-deep tracking-tighter uppercase">Nossos <span className="text-usaRed">Serviços</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border-b border-gray-200 pb-10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-baseline mb-4">
                    <h4 className="text-xl font-bold uppercase tracking-tight text-usaBlue-deep group-hover:text-usaRed transition-colors">
                      {service.name}
                    </h4>
                    <span className="text-lg font-black text-usaBlue-deep">{service.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                    {service.description}
                  </p>
                </div>
                <div className="text-[10px] font-bold text-usaBlue-light uppercase tracking-widest flex items-center gap-2">
                  <Scissors size={12} className="text-usaRed" />
                  <span>Duração: {service.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
