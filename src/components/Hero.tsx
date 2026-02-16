import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-usaWhite-muted -z-0 hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-usaRed" />
              <span className="text-usaRed text-[10px] font-black uppercase tracking-[0.5em]">
                Estilo & Educação Premium
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-usaBlue-deep leading-[0.9] tracking-tighter uppercase mb-10">
              Cortes que <br />
              <span className="text-usaRed italic">Falam.</span>
            </h1>

            <p className="max-w-xl text-usaBlue-deep/60 text-lg md:text-xl mb-12 font-medium leading-relaxed">
              Resgatamos a essência da barbearia clássica com a precisão do design moderno. O destino final para o homem exigente e o futuro profissional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#contact" variant="primary">Agendar Serviço</Button>
              <Button href="#academy" variant="outline">Ver Cursos</Button>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-4 hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800"
                alt="Barber"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-premium"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 barber-stripe-thin opacity-20 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
