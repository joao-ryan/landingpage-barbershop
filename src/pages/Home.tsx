import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import Courses from '../components/Courses';
import Services from '../components/Services';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Metrics />
      <Courses />
      <Services />
    </div>
  );
};

export default Home;
