import React from "react";
import { 
  FaClinicMedical, 
  FaProcedures, 
  FaMicroscope, 
  FaXRay
} from "react-icons/fa";

const Facilities = () => {
  const facilities = [
    {
      icon: <FaClinicMedical className="text-2xl text-blue-600" />,
      title: "Outpatient Clinic",
      description: "25 consultation rooms with telemedicine capabilities and strict infection control standards.",
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&fit=crop"
    },
    {
      icon: <FaProcedures className="text-2xl text-blue-600" />,
      title: "Operation Theaters",
      description: "6 modular ORs with HEPA filtration and 4K laparoscopic towers for precision surgery.",
      image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&fit=crop"
    },
    {
      icon: <FaMicroscope className="text-2xl text-blue-600" />,
      title: "Pathology Lab",
      description: "CAP-accredited lab with automated analyzers and 24-hour test turnaround.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&fit=crop"
    },
    {
      icon: <FaXRay className="text-2xl text-blue-600" />,
      title: "Imaging Center",
      description: "3T MRI and 128-slice CT with AI-assisted interpretation and dose optimization.",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&fit=crop"
    }
  ];

  return (
    <section className="text-gray-800 bg-white py-12" id="facilities">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Our <span className="text-slate-800">Medical Facilities</span>
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            Advanced healthcare technology with patient-centered design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100"
            >
              <div className="h-40 overflow-hidden">
                <img
                  alt={facility.title}
                  className="w-full h-full object-cover"
                  src={facility.image}
                />
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <div className="p-2 bg-blue-50 rounded-lg mr-3">
                    {facility.icon}
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {facility.title}
                  </h2>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  {facility.description}
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <svg className="w-3 h-3 text-blue-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Certified specialists</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-5 py-2 bg-slate-800 hover:bg-emerald-600 text-white text-sm font-medium rounded-md transition-colors">
            View All Facilities
            <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Facilities;