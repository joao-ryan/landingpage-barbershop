import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import Courses from '../components/Courses';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Metrics />
      <Courses />
      <Services />
      <Gallery />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
