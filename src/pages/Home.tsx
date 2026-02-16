import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import Courses from '../components/Courses';
import Services from '../components/Services';
import Gallery from '../components/Gallery';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Metrics />
      <Courses />
      <Services />
      <Gallery />
    </div>
  );
};

export default Home;
