import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Events", href: "#events" },
    { label: "About", href: "#about" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed w-full px-4 top-4 z-50">
      <nav className="max-w-7xl mx-auto bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-xl font-bold text-rapos-primary">RAPOS</a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-rapos-text hover:text-rapos-primary transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-rapos-text hover:text-rapos-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;