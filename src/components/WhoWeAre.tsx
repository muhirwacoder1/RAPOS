const WhoWeAre = () => {
  const services = [
    {
      title: "Empower Future Professionals",
      description: "We train and mentor students in prosthetics and orthotics, preparing them to meet Rwanda's rehabilitation needs."
    },
    {
      title: "Advance Education & Research",
      description: "We promote innovation and research to improve rehabilitation practices and assistive technology."
    },
    {
      title: "Community Outreach & Advocacy",
      description: "We raise awareness and advocate for accessible rehabilitation services for underserved communities."
    },
    {
      title: "Build Partnerships",
      description: "We collaborate with stakeholders to drive impactful change in Rwanda's healthcare system."
    },
    {
      title: "Inspire Innovation",
      description: "We support students in creating practical solutions that enhance the quality of life for individuals with disabilities."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-rapos-primary mb-12">
          What We Do
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-rapos-background p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-rapos-primary">
                {service.title}
              </h3>
              <p className="text-rapos-text">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <p className="text-center text-lg mt-12 text-rapos-text">
          Together, we're building a more inclusive future—one step at a time!
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;