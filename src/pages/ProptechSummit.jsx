import { Calendar, MapPin, Users, Briefcase, Target, Award } from 'lucide-react';
import SectionHeader from '../components/Common/SectionHeader';

export default function ProptechSummit() {
  const topics = [
    'Big Data collection and analysis of property data',
    'AI and cloud-based software to streamline administration tasks',
    'Virtual Reality tools to enhance the property viewing experience',
    'Automated Property Management',
    'Blockchain powered Real Estate transactions',
    'IoT smart network devices and sensors for efficient property maintenance',
    'Online platforms and chatbots to facilitate the customer experience',
    'A new era of Crowdfunding as an alternate source of property funding',
    'Innovation in mobile applications for tenants and landlords',
    'Impact of Cryptocurrency on Real Estate sector'
  ];

  const attendees = [
    'CEOs/Managing Directors',
    'CTOs/CIOs/Heads of Technology Innovation',
    'Heads of Property Management',
    'Heads of Sales & Marketing',
    'Heads of Investments',
    'Heads of Facility Management'
  ];

  const industries = [
    'Property Developers',
    'Property Management Companies',
    'Real-Estate Consultants',
    'Community Management Companies',
    'Real-Estate Brokers',
    'Investors & VCs'
  ];

  return (
    <div className="section-padding">
      <div className="container">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            MIDDLE EAST PROPTECH INNOVATION SUMMIT 2023
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Embracing Proptech to drive Innovation in Real Estate
          </p>
          <div className="flex flex-wrap gap-6 mb-8">
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
            <div className="flex items-center gap-3">
              <Users className="text-accent" />
              <div>
                <div className="text-sm text-gray-300">Attendees</div>
                <div className="font-medium">500+ Industry Professionals</div>
              </div>
            </div>
          </div>
          <a href="/register/proptech" className="btn-primary bg-accent hover:bg-accent-dark inline-block">
            Register Now
          </a>
        </div>

        {/* Overview */}
        <SectionHeader
          title="Event Overview"
          subtitle="About the Summit"
        />
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-gray-600 mb-6">
            Despite global headwinds, the real estate market in Dubai continues to leap over other metropolises amid global economic challenges. The influx of HNWIs and overseas buyers investing in Dubai's high-end developments with residents eyeing for stability and benefits from the new freehold and visa-related reforms, a rush of first-time home buyers has proven the resiliency of the Emirate that holds an abundance of safe and unmatched opportunities as a global hub for business, tourism and innovation.
          </p>
          <p className="text-lg text-gray-600">
            Proptech, a combination of property and technology cites to the management, handling, and monetization of real estate assets using technologies such as AI, blockchain and automation. The rising digital transformation throughout the property sector such as predictive analytics, asset digitization, IoT in workplace management, data analytics on market performance, and predictive analytics in asset performance is revolutionizing the industry and cannot be ignored.
          </p>
        </div>

        {/* Topics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <SectionHeader
              title="Topic Highlights"
              subtitle="Key Discussions"
            />
            <ul className="space-y-3">
              {topics.map((topic, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Target size={20} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeader
              title="Who Will You Meet?"
              subtitle="Target Audience"
            />
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="text-accent" />
                  <h3 className="text-xl font-bold text-gray-900">Attendees Profile</h3>
                </div>
                <ul className="space-y-2">
                  {attendees.map((item, index) => (
                    <li key={index} className="text-gray-700">• {item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-accent" />
                  <h3 className="text-xl font-bold text-gray-900">Industries Covered</h3>
                </div>
                <ul className="space-y-2">
                  {industries.map((item, index) => (
                    <li key={index} className="text-gray-700">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why Attend */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <SectionHeader
            title="Why Attend?"
            subtitle="Key Benefits"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <Award className="text-accent mb-4" size={32} />
              <h3 className="text-lg font-bold mb-2">Industry Insights</h3>
              <p className="text-gray-600">Gain knowledge from top industry leaders and experts from across the globe</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <Users className="text-accent mb-4" size={32} />
              <h3 className="text-lg font-bold mb-2">Networking</h3>
              <p className="text-gray-600">Network with industry peers in a solution-oriented environment</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <Briefcase className="text-accent mb-4" size={32} />
              <h3 className="text-lg font-bold mb-2">Partnerships</h3>
              <p className="text-gray-600">Discuss significant partnerships and collaborations with industry leaders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}