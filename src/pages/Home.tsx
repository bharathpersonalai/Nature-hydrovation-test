import { Link } from 'react-router-dom';
import { Droplet, Shield, Heart, Sparkles, Leaf, Waves, Phone, MessageCircle, CheckCircle, Filter, ArrowRight } from 'lucide-react';

export default function Home() {
  const benefits = [
    { icon: Heart, title: 'Enhanced Hydration', description: 'Smaller water molecules for better cellular absorption' },
    { icon: Sparkles, title: 'pH Balance', description: 'Alkaline water (pH 8.5-10) supports body alkalinity' },
    { icon: Leaf, title: 'Rich in Minerals', description: 'Essential minerals from volcanic stone layers' },
    { icon: Shield, title: 'Antioxidant Properties', description: 'Negative ORP for oxidative stress reduction' },
  ];

  const keyFacts = [
    'pH Range: 8.5 - 10.0',
    'Volcanic Mineral Enrichment',
    'Japanese Health Certified',
    'Multi-Layer Filtration',
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 -z-10"></div>
        <div className="absolute inset-0 opacity-10 -z-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Experience Water
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">
                Nature Intended
              </span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Discover the transformative power of mineral-rich alkaline water enhanced with volcanic stone technology.
              Not just purification—true water wellness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
              >
                <Phone className="h-5 w-5 mr-2" />
                Contact Us for Expert Guidance
              </Link>
              <Link
                to="/technology"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all border-2 border-gray-200"
              >
                Learn About Our Technology
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {keyFacts.map((fact, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center transform hover:scale-105 transition-transform">
                <CheckCircle className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-800">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Water Treatment Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From alkaline purifiers to water softeners, we offer complete solutions for every water quality need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 border-2 border-cyan-200 hover:border-cyan-400 transition-all group">
              <div className="bg-gradient-to-br from-cyan-500 to-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Droplet className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Alkaline Water Purifier</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                5-layer volcanic mineral technology creates pH-balanced water rich in essential minerals for optimal wellness.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center text-cyan-700 font-semibold hover:text-cyan-800 transition-colors"
              >
                Learn More
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all group">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Filter className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">RO Water Purifier</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Advanced reverse osmosis with mineral retention ensures pure, safe water for your entire family.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center text-cyan-700 font-semibold hover:text-cyan-800 transition-colors"
              >
                Learn More
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-8 border-2 border-teal-200 hover:border-teal-400 transition-all group">
              <div className="bg-gradient-to-br from-teal-500 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Waves className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Water Softener</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Ion exchange technology removes hardness, protecting appliances and giving you softer skin and hair.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center text-cyan-700 font-semibold hover:text-cyan-800 transition-colors"
              >
                Learn More
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
            >
              View All Products
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Nature Hydrovation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are pioneers in alkaline water purification, combining advanced Japanese technology
              with natural volcanic minerals to deliver water that doesn't just hydrate—it revitalizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-cyan-500 to-teal-600 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Excellence</h3>
                  <p className="text-gray-600">
                    Approved by Japanese health authorities, ensuring the highest standards of water quality and safety.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-cyan-500 to-teal-600 p-3 rounded-lg">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Natural Minerals</h3>
                  <p className="text-gray-600">
                    Multi-layer volcanic stone filtration enriches water with essential minerals while removing contaminants.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-cyan-500 to-teal-600 p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Wellness Focused</h3>
                  <p className="text-gray-600">
                    Every system is designed with your health in mind, promoting detoxification and optimal hydration.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl p-8 h-full">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h4 className="font-bold text-gray-900 mb-2">Our Mission</h4>
                    <p className="text-gray-600 text-sm">
                      To make premium alkaline mineral water accessible to every home, transforming health through superior hydration.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h4 className="font-bold text-gray-900 mb-2">Our Promise</h4>
                    <p className="text-gray-600 text-sm">
                      Unwavering commitment to quality, transparency, and customer wellness. Every drop matters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Health Benefits at a Glance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that properly mineralized alkaline water makes in your daily wellness routine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
              >
                <div className="bg-gradient-to-br from-cyan-500 to-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Droplet className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Water?
          </h2>
          <p className="text-xl mb-8 text-cyan-50">
            Speak with our water wellness experts and discover the perfect purification system for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-700 font-semibold rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </Link>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
