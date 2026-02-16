
import React, { useState, useEffect } from 'react';
import { Scissors } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicial', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Academy', href: '#academy' },
    { name: 'Galeria', href: '#gallery' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass border-b border-gray-100 shadow-soft' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 text-xl font-black tracking-tighter text-usaBlue-deep">
          <div className="w-8 h-8 bg-usaBlue-deep flex items-center justify-center">
            <Scissors className="text-white" size={16} />
          </div>
          <span>BLACK<span className="text-usaRed">BLADE</span></span>
        </a>

        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold text-usaBlue-deep/60 hover:text-usaRed transition-colors uppercase tracking-[0.3em]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 border-2 border-usaRed text-usaRed text-[10px] font-black uppercase tracking-widest hover:bg-usaRed hover:text-white transition-all"
          >
            Reservar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
