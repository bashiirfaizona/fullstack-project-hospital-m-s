import React from "react";
import Button from "../layouts/Button";

const Services = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&fit=crop",
      title: "Laboratory Management",
      description: "Automated specimen processing and result analysis systems"
    },
    {
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&fit=crop",
      title: "Surgical Coordination",
      description: "Integrated OR scheduling and resource management"
    },
    {
      image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&fit=crop",
      title: "Diagnostic Services",
      description: "Comprehensive testing with rapid turnaround times"
    },
    {
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&fit=crop",
      title: "EMR Systems",
      description: "Secure digital health records with interoperability"
    },
    {
      image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&fit=crop",
      title: "Patient Scheduling",
      description: "Intelligent appointment management platform"
    },
    {
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&fit=crop",
      title: "Radiology Suite",
      description: "Digital imaging with PACS integration"
    }
  ];

  return (
    <section id="services" className="bg-white py-0"> {/* Changed from py-12 to py-0 */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Hospital <span className="text-slate-700">Management Systems</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Integrated solutions for efficient healthcare administration
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-40 bg-gray-100 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect fill='%23f3f4f6' width='300' height='200'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='16' dy='.5em' text-anchor='middle' x='150' y='100'%3E300×200%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-slate-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <button className="text-sm text-slate-700 font-medium hover:text-slate-900 flex items-center transition-colors">
                  View Module
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button title="Request System Demo" className="px-6 py-2.5 text-sm hover:bg-slate-800 transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default Services;