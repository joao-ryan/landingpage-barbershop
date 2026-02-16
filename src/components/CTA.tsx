
import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-usaBlue-deep text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full barber-stripe-thin opacity-5 rotate-12 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl md:text-7xl font-black mb-10 leading-none tracking-tighter uppercase">
              Seu estilo <br /><span className="text-usaRed">Começa aqui.</span>
            </h3>
            <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto font-medium">
              Agende seu horário com nossos especialistas ou garanta sua vaga na próxima turma da Academy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="secondary" className="px-14 py-6 text-sm">Agendar Online</Button>
              <Button variant="outline" className="px-14 py-6 text-sm border-white text-white hover:bg-white hover:text-usaBlue-deep">Ver Localização</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
