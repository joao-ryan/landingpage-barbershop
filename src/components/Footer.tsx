
import React from 'react';
import { Scissors, Instagram, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-3 text-xl font-black tracking-tighter text-usaBlue-deep mb-8">
              <div className="w-8 h-8 bg-usaBlue-deep flex items-center justify-center">
                <Scissors className="text-white" size={16} />
              </div>
              <span>BLACK<span className="text-usaRed">BLADE</span></span>
            </a>
            <p className="text-gray-400 font-medium leading-relaxed mb-10 max-w-sm">
              Referência em barbearia clássica e educação de alta performance. Onde a tradição americana encontra a excelência brasileira.
            </p>
            <div className="flex gap-4">
              {[Instagram].map((Icon, i) => (
                <a key={i} href="https://www.instagram.com/ryancastro07_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-100 flex items-center justify-center text-usaBlue-deep hover:bg-usaBlue-deep hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
               {[Github].map((Icon, i) => (
                <a key={i} href="https://github.com/joao-ryan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-100 flex items-center justify-center text-usaBlue-deep hover:bg-usaBlue-deep hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
               {[Linkedin].map((Icon, i) => (
                <a key={i} href="https://www.linkedin.com/in/joao-ryan/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-100 flex items-center justify-center text-usaBlue-deep hover:bg-usaBlue-deep hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h5 className="font-black mb-8 uppercase tracking-widest text-[10px] text-usaRed">Links</h5>
            <ul className="space-y-4 text-usaBlue-deep/60 font-bold uppercase text-[10px] tracking-widest">
              <li><a href="#home" className="hover:text-usaRed transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-usaRed transition-colors">Serviços</a></li>
              <li><a href="#academy" className="hover:text-usaRed transition-colors">Academy</a></li>
              <li><a href="#gallery" className="hover:text-usaRed transition-colors">Galeria</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h5 className="font-black mb-8 uppercase tracking-widest text-[10px] text-usaRed">Funcionamento</h5>
            <ul className="space-y-4 text-usaBlue-deep/60 font-bold uppercase text-[10px] tracking-widest">
              <li className="flex justify-between border-b border-gray-50 pb-2"><span>Seg - Sex</span> <span>09:00 - 20:00</span></li>
              <li className="flex justify-between border-b border-gray-50 pb-2"><span>Sáb</span> <span>08:00 - 18:00</span></li>
              <li className="flex justify-between text-usaRed"><span>Dom</span> <span>Fechado</span></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h5 className="font-black mb-8 uppercase tracking-widest text-[10px] text-usaRed">Contato</h5>
            <ul className="space-y-6 text-gray-400 font-medium text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-usaRed shrink-0" />
                <span>Maracanaú - CE</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-usaRed shrink-0" />
                <span>+55 (85) 99177-9064</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-50 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-300 text-[9px] font-black uppercase tracking-[0.4em]">
            © 2026 João Ryan • Todos os direitos reservados
          </p>
          <div className="flex gap-8 text-[9px] font-black uppercase tracking-widest text-gray-300">
            <a href="#" className="hover:text-usaBlue-deep transition-colors">Privacidade</a>
            <a href="#" className="hover:text-usaBlue-deep transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
