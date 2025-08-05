import React from "react";
import { FaStethoscope, FaHeartbeat, FaBrain, FaTooth, FaEye, FaBone, FaChild } from "react-icons/fa";
import { BsFileMedical } from "react-icons/bs";
import { RiPsychotherapyLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";

const Doctors = () => {
  const specialties = [
    { name: "All Specialties", icon: <FaStethoscope className="mr-2" /> },
    { name: "Cardiology", icon: <FaHeartbeat className="mr-2" /> },
    { name: "Neurology", icon: <FaBrain className="mr-2" /> },
    { name: "Pediatrics", icon: <FaChild className="mr-2" /> },
    { name: "Dentistry", icon: <FaTooth className="mr-2" /> },
    { name: "Ophthalmology", icon: <FaEye className="mr-2" /> },
    { name: "Orthopedics", icon: <FaBone className="mr-2" /> },
    { name: "General Medicine", icon: <BsFileMedical className="mr-2" /> },
    { name: "Psychiatry", icon: <RiPsychotherapyLine className="mr-2" /> },
  ];

  // Uniformed doctor images in professional attire
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      experience: "15 years",
      description: "Interventional cardiologist specializing in complex coronary procedures.",
      image: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      experience: "12 years",
      description: "Specializes in treating neurodegenerative disorders and stroke management.",
      image: "https://img.freepik.com/free-photo/young-male-doctor-wearing-medical-robe-stethoscope_1303-17817.jpg",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      experience: "8 years",
      description: "Board-certified pediatrician focused on childhood development and preventive care.",
      image: "https://img.freepik.com/free-photo/young-female-doctor-posing-corridor-hospital_1303-21212.jpg",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedics",
      experience: "18 years",
      description: "Orthopedic surgeon specializing in minimally invasive joint replacement.",
      image: "https://img.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg",
    },
    {
      id: 5,
      name: "Dr. Olivia Park",
      specialty: "Dentistry",
      experience: "10 years",
      description: "Cosmetic dentist offering veneers, teeth whitening, and restorative procedures.",
      image: "https://img.freepik.com/free-photo/portrait-female-doctor_144627-29279.jpg",
    },
    {
      id: 6,
      name: "Dr. Robert Kim",
      specialty: "Ophthalmology",
      experience: "14 years",
      description: "Retinal specialist and cataract surgeon with expertise in diabetic eye disease.",
      image: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg",
    },
    {
      id: 7,
      name: "Dr. Aisha Mohammed",
      specialty: "Psychiatry",
      experience: "9 years",
      description: "Adult and adolescent psychiatrist specializing in cognitive behavioral therapy.",
      image: "https://img.freepik.com/free-photo/young-female-doctor-posing-corridor-hospital_1303-21212.jpg",
    },
    {
      id: 8,
      name: "Dr. David Miller",
      specialty: "General Medicine",
      experience: "20 years",
      description: "Primary care physician with emphasis on preventive medicine.",
      image: "https://img.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg",
    }
  ];

  return (
    <section id="doctors" className="text-gray-600 body-font pt-24">
      <div className="container px-5 py-12 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Our <span className="text-slate-800">Medical Specialists</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our team of board-certified physicians in professional practice.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <AiOutlineSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search doctors by name or specialty..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-slate-800"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-slate-800">
            {specialties.map((specialty, index) => (
              <option key={index} value={specialty.name}>{specialty.name}</option>
            ))}
          </select>
        </div>

        {/* Specialty Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {specialties.map((specialty, index) => (
            <button
              key={index}
              className="flex items-center px-4 py-2 bg-white border border-slate-800 text-slate-800 rounded-full hover:bg-slate-100 transition-colors"
            >
              {specialty.icon}
              {specialty.name}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="flex flex-wrap -m-4">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="block relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img
                  alt={doctor.name}
                  className="object-cover object-center w-full h-full block"
                  src={doctor.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
                  <h2 className="text-white title-font text-lg font-medium">{doctor.name}</h2>
                  <p className="text-slate-200 text-sm">{doctor.specialty}</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-gray-500 text-sm">{doctor.experience} experience</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{doctor.description}</p>
                <button className="w-full bg-slate-800 hover:bg-slate-700 text-white py-2 px-4 rounded-lg transition-colors text-sm">
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;