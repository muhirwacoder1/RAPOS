const Footer = () => {
  return (
    <footer className="bg-rapos-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RAPOS</h3>
            <p className="text-sm opacity-80">
              Rwanda Association of Prosthetics and Orthotics Students
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-rapos-secondary transition-colors">Home</a></li>
              <li><a href="#events" className="hover:text-rapos-secondary transition-colors">Events</a></li>
              <li><a href="#about" className="hover:text-rapos-secondary transition-colors">About</a></li>
              <li><a href="#faqs" className="hover:text-rapos-secondary transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <p className="text-sm opacity-80 mb-2">Email: info@rapos.rw</p>
            <p className="text-sm opacity-80">Phone: +250 123 456 789</p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} RAPOS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;