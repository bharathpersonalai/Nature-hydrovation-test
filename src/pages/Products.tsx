import { Link } from 'react-router-dom';
import { Droplet, Filter, Waves, CheckCircle, ArrowRight, Award, Shield, Zap } from 'lucide-react';

export default function Products() {
  const products = [
    {
      id: 'alkaline-purifier',
      name: 'Alkaline Water Purifier',
      icon: Droplet,
      gradient: 'from-cyan-500 to-teal-600',
      tagline: 'Transform ordinary water into wellness',
      description: 'Our flagship alkaline water purification system uses 5-layer volcanic mineral technology to create mineral-rich, pH-balanced water that revitalizes your body.',
      features: [
        'pH 8.5-10 alkaline water output',
        '5-layer volcanic mineral enrichment',
        'Negative ORP antioxidant properties',
        'Essential mineral infusion (Ca, Mg, K)',
        'Removes 99.9% contaminants',
        'Japanese Health Authority Certified',
        'Compact countertop or under-sink design',
        'Easy filter replacement system',
      ],
      benefits: [
        'Enhanced cellular hydration',
        'Supports natural pH balance',
        'Rich in bioavailable minerals',
        'Antioxidant protection',
        'Better taste and clarity',
        'Promotes detoxification',
      ],
      idealFor: [
        'Health-conscious families',
        'Fitness enthusiasts',
        'Those seeking wellness through hydration',
        'Anyone wanting premium drinking water',
      ],
    },
    {
      id: 'ro-purifier',
      name: 'RO Water Purifier',
      icon: Filter,
      gradient: 'from-blue-500 to-cyan-600',
      tagline: 'Pure, safe water for every need',
      description: 'Advanced Reverse Osmosis technology combined with mineral cartridges ensures your water is both pure and healthy, removing all harmful contaminants while retaining essential minerals.',
      features: [
        'Multi-stage RO purification',
        'TDS controller for mineral retention',
        'UV sterilization chamber',
        'High-efficiency membrane',
        'Smart LED indicators',
        'Large storage capacity (8-12L)',
        'Energy-efficient operation',
        'Auto shut-off system',
      ],
      benefits: [
        'Removes bacteria, viruses, and chemicals',
        'Reduces heavy metals and TDS',
        'Crystal clear, odor-free water',
        'Balanced mineral content',
        'Safe for all age groups',
        'Cost-effective solution',
      ],
      idealFor: [
        'Areas with high TDS water',
        'Homes and offices',
        'Large families',
        'Commercial establishments',
      ],
    },
    {
      id: 'water-softener',
      name: 'Water Softener System',
      icon: Waves,
      gradient: 'from-teal-500 to-green-600',
      tagline: 'Protect your home, prolong appliance life',
      description: 'Our advanced water softening system removes hardness-causing minerals, protecting your appliances, plumbing, and giving you softer skin and hair.',
      features: [
        'Ion exchange technology',
        'Automatic regeneration cycle',
        'High-capacity resin tank',
        'Digital control valve',
        'Salt-efficient operation',
        'Bypass valve included',
        'Whole-home protection',
        'Low maintenance design',
      ],
      benefits: [
        'Prevents scale buildup in pipes',
        'Extends appliance lifespan',
        'Softer skin and shinier hair',
        'Better soap and detergent efficiency',
        'Reduced energy costs',
        'Cleaner dishes and glassware',
      ],
      idealFor: [
        'Homes with hard water issues',
        'Areas with high calcium/magnesium',
        'Protecting expensive appliances',
        'Improving personal care',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* 🚀 NEW HERO BANNER SECTION */}
      <section 
        className="relative py-32 px-4 sm:px-6 lg:px-8 text-white overflow-hidden" 
        style={{ 
          backgroundImage: 'url(/images/6.jpg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay for Readability (opacity-70 with shadow for contrast) */}
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="text-center mb-16">
            {/* Removed the small pill icon/text for a cleaner hero look */}
            
            <h1 
              className="text-5xl md:text-7xl font-extrabold mb-6"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }} // Added text shadow
            >
              <span className="block">Our Water</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                Treatment Systems
              </span>
            </h1>
            <p 
              className="text-xl text-gray-200 max-w-3xl mx-auto mt-4"
              style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }} // Added text shadow
            >
              Choose from our range of certified water purification and softening systems,
              each designed to address specific water quality needs while promoting health and wellness.
            </p>
          </div>

          {/* Product Summary Cards - Kept here to pop against the dark background */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto pt-8"> 
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all group cursor-pointer relative z-20"
              >
                <div className={`bg-gradient-to-br ${product.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <product.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {products.map((product, index) => (
        <section
          key={product.id}
          className={`py-20 px-4 sm:px-6 lg:px-8 ${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-gray-50 to-cyan-50'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`bg-gradient-to-br ${product.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6`}>
                  <product.icon className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h2>
                <p className="text-xl text-gray-600 mb-6 italic">{product.tagline}</p>
                <p className="text-gray-700 leading-relaxed mb-8">{product.description}</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Zap className="h-5 w-5 text-cyan-600 mr-2" />
                      Key Benefits
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Shield className="h-5 w-5 text-cyan-600 mr-2" />
                      Ideal For
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.idealFor.map((item, idx) => (
                        <span
                          key={idx}
                          className="bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Features</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className={`bg-gradient-to-br ${product.gradient} w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Link
                      to="/contact"
                      className="block text-center px-6 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
                    >
                      Request Consultation
                      <ArrowRight className="inline h-5 w-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Not Sure Which System Is Right for You?
          </h2>
          <p className="text-xl mb-8 text-cyan-50">
            Our water wellness experts will assess your water quality, understand your needs,
            and recommend the perfect solution for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-700 font-semibold rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Schedule Free Consultation
            </Link>
            <Link
              to="/technology"
              className="inline-flex items-center justify-center px-8 py-4 bg-cyan-800 text-white font-semibold rounded-xl hover:bg-cyan-900 transition-all border-2 border-white/20"
            >
              Learn About Our Technology
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What's Included With Every System
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-6 border-2 border-cyan-200">
              <CheckCircle className="h-10 w-10 text-cyan-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Professional Installation</h3>
              <p className="text-sm text-gray-600">Expert setup by certified technicians</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-6 border-2 border-cyan-200">
              <CheckCircle className="h-10 w-10 text-cyan-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-sm text-gray-600">All certifications and safety standards met</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-6 border-2 border-cyan-200">
              <CheckCircle className="h-10 w-10 text-cyan-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Maintenance Support</h3>
              <p className="text-sm text-gray-600">Regular service and filter replacements</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-6 border-2 border-cyan-200">
              <CheckCircle className="h-10 w-10 text-cyan-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">24/7 Customer Care</h3>
              <p className="text-sm text-gray-600">Always here when you need assistance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}