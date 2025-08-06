<section className="text-gray-700 body-font bg-gradient-to-br from-blue-50 to-white">
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-1/2 md:w-full bg-white rounded-lg p-8 flex flex-col">
      <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Patient Registration</h1>
      <p className="text-gray-600 text-center mb-8">Complete your medical profile to enable seamless care across our hospital network</p>
      
      <div className="relative mb-10">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-blue-100"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-blue-600 font-medium">Personal Information</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Full Name*</label>
          <input 
            type="text" 
            className="w-full bg-gray-50 rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" 
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Date of Birth*</label>
          <input 
            type="date" 
            className="w-full bg-gray-50 rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" 
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Gender*</label>
          <select className="w-full bg-gray-50 rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="undisclosed">Prefer not to say</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Blood Type</label>
          <select className="w-full bg-gray-50 rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
            <option value="">Unknown</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
      </div>

      <div className="relative mb-10">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-blue-100"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-blue-600 font-medium">Contact Details</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Email*</label>
          <input 
            type="email" 
            className="w-full bg-gray-50 rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" 
            placeholder="patient@example.com"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Phone*</label>
          <input 
            type="tel" 
            className="w-full bg-gray-50 rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" 
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-gray-700 text-sm font-medium mb-2">Address*</label>
          <input 
            type="text" 
            className="w-full bg-gray-50 rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" 
            placeholder="123 Medical Center Dr"
          />
        </div>
      </div>

      <div className="relative mb-10">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-blue-100"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-blue-600 font-medium">Medical Information</span>
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-gray-700 text-sm font-medium mb-2">Known Allergies</label>
        <textarea 
          className="w-full bg-gray-50 rounded border border-gray-300 focus:border-blue-500 h-20 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" 
          placeholder="List any allergies (medications, foods, etc.)"
        ></textarea>
      </div>

      <div className="mb-8">
        <label className="block text-gray-700 text-sm font-medium mb-2">Current Medications</label>
        <textarea 
          className="w-full bg-gray-50 rounded border border-gray-300 focus:border-blue-500 h-20 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" 
          placeholder="Include dosage and frequency"
        ></textarea>
      </div>

      <div className="mb-8">
        <label className="block text-gray-700 text-sm font-medium mb-2">Medical History</label>
        <textarea 
          className="w-full bg-gray-50 rounded border border-gray-300 focus:border-blue-500 h-20 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" 
          placeholder="Chronic conditions, past surgeries, family history"
        ></textarea>
      </div>

      <div className="flex items-center mb-8">
        <input 
          type="checkbox" 
          id="consent"
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
        />
        <label htmlFor="consent" className="ml-2 text-sm text-gray-700">
          I consent to the storage and processing of my medical data in accordance with HIPAA regulations
        </label>
      </div>

      <button className="w-full text-white bg-blue-600 border-0 py-3 px-6 focus:outline-none hover:bg-blue-700 rounded-lg text-lg font-medium transition-colors duration-200 shadow-md">
        Complete Registration
      </button>

      <p className="text-xs text-gray-500 mt-6 text-center">
        Already have an account? <a href="#" className="text-blue-600 hover:text-blue-800">Login to patient portal</a>
      </p>
    </div>

    <div className="lg:w-1/2 md:w-full bg-blue-600 rounded-lg p-12 flex flex-col md:ml-auto mt-10 md:mt-0">
      <div className="flex items-center mb-8">
        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
          </svg>
        </div>
        <h2 className="text-white text-2xl font-bold">Why Register With Us?</h2>
      </div>

      <div className="space-y-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-20 text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-white">Secure Medical Records</h3>
            <p className="mt-2 text-blue-100">HIPAA-compliant storage of your complete health history accessible only to authorized providers</p>
          </div>
        </div>

        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-20 text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-white">Faster Appointments</h3>
            <p className="mt-2 text-blue-100">Pre-filled forms mean less paperwork when you arrive for your visit</p>
          </div>
        </div>

        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-20 text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-white">Continuity of Care</h3>
            <p className="mt-2 text-blue-100">All your providers access the same updated records for coordinated treatment</p>
          </div>
        </div>

        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-20 text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-white">Mobile Access</h3>
            <p className="mt-2 text-blue-100">View test results, schedule visits, and message your care team from anywhere</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>