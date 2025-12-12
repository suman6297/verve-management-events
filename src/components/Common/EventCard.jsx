import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  return (
    <div className="card hover:shadow-xl transition-all duration-300 animate-slide-up">
      <div className="flex justify-between items-start mb-4">
        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
          {event.category}
        </span>
        <span className="text-sm text-gray-500">{event.duration} days</span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {event.title}
      </h3>
      
      <p className="text-gray-600 mb-6 line-clamp-3">
        {event.description}
      </p>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center text-gray-600">
          <Calendar size={18} className="mr-3 text-gray-400" />
          <span className="font-medium">{event.date}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin size={18} className="mr-3 text-gray-400" />
          <span>{event.location}</span>
        </div>
        {event.attendees && (
          <div className="flex items-center text-gray-600">
            <Users size={18} className="mr-3 text-gray-400" />
            <span>{event.attendees}+ attendees</span>
          </div>
        )}
        // src/components/Common/EventCard.jsx - লাইন 15 এর পর
{event.id === 'women-leaders-summit-2022' && (
  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
    <span className="text-white font-bold text-sm">WLS</span>
  </div>
)}
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t">
        <div>
          <span className="text-2xl font-bold text-gray-900">{event.price}</span>
          {event.earlyBird && (
            <span className="text-sm text-green-600 ml-2 font-medium">Early Bird Available</span>
          )}
        </div>
        <Link 
          to={`/events/${event.id}`}
          className="flex items-center text-primary hover:text-accent font-medium group"
        >
          View Details 
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}