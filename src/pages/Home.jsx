import Hero from '../components/Common/Hero';
import SectionHeader from '../components/Common/SectionHeader';
import EventCard from '../components/Common/EventCard';
import { events } from '../data/events';
import { Calendar, Users, TrendingUp, Globe } from 'lucide-react';

export default function Home() {
  const featuredEvents = events.filter(event => event.featured);

  return (
    <>
      <Hero />
      
      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-accent" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Events Organized</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-accent" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10,000+</h3>
              <p className="text-gray-600">Industry Attendees</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-accent" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">200+</h3>
              <p className="text-gray-600">Partner Companies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-accent" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            title="Featured Summits"
            subtitle="Upcoming Events"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join industry leaders at our premier events and gain insights that will drive your business forward.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/events" className="btn-primary bg-accent hover:bg-accent-dark">
              View All Events
            </a>
            <a href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </a>
            
          </div>
        </div>
      </section>
    </>
  );
}