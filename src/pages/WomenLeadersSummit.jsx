import { Calendar, MapPin, Users, Award, Target, Users as UsersIcon, Briefcase } from 'lucide-react';
import SectionHeader from '../components/Common/SectionHeader';
import womanLogo from "../assets/logos/womens-leaders-summit-2022-logo-WHITE-06.png"

export default function WomenLeadersSummit() {
  const topics = [
    'Empowering Women in Leadership Roles',
    'Breaking the Glass Ceiling: Strategies for Success',
    'Work-Life Balance for Women Executives',
    'Women in STEM: Challenges and Opportunities',
    'Digital Transformation Led by Women Leaders',
    'Building Supportive Networks for Women Professionals',
    'Mentorship and Sponsorship for Career Growth',
    'Women Entrepreneurship in the Middle East',
    'Inclusive Leadership and Diversity Initiatives',
    'Future of Women in Corporate Leadership'
  ];

  const speakers = [
    'Female CEOs & Managing Directors',
    'Women in C-Suite Positions',
    'Female Entrepreneurs and Founders',
    'Women in Technology Leadership',
    'Female Board Members',
    'Women in Government and Policy Making',
    'Emerging Women Leaders',
    'Diversity & Inclusion Officers'
  ];

  const industries = [
    'Technology & IT',
    'Banking & Finance',
    'Healthcare',
    'Education',
    'Government',
    'Real Estate',
    'Retail & E-commerce',
    'Energy & Utilities',
    'Consulting',
    'Manufacturing'
  ];

  return (
    <div className="section-padding">
      <div className="container">
        {/* Hero Section with Logo */}
        <div className="bg-gradient-to-r from-purple-900 to-pink-700 rounded-2xl p-8 md:p-12 text-white mb-12">
          {/* Logo and Title */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            {/* Logo */}
            <div className="w-32 h-32  rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
            <img src={womanLogo} alt="" srcset="" className=' w-16' />
       
              {/* If no logo - use this */}
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">WLS</div>
                <div className="text-lg font-semibold text-white">2022</div>
              </div>
            </div>
            
            {/* Title */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Middle East Women Leaders Summit 2022</h1>
              <p className="text-xl text-gray-200">
                Empowering Women, Transforming Leadership
              </p>
            </div>
          </div>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Calendar className="text-yellow-300" />
              <div>
                <div className="text-sm text-gray-300">Date</div>
                <div className="font-medium">2-3 November 2022</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-yellow-300" />
              <div>
                <div className="text-sm text-gray-300">Venue</div>
                <div className="font-medium">Dubai, United Arab Emirates</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-yellow-300" />
              <div>
                <div className="text-sm text-gray-300">Attendees</div>
                <div className="font-medium">300+ Women Leaders</div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/register/women-leaders" className="btn-primary bg-pink-500 hover:bg-pink-600">
              View Event Details
            </a>
            <a href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-purple-900">
              Contact Organizers
            </a>
          </div>
        </div>

        {/* Event Overview */}
        <SectionHeader
          title="Event Overview"
          subtitle="About the Summit"
        />
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-gray-600 mb-6">
            The Middle East Women Leaders Summit 2022 brought together inspiring women leaders from across the region to share insights, experiences, and strategies for success in leadership roles. This premier event focused on empowering women to take on greater leadership responsibilities and drive positive change in their organizations and communities.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            With a stellar lineup of speakers, interactive workshops, and networking opportunities, the summit provided a platform for women to connect, learn, and grow together. Participants gained valuable insights into leadership development, career advancement, and creating inclusive work environments.
          </p>
          <p className="text-lg text-gray-600">
            The summit addressed key challenges faced by women in leadership positions and provided practical solutions and strategies for overcoming barriers to success. It also highlighted the importance of diversity and inclusion in driving organizational excellence and innovation.
          </p>
        </div>

        {/* Topics and Audience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <SectionHeader
              title="Topic Highlights"
              subtitle="Key Discussions"
            />
            <ul className="space-y-4">
              {topics.map((topic, index) => (
                <li key={index} className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                  <Target size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-800">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <SectionHeader
                title="Who Attended?"
                subtitle="Speaker & Attendee Profile"
              />
              <ul className="space-y-3">
                {speakers.map((item, index) => (
                  <li key={index} className="text-gray-700 flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <UsersIcon size={16} className="text-purple-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <SectionHeader
                title="Industries Represented"
                subtitle="Industry Diversity"
              />
              <div className="flex flex-wrap gap-3">
                {industries.map((item, index) => (
                  <span key={index} className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why This Summit Was Important */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-12">
          <SectionHeader
            title="Summit Impact"
            subtitle="Key Achievements"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">300+</h3>
              <p className="text-gray-600">Women Leaders Connected</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">40+</h3>
              <p className="text-gray-600">Expert Speakers</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Companies Represented</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Networking Sessions</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <SectionHeader
          title="What Participants Said"
          subtitle="Testimonials"
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "This summit transformed my approach to leadership. The connections I made here continue to inspire me.",
              name: "Sarah Al-Mansoori",
              title: "CEO, TechInnovate"
            },
            {
              quote: "A powerful platform for women to share experiences and learn from each other. Highly recommended!",
              name: "Dr. Fatima Hassan",
              title: "Board Member, National Bank"
            },
            {
              quote: "The insights gained from this summit helped me advance to a senior leadership position.",
              name: "Layla Mohammed",
              title: "Director of Operations"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}