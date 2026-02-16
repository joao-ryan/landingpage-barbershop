
import React from 'react';
import { motion } from 'framer-motion';
import { galleryItems } from '../data/data';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-32 bg-usaWhite-muted">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-usaRed text-[10px] font-black tracking-[0.4em] uppercase mb-4">Visual Work</h2>
            <h3 className="text-4xl md:text-5xl font-black text-usaBlue-deep tracking-tighter uppercase">Nossa <span className="text-usaRed">Galeria</span></h3>
          </div>
          <div className="text-gray-400 font-bold text-xs uppercase tracking-widest">
            #BlackBladeStyle
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden group"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-usaBlue-deep/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-8">
                <span className="text-usaRed text-[10px] font-black uppercase tracking-widest mb-4">Corte de Elite</span>
                <h4 className="text-white text-xl font-black uppercase tracking-tighter">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
