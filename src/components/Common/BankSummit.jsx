import { Calendar, MapPin, Users, Shield, Cpu, Globe } from 'lucide-react';
import SectionHeader from '../Common/SectionHeader';

export default function BankSummit() {
  const topics = [
    'VISION 2030 - EMERGENCE OF THE KINGDOM AS A GLOBAL FINANCIAL LEADER',
    'DIGITAL TRANSFORMATION - THE FOUNDATIONAL PLATFORM FOR ACHIEVING BUSINESS AGILITY',
    'PAYMENTS TODAY & TOMORROW - THE FUTURE OF DIGITAL PAYMENTS',
    'PROVIDING A NEXT-GEN SEAMLESS BANKING CUSTOMER EXPERIENCE',
    'DATA & ANALYTICS PROVIDING A 360° OVERVIEW TO BANKS & CUSTOMERS',
    'INCLUSIVE BANKING THROUGH OPEN BANKING - BRINGING LEGACY BANKS AND FINTECHS TOGETHER',
    'THE CLOUD IMPERATIVE - A KEY ENABLER FOR BANKS TO ACHIEVE BUSINESS AGILITY THROUGH CLOUD-POWERED DIGITAL TRANSFORMATION',
    'THE FUTURE OF NBFIs - REVOLUTIONIZING THE MONEY MARKET IN KSA',
    '\'DIGITAL ONLY\' BANKS - THE RISE OF \'INVISIBLE BANKS\' FOR GEN-Z CUSTOMERS',
    'EXPERIENTIAL BANKING IN METAVERSE - THE THIRD WORLD BANKING'
  ];

  return (
    <div className="section-padding">
      <div className="container">
        {/* Hero Section with Logo */}
        <div className="bg-gradient-to-r from-green-900 to-green-700 rounded-2xl p-8 md:p-12 text-white mb-12">
          {/* Logo Section */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center backdrop-blur-sm">

            <img src="\Future-Banks-Summit-KSA-2023 (1).png" alt="" srcset=""  className=' bg-white' />
              <Shield size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">4th Annual Future Banks Summit & Awards</h1>
              <p className="text-xl text-gray-200 mt-2">
                Digital Innovations Transforming the Kingdom's Banking Landscape
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Calendar className="text-yellow-300" />
              <div>
                <div className="text-sm text-gray-300">Date</div>
                <div className="font-medium">11-12 September 2023</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-yellow-300" />
              <div>
                <div className="text-sm text-gray-300">Venue</div>
                <div className="font-medium">Riyadh Marriott Hotel, Saudi Arabia</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-yellow-300" />
              <div>
                <div className="text-sm text-gray-300">Attendees</div>
                <div className="font-medium">600+ Banking Professionals</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a href="/register/bank-summit" className="btn-primary bg-yellow-500 hover:bg-yellow-600">
              Register Now
            </a>
            <a href="https://www.ksa.futurebanksummit.com" target="_blank" rel="noopener noreferrer" className="btn-secondary border-white text-white hover:bg-white hover:text-green-900">
              Visit Website
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
            The banking industry worldwide is undergoing phenomenal change, giving the banks an opportunity to relook into their existing business models and take a huge leap towards the future. The shift in consumers' digital experience, adoption of next-gen technologies, transformation of customer service to customer engagement, mobile workforce with a need to 'right-size' the branch network are all opportunities for regional banks to seize and accelerate the shift to digital.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            The 4th Annual Future Banks Summit KSA 2023 will showcase the latest innovations and practical case studies, along with interactive panel discussions designed to guide the banking sector in KSA in identifying the right strategies to overcome long-standing resistance and be future-ready!
          </p>
          <p className="text-lg text-gray-600">
            An exciting and timely conference is on its way, discussing the future of the financial industry in KSA driven by innovation and digital advancements, with the adoption of technologies such as AI, digital transformation, digital banking, banking in the metaverse, intelligent automation, regtech, data analytics, cloud migration, cyber security, digital payments models, along with tech-driven redefined business continuity planning strategies.
          </p>
        </div>

        {/* Topic Highlights */}
        <SectionHeader
          title="Topic Highlights"
          subtitle="Key Discussions"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {topics.map((topic, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-green-50 rounded-xl border border-green-200">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                {index % 3 === 0 ? <Cpu className="text-green-600" size={20} /> : 
                 index % 3 === 1 ? <Globe className="text-green-600" size={20} /> : 
                 <Shield className="text-green-600" size={20} />}
              </div>
              <p className="text-gray-800 font-medium">{topic}</p>
            </div>
          ))}
        </div>

        {/* Who Will You Meet */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <SectionHeader
            title="Who Will You Meet?"
            subtitle="Target Audience"
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'CIOs, CTOs, Heads of Technology',
              'Chief Digital Officers, Heads of Digital Transformation',
              'Chief Marketing Officers, Heads of Marketing',
              'Heads of Retail Banking',
              'Heads of Corporate Banking',
              'Heads of Customer Experience',
              'Heads of Cards & Payments',
              'Head of Data & Analytics',
              'Heads of Governance & Compliance'
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-green-600" size={24} />
                </div>
                <p className="text-gray-800 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}