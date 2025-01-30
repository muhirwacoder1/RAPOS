const Events = () => {
  return (
    <section id="events" className="py-20 bg-gradient-to-b from-white to-rapos-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-rapos-primary mb-12">
          Upcoming Events
        </h2>
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Image */}
            <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-8">
              <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="md:w-2/3 p-8">
              <div className="text-blue-600 font-semibold mb-2">NEXT RAPOS WORKSHOP</div>
              <h3 className="text-2xl font-semibold mb-4">Advanced Prosthetics Techniques</h3>
              <p className="text-rapos-text mb-6">
                Join us for our next workshop on advanced prosthetics techniques. Learn from industry experts and network with fellow students.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;