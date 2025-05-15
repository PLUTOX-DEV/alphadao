// src/components/Services.tsx
import React from 'react';
import Header from '../component/Header';
import Footer from '../component/footer';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: 'AI Development',
      description: 'Leverage cutting-edge AI to transform your business operations.',
      icon: 'https://via.placeholder.com/50',
    },
    {
      title: 'Blockchain Solutions',
      description: 'Secure and scalable blockchain implementations for all industries.',
      icon: 'https://via.placeholder.com/50',
    },
    {
      title: 'Custom Software',
      description: 'Tailored software solutions to meet your unique needs.',
      icon: 'https://via.placeholder.com/50',
    },
  ];

  return (
    <div
      className="min-h-screen bg-gray-900 flex flex-col"
      style={{
        backgroundSize: 'max',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className='bg-transparent'>
        <Header />
        </div>
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold text-white  text-center mb-8 mt-7">
          Our Services
        </h1>
        <p className="text-white text-center max-w-2xl mx-auto mb-12">
          Discover how DOA Labs can empower your business with innovative technology solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;