import { useState } from 'react';
import { Menu, X, Calendar, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Speakers', href: '/speakers' },
    
{ name: 'Women Leaders', href: '/events/women-leaders-summit' },
    { name: 'Future Banks Summit', href: '/events/bank-summit' },

    { name: 'Sponsors', href: '/sponsors' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white text-sm">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center py-2 gap-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                                    <img src="\CX-Loyalty-Summit-Mena.png" alt="Proptech Summit" className="w-32 h-32 bg-white" /> 

                <Calendar size={14} />
                <span>Upcoming: CX & Loyalty Summit - Nov 1-2, 2023</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+97142434688" className="flex items-center gap-2 hover:text-accent">
                <Phone size={14} />
                <span>+971 4 243 4688</span>
              </a>
              <a href="mailto:info@verve-management.com" className="flex items-center gap-2 hover:text-accent">
                <Mail size={14} />
                <span>info@verve-management.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Verve Management</h1>
              <p className="text-sm text-gray-600">Event Management Specialists</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-accent font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/register"
              className="btn-primary"
            >
              Register Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden border-t py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-accent py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/register"
                className="btn-primary mt-2"
                onClick={() => setIsOpen(false)}
              >
                Register Now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}