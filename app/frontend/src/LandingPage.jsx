import React from "react";

const LandingPage = () => {
  return (
    <div className="font-sans">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Job Seekers Community</h1>
        <div>
          <button className="px-4 py-2 mr-2 text-blue-500">Login</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100">
        <h2 className="text-4xl font-bold">Find Your Dream Job</h2>
        <p className="text-lg text-gray-600 mt-2">Join our community to access job listings and career resources.</p>
        <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-center text-3xl font-bold mb-8">Why Join Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
          <div className="p-6 bg-white shadow-lg rounded text-center">
            <h3 className="text-xl font-semibold">Exclusive Job Listings</h3>
            <p className="text-gray-600 mt-2">Access top job opportunities tailored to your skills.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded text-center">
            <h3 className="text-xl font-semibold">Career Guidance</h3>
            <p className="text-gray-600 mt-2">Get expert advice and mentorship from industry leaders.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded text-center">
            <h3 className="text-xl font-semibold">Networking Opportunities</h3>
            <p className="text-gray-600 mt-2">Connect with professionals and recruiters worldwide.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-500 text-white py-16">
        <h2 className="text-center text-3xl font-bold mb-6">What Our Users Say</h2>
        <div className="text-center">
          <p className="text-lg">"This platform helped me land my dream job!"</p>
          <span className="block mt-2 font-semibold">- Jane Doe</span>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold">Ready to Find Your Job?</h2>
        <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded">Join Now</button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 Job Seekers Community. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
