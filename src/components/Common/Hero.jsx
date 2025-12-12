import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container relative section-padding">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium mb-6">
            Upcoming Summit
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Middle East Proptech Innovation Summit 2023
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Embracing Proptech to drive Innovation in Real Estate. Join industry leaders for two days of networking, insights, and cutting-edge technology discussions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-center gap-3">
              <Calendar className="text-accent" />
              <div>
                <div className="text-sm text-gray-300">Date</div>
                <div className="font-medium">23-24 May 2023</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-accent" />
              <div>
                <div className="text-sm text-gray-300">Venue</div>
                <div className="font-medium">Dubai, United Arab Emirates</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/events/proptech-summit/register" className="btn-primary bg-accent hover:bg-accent-dark">
              Register Now <ArrowRight size={20} />
            </Link>
            <Link to="/events/proptech-summit" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}