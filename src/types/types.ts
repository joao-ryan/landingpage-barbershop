
export interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  level: 'Iniciante' | 'Profissional' | 'Especialização';
  description: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Metric {
  label: string;
  value: number;
  suffix: string;
}
