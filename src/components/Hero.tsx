const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-rapos-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rapos-primary/10 to-rapos-secondary/5 pointer-events-none" />
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-rapos-primary leading-tight mb-6 animate-fade-in">
              Innovating mobility, transforming lives—prosthetics and orthotics of tomorrow.
            </h1>
            <p className="text-lg text-rapos-text mb-8">
              Join us in shaping the future of prosthetics and orthotics in Rwanda.
            </p>
            <a
              href="#contact"
              className="inline-block bg-rapos-secondary text-white px-8 py-3 rounded-lg hover:bg-rapos-primary transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Involved
            </a>
          </div>
          <div className="flex-1">
            <img
              src="/placeholder.svg"
              alt="RAPOS Hero"
              className="rounded-lg shadow-2xl w-full transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;