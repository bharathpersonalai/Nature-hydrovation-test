import { useState } from 'react';
// Filter, Droplet, Zap are now mainly needed for the processSteps data, 
// but we're moving to image URLs, so they are less critical unless used elsewhere.
import { ChevronDown, ChevronUp, Award, Search, CheckCircle } from 'lucide-react'; 

export default function Technology() {
  const [expandedLayer, setExpandedLayer] = useState<number | null>(null);

  const mineralLayers = [
    {
      name: 'Layer A: Premium Tourmaline Stones',
      function: 'Releases negative ions and far-infrared radiation',
      benefits: [
        'Reduces water molecule clusters for better absorption',
        'Neutralizes harmful oxidants',
        'Enhances cellular hydration',
      ],
      certification: 'Japanese Health Ministry Certified',
    },
    {
      name: 'Layer B: Medical Stone (Maifan Stone)',
      function: 'Natural mineral enrichment and purification',
      benefits: [
        'Adds essential trace minerals (Ca, Mg, K, Na)',
        'Balances water pH to alkaline levels',
        'Removes heavy metals and toxins',
      ],
      certification: 'FDA Approved Material',
    },
    {
      name: 'Layer C: Volcanic Rock (Zeolite)',
      function: 'Advanced filtration and detoxification',
      benefits: [
        'Removes ammonia and harmful chemicals',
        'Ion exchange for water softening',
        'Natural antibacterial properties',
      ],
      certification: 'ISO 9001 Certified',
    },
    {
      name: 'Layer D: Coral Sand Calcium',
      function: 'Alkalinity enhancement and mineralization',
      benefits: [
        'Increases pH to optimal alkaline range (8.5-10)',
        'Rich in coral-derived calcium',
        'Promotes bone and teeth health',
      ],
      certification: 'Marine Safety Certified',
    },
    {
      name: 'Layer E: Activated Carbon & Silver',
      function: 'Final purification and preservation',
      benefits: [
        'Removes chlorine, odor, and organic compounds',
        'Silver ions prevent bacterial growth',
        'Crystal clear, fresh-tasting water',
      ],
      certification: 'NSF/ANSI Standard 42 & 53',
    },
  ];

  const processSteps = [
    // --- UPDATED: Replaced 'icon' with 'imageUrl' properties ---
    {
      title: 'Multi-Stage Filtration',
      description: 'Water passes through 5 distinct mineral layers, each removing specific contaminants',
      imageUrl: '/images/multi stage.jpg', // Placeholder - Update this
    },
    {
      title: 'Mineral Enrichment',
      description: 'Essential minerals from volcanic stones are naturally infused into the water',
      imageUrl: '/images/mineral.jpg', // Placeholder - Update this
    },
    {
      title: 'Ionization & pH Balance',
      description: 'Water is alkalized to optimal pH 8.5-10 with negative ORP for antioxidant benefits',
      imageUrl: '/images/ph balance.jpg', // Placeholder - Update this
    },
    {
      title: 'Molecular Restructuring',
      description: 'Smaller water clusters formed for enhanced cellular absorption and hydration',
      imageUrl: '/images/molecular.jpg', // Placeholder - Update this
    },
  ];

  const services = [
    'Professional Installation & Setup',
    'Regular Maintenance & Inspection',
    'Filter Replacement Services',
    'Water Quality Testing',
    'Expert Consultation',
    '24/7 Customer Support',
  ];

  return (
    <div className="min-h-screen pt-20">
      
      {/* 🚀 Hero Section - Adjusted overlay and added text shadow */}
      <section 
        className="relative py-32 px-4 sm:px-6 lg:px-8 text-white overflow-hidden" 
        style={{ 
          backgroundImage: 'url(/images/15.jpg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay for Readability - INCREASED OPACITY */}
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div> {/* Changed from opacity-60 to opacity-70 */}
        
        {/* Content div to sit above the overlay */}
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="text-center mb-16"> 
            <h1 
              className="text-5xl md:text-7xl font-extrabold mb-6"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }} // ADDED TEXT SHADOW
            >
              <span className="block">The Science Behind</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                Pure Mineral Water
              </span>
            </h1>
            <p 
              className="text-xl text-gray-200 max-w-3xl mx-auto mt-4"
              style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }} // ADDED TEXT SHADOW
            >
              Our revolutionary multi-layer filtration system uses volcanic minerals and sea stones
              to create water that's not just clean—it's alive with natural wellness benefits.
            </p>
          </div>
        </div>
      </section>

      {/* 🏞️ Purification & Enhancement Process Section - MODIFIED for Images */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Purification & Enhancement Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four critical stages transform ordinary water into mineral-rich alkaline wellness water
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col hover:shadow-xl transition-shadow overflow-hidden"> {/* REMOVED p-6 here */}
                  
                  {/* --- MODIFIED: Image container to fill space --- */}
                  <div className="w-full h-48 rounded-t-2xl overflow-hidden shadow-lg"> {/* Changed to rounded-t-2xl, removed mb-6 */}
                    <img 
                      src={step.imageUrl} 
                      alt={step.title} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  
                  {/* --- NEW: Add padding to text content --- */}
                  <div className="p-6 flex flex-col items-center text-center flex-grow"> {/* ADDED p-6 back to THIS div */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💧 5-Layer Mineral Media Components Section - Remains unchanged */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              5-Layer Mineral Media Components
            </h2>
            <p className="text-xl text-gray-600">
              Each layer is carefully selected and certified for safety and effectiveness
            </p>
          </div>

          <div className="space-y-4">
            {mineralLayers.map((layer, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedLayer(expandedLayer === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-cyan-500 to-teal-600 w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-gray-900">{layer.name}</h3>
                      <p className="text-sm text-gray-600">{layer.function}</p>
                    </div>
                  </div>
                  {expandedLayer === index ? (
                    <ChevronUp className="h-6 w-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400" />
                  )}
                </button>

                {expandedLayer === index && (
                  <div className="px-8 pb-6 border-t border-gray-100">
                    <div className="pt-6 space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {layer.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center space-x-2 pt-2">
                        <Award className="h-5 w-5 text-cyan-600" />
                        <span className="text-sm font-medium text-cyan-700">{layer.certification}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💡 Choosing the Right System Section - Remains unchanged */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Choosing the Right System
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-100 p-2 rounded-lg">
                    <Award className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Verify Certifications</h3>
                    <p className="text-gray-600">
                      Ensure the system has proper health authority certifications. Our systems are approved by Japanese health standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-100 p-2 rounded-lg">
                    <Search className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Check Filter Replacement</h3>
                    <p className="text-gray-600">
                      Easy maintenance is crucial. Our filters are simple to replace and we provide full support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-100 p-2 rounded-lg">
                    <Heart className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">After-Sales Service</h3>
                    <p className="text-gray-600">
                      Look for comprehensive support. We offer installation, maintenance, and 24/7 customer care.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Services Include:</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="block text-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-teal-700 transition-all"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const Sparkles = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor"/>
    <path d="M19 15L19.5 17L21.5 17.5L19.5 18L19 20L18.5 18L16.5 17.5L18.5 17L19 15Z" fill="currentColor"/>
    <path d="M5 6L5.5 7.5L7 8L5.5 8.5L5 10L4.5 8.5L3 8L4.5 7.5L5 6Z" fill="currentColor"/>
  </svg>
);

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"/>
  </svg>
);