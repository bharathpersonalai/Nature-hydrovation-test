import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  Droplet, Shield, Heart, Sparkles, Leaf, Waves, 
  Phone, MessageCircle, CheckCircle, Filter, ArrowRight 
} from 'lucide-react';

interface BenefitProps {
  icon: any;
  title: string;
  description: string;
}

interface Product {
  title: string;
  description: string;
  image: string;
  link: string;
}

const BenefitCard = ({ icon: Icon, title, description }: BenefitProps) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group animate-fadeIn">
    <div className="bg-gradient-to-br from-cyan-500 to-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="h-8 w-8 text-white" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default function Home() {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.scroll-animate');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: Heart, title: 'Enhanced Hydration', description: 'Smaller water molecules for better cellular absorption' },
    { icon: Sparkles, title: 'pH Balance', description: 'Alkaline water (pH 8.5-10) supports body alkalinity' },
    { icon: Leaf, title: 'Rich in Minerals', description: 'Essential minerals from volcanic stone layers' },
    { icon: Shield, title: 'Antioxidant Properties', description: 'Negative ORP for oxidative stress reduction' },
  ];

  const products: Product[] = [
    {
      title: "Alkaline Water Purifier",
      description: "Transform ordinary water into mineral-rich alkaline wellness water",
      image: "/images/Alkaline.png",
      link: "/products#alkaline"
    },
    {
      title: "RO Water Purifier",
      description: "Advanced reverse osmosis with mineral retention technology",
      image: "/images/RO.jpg",
      link: "/products#ro"
    },
    {
      title: "Water Softener",
      description: "Whole-home solution for hard water problems",
      image: "/images/softener.png",
      link: "/products#softener"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nature Hydrovation - Premium Water Treatment Solutions</title>
        <meta 
          name="description" 
          content="Experience water as nature intended with our premium alkaline water purifiers and treatment systems. Transform your hydration with volcanic mineral technology."
        />
        <meta 
          name="keywords" 
          content="water purifier, alkaline water, water treatment, mineral water, water softener, hydration, wellness"
        />
        <meta property="og:title" content="Nature Hydrovation - Premium Water Treatment Solutions" />
        <meta property="og:description" content="Experience water as nature intended with our premium water treatment solutions." />
        <meta property="og:image" content="/images/home.jpg" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          className={`relative py-24 sm:py-32 lg:py-48 min-h-[70vh] lg:min-h-[80vh] px-4 sm:px-6 lg:px-8 
                    text-white overflow-hidden flex items-center justify-center text-center
                    ${!bgLoaded ? 'bg-gradient-to-br from-cyan-600 to-teal-700' : ''}`}
          style={{
            backgroundImage: `url(/images/home.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <img
            src="/images/home.jpg"
            alt=""
            className="hidden"
            onLoad={() => setBgLoaded(true)}
          />
          <div className="absolute inset-0 bg-gray-900 opacity-30"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Pure Water, <br />
              <span className="text-green-400">Pure Life</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-100">
              Experience water as nature intended with our premium alkaline water purifiers
              and treatment systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-700 font-semibold rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-cyan-600 text-white font-semibold rounded-xl hover:bg-cyan-700 transition-all border-2 border-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-animate">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our range of certified water treatment systems
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Link 
                  key={index}
                  to={product.link}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                      <p className="text-gray-600">{product.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-cyan-50 scroll-animate">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Nature Hydrovation?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">Japanese volcanic mineral technology for superior water quality</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">Certified by international health and safety standards</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">Professional installation and maintenance service</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">24/7 customer support and satisfaction guarantee</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/about.jpg"
                  alt="Water purification system"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-animate">
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
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-600 to-teal-700 text-white scroll-animate">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Water?
            </h2>
            <p className="text-xl mb-8 text-cyan-50">
              Schedule a free consultation with our water wellness experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-700 font-semibold rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/technology"
                className="inline-flex items-center justify-center px-8 py-4 bg-cyan-800 text-white font-semibold rounded-xl hover:bg-cyan-900 transition-all border-2 border-white/20"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        {isVisible && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-3 bg-cyan-600 text-white rounded-full shadow-lg hover:bg-cyan-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowRight className="h-6 w-6 transform rotate-270" />
          </button>
        )}
      </div>
    </>
  );
}