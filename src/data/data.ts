
import type { Service, Course, GalleryItem, Testimonial, Metric } from '../types/types';

export const services: Service[] = [
  {
    id: "1",
    name: "Corte Moderno",
    price: "R$ 65",
    duration: "45 min",
    description: "Degradê, Undercut ou Pompadour com finalização premium."
  },
  {
    id: "2",
    name: "Barba de Respeito",
    price: "R$ 45",
    duration: "30 min",
    description: "Toalha quente, hidratação e alinhamento preciso."
  },
  {
    id: "3",
    name: "Combo BlackBlade",
    price: "R$ 100",
    duration: "75 min",
    description: "Corte completo + Barboterapia completa."
  },
  {
    id: "4",
    name: "Sobrancelha",
    price: "R$ 20",
    duration: "15 min",
    description: "Limpeza e design manual na navalha."
  },
  {
    id: "5",
    name: "Corte Degradê",
    price: "R$ 55",
    duration: "40 min",
    description: "Low, mid ou high fade com acabamento na navalha."
  },
  {
    id: "6",
    name: "Corte Social",
    price: "R$ 50",
    duration: "35 min",
    description: "Corte clássico para o dia a dia ou ambiente profissional."
  },
  {
    id: "7",
    name: "Corte Completo",
    price: "R$ 70",
    duration: "50 min",
    description: "Corte detalhado com lavagem e finalização."
  },
  {
    id: "8",
    name: "Pezinho",
    price: "R$ 15",
    duration: "10 min",
    description: "Acabamento rápido na nuca e laterais."
  },
  {
    id: "9",
    name: "Barba Simples",
    price: "R$ 30",
    duration: "20 min",
    description: "Alinhamento e contorno básico da barba."
  },
  {
    id: "10",
    name: "Barboterapia Premium",
    price: "R$ 55",
    duration: "40 min",
    description: "Toalha quente, esfoliação, óleo e modelagem completa."
  },
  {
    id: "11",
    name: "Corte Infantil",
    price: "R$ 40",
    duration: "30 min",
    description: "Corte estiloso para crianças com acabamento suave."
  },
  {
    id: "12",
    name: "Pigmentação Capilar",
    price: "R$ 35",
    duration: "25 min",
    description: "Disfarce de falhas e realce do corte."
  },
  {
    id: "13",
    name: "Hidratação Capilar",
    price: "R$ 25",
    duration: "20 min",
    description: "Tratamento rápido para brilho e maciez."
  },
  {
    id: "14",
    name: "Combo Corte + Pezinho",
    price: "R$ 75",
    duration: "55 min",
    description: "Corte completo com acabamento na nuca."
  },
  {
    id: "15",
    name: "Combo Corte + Sobrancelha",
    price: "R$ 80",
    duration: "60 min",
    description: "Corte estiloso com design de sobrancelha."
  },
  {
    id: "16",
    name: "Dia do Noivo",
    price: "R$ 150",
    duration: "90 min",
    description: "Corte, barba premium, hidratação e finalização especial."
  }
];

export const courses: Course[] = [
  {
    id: 'c1',
    title: 'Workshop Iniciante',
    level: 'Iniciante',
    duration: '3 Meses',
    description: 'Do zero ao primeiro corte. Fundamentos de anatomia capilar e manuseio de ferramentas.'
  },
  {
    id: 'c2',
    title: 'Barbearia de Elite',
    level: 'Profissional',
    duration: '6 Meses',
    description: 'Técnicas avançadas de tesoura, colorimetria básica e gestão de barbearia.'
  },
  {
    id: 'c3',
    title: 'Mestre da Navalha',
    level: 'Especialização',
    duration: '1 Mês',
    description: 'Foco total em barboterapia, desenhos e acabamentos artísticos de alta precisão.'
  },
  {
    id: 'c4',
    title: 'Curso Completo',
    level: 'Barbeiro Completo Oficial',
    duration: '8 meses',
    description: 'Desenvolvimento de habilidades técnicas e gestão de barbearia, com capacidade de independencia plena e máximização de nivel de trabalho'
  }
];

export const galleryItems: GalleryItem[] = [
  { id: 'g1', title: 'Mid Fade Premium', imageUrl: 'https://picsum.photos/seed/cut1/600/600' },
  { id: 'g2', title: 'Pompadour Clássico', imageUrl: 'https://picsum.photos/seed/cut2/600/600' },
  { id: 'g3', title: 'Barboterapia Relax', imageUrl: 'https://picsum.photos/seed/cut3/600/600' },
  { id: 'g4', title: 'Buzz Cut Design', imageUrl: 'https://picsum.photos/seed/cut4/600/600' },
  { id: 'g5', title: 'Long Trim', imageUrl: 'https://picsum.photos/seed/cut5/600/600' },
  { id: 'g6', title: 'Executive Contour', imageUrl: 'https://picsum.photos/seed/cut6/600/600' },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ricardo Silva',
    role: 'Cliente Mensalista',
    content: 'A melhor experiência que já tive em uma barbearia. O atendimento é impecável e o ambiente é incrível.',
    avatar: 'https://i.pravatar.cc/150?u=ricardo'
  },
  {
    id: 't2',
    name: 'Lucas Mendes',
    role: 'Ex-aluno / Dono da "Mendes Cuts"',
    content: 'O curso mudou minha vida. Saí daqui pronto para o mercado e hoje tenho meu próprio negócio.',
    avatar: 'https://i.pravatar.cc/150?u=lucas'
  },
  {
    id: 't3',
    name: 'Gustavo Lima',
    role: 'Cliente Fiel',
    content: 'O cuidado com a barba é outro nível. A toalha quente é relaxante demais. Recomendo a todos!',
    avatar: 'https://i.pravatar.cc/150?u=gustavo'
  }
];

export const metrics: Metric[] = [
  { label: 'Cortes realizados', value: 1200, suffix: '+' },
  { label: 'Alunos formados', value: 300, suffix: '+' },
  { label: 'Anos de história', value: 5, suffix: '' },
];
