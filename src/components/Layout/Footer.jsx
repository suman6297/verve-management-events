import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <h2 className="text-xl font-bold">Verve Management</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Leading event management company specializing in professional summits and conferences across the Middle East.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-accent transition-colors">All Events</Link></li>
              <li><Link to="/speakers" className="text-gray-300 hover:text-accent transition-colors">Speakers</Link></li>
              <li><Link to="/sponsors" className="text-gray-300 hover:text-accent transition-colors">Sponsorship</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-lg font-bold mb-6">Upcoming Events</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/events/cx-summit" className="hover:text-accent transition-colors">
                  <div className="font-medium">CX & Loyalty Summit</div>
                  <div className="text-sm text-gray-300">Nov 1-2, 2023 | Dubai</div>
                </Link>
              </li>
              <li>
                <Link to="/events/proptech-summit" className="hover:text-accent transition-colors">
                  <div className="font-medium">Proptech Summit</div>
                  <div className="text-sm text-gray-300">May 23-24, 2023 | Dubai</div>
                </Link>
              </li>
              <li>
                <Link to="/events/bank-summit" className="hover:text-accent transition-colors">
                  <div className="font-medium">Future Banks Summit</div>
                  <div className="text-sm text-gray-300">Sep 11-12, 2023 | Riyadh</div>
                </Link>
              </li>
           
<li>
  <Link to="/events/women-leaders-summit" className="hover:text-accent transition-colors">
    <div className="font-medium">Women Leaders Summit</div>
    <div className="text-sm text-gray-300">Nov 2-3, 2022 | Dubai</div>
  </Link>
</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Verve Management DMCC<br />
                  1702 & 1706, Mazaya Business Avenue BB2<br />
                  Jumeirah Lakes Towers, Dubai, UAE
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-accent flex-shrink-0" />
                <a href="tel:+97142434688" className="text-gray-300 hover:text-accent">
                  +971 4 243 4688
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <a href="mailto:info@verve-management.com" className="text-gray-300 hover:text-accent">
                  info@verve-management.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={20} className="text-accent flex-shrink-0" />
                <a href="https://www.verve-management.com" className="text-gray-300 hover:text-accent">
                  www.verve-management.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Verve Management DMCC. All rights reserved.</p>
          <p className="text-sm mt-2">Professional Event Management & Conference Organizers</p>
        </div>
      </div>
    </footer>
  );
}