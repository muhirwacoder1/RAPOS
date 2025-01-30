const About = () => {
  return (
    <section id="about" className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          ABOUT RAPOS
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-500/30 backdrop-blur-sm p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Mission</h3>
            <p className="text-white text-lg leading-relaxed">
              To empower Prosthetics and Orthotics students through academic and professional
              development, community outreach, and industry collaboration.
            </p>
          </div>
          
          <div className="bg-blue-500/30 backdrop-blur-sm p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Vision</h3>
            <p className="text-white text-lg leading-relaxed">
              Creating a supportive community for Prosthetics and Orthotics students,
              committed to academic growth, professional connections, and advancing healthcare.
            </p>
          </div>
        </div>

        <div className="bg-blue-500/30 backdrop-blur-sm p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-8 text-white">Objectives</h3>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white text-lg">Professional networking</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white text-lg">Innovation and skill development</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white text-lg">Student advocacy</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white text-lg">Awareness and outreach</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;