import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {CircularGallery}  from "../components/CircularGallery";  
import {
  Droplet,
  Shield,
  Heart,
  Sparkles,
  Leaf,
  Waves,
  Phone,
  MessageCircle,
  CheckCircle,
  Filter,
  ArrowRight,
} from "lucide-react";

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
const galleryItems = [
  {
    image: "/images/acce.png", // Replace with your image
    text: "Our Technology",
  },
  {
    image: "/images/K2.png", // Replace with your image
    text: "Alkaline Purifier",
  },
  {
    image: "/images/R1.png", // Replace with your image
    text: "Alkaline Purifier",
  },
  {
    image: "/images/R2.png", // Replace with your image
    text: "Alkaline Purifier",
  },
  {
    image: "/images/R3.png", // Replace with your image
    text: "Alkaline Purifier",
  },
  {
    image: "/images/RO2.png", // Replace with your image
    text: "Alkaline Purifier",
  },
  {
    image: "/images/gm.png", // Replace with your image
    text: "Alkaline Purifier",
  },
  // ... add as many as you like
];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // This part is for your scroll-to-top button
            setIsVisible(true);

            // *** ADD THIS LINE: This triggers the animation ***
            entry.target.classList.add('is-visible');
            
            // *** ADD THIS LINE: This stops observing it after it's visible ***
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".scroll-animate");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Heart,
      title: "Enhanced Hydration",
      description: "Smaller water molecules for better cellular absorption",
    },
    {
      icon: Sparkles,
      title: "pH Balance",
      description: "Alkaline water (pH 8.5-10) supports body alkalinity",
    },
    {
      icon: Leaf,
      title: "Rich in Minerals",
      description: "Essential minerals from volcanic stone layers",
    },
    {
      icon: Shield,
      title: "Antioxidant Properties",
      description: "Negative ORP for oxidative stress reduction",
    },
  ];

  const products: Product[] = [
    {
      title: "Alkaline Water Purifier",
      description:
        "Transform ordinary water into mineral-rich alkaline wellness water",
      image: "/images/Alkaline.png",
      link: "/products#alkaline",
    },
    {
      title: "RO Water Purifier",
      description: "Advanced reverse osmosis with mineral retention technology",
      image: "/images/K1.png",
      link: "/products#ro",
    },
    {
      title: "Water Softener",
      description: "Whole-home solution for hard water problems",
      image: "/images/poly.png",
      link: "/products#softener",
    },
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
        <meta
          property="og:title"
          content="Nature Hydrovation - Premium Water Treatment Solutions"
        />
        <meta
          property="og:description"
          content="Experience water as nature intended with our premium water treatment solutions."
        />
        <meta property="og:image" content="/images/home.jpg" />
      </Helmet>

      <div className="min-h-screen bg-white"> 
        {/* Hero Section */}
        <section
          className={`relative py-24 sm:py-32 lg:py-48 min-h-[70vh] lg:min-h-[80vh] px-4 sm:px-6 lg:px-8 
                    text-white overflow-hidden flex items-center justify-center text-center
                    ${
                      !bgLoaded
                        ? "bg-gradient-to-br from-cyan-600 to-teal-700"
                        : ""
                    }`}
          style={{
            backgroundImage: `url(/images/home.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
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
              Experience water as nature intended with our premium alkaline
              water purifiers and treatment systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-4 py-2 sm:px-8 sm:py-4 text-sm sm:text-base bg-white text-cyan-700 font-semibold rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg w-auto sm:w-auto mx-4 sm:mx-0"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-4 py-2 sm:px-8 sm:py-4 text-sm sm:text-base bg-cyan-600 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-cyan-700 transition-all border border-white/20 w-auto sm:w-auto mx-4 sm:mx-0"
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
                <Link key={index} to={product.link} className="group">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="h-72 bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {product.title}
                      </h3>
                      <p className="text-gray-600">{product.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
{/* 🚀 NEW: GALLERY SECTION (Placed after "Our Solutions") 🚀 */}
        <section
  className="py-20 overflow-hidden scroll-animate relative" // Added 'relative'
  style={{
    backgroundImage: `url('/images/13.jpg')`, // Your image path
    backgroundSize: 'cover', // Ensures image covers the section
    backgroundPosition: 'center', // Centers the image
  }}
>
  {/* Optional: Add an overlay for better text readability */}
  <div className="absolute inset-0 bg-gray-900 opacity-30"></div> 
  {/* All your existing content will go here, after the overlay */}

  <div className="max-w-7xl mx-auto text-center mb-16 px-4 relative z-10"> {/* Added 'relative z-10' */}
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
      Our Gallery
    </h2>
    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
      Explore different styles for your home.
    </p>
  </div>

  {/* Your CircularGallery component */}
  <CircularGallery
    items={galleryItems}
    bend={-10}
    scrollSpeed={2}
    scrollEase={0.05}
    textColor={"#ffffff"}
    borderRadius={0.05}
  />
</section>
        {/* 🚀 END: GALLERY SECTION 🚀 */}
        {/* About Section */}
       {/* About Section (Why Choose) */}
        <section
          className="relative min-h-[95vh] py-24 px-4 sm:px-6 lg:px-8" /* <-- REMOVED scroll-animate */
          style={{
            backgroundImage: `url('/images/about.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gray-900 opacity-55"></div>

          <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              {/* Left content */}
              <div>
                <h2 className="text-4xl font-bold text-white mb-6 scroll-animate"> {/* <-- Use original slide-up animation */}
                  Why Choose Nature Hydrovation?
                </h2>
                <div className="space-y-4">
                  {/* Staggered list items */}
                  <div className="flex items-start space-x-4 scroll-animate animate-slide-in-left" style={{ transitionDelay: '100ms' }}>
                    <CheckCircle className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-200">
                      Japanese volcanic mineral technology for superior water quality
                    </p>
                  </div>
                  <div className="flex items-start space-x-4 scroll-animate animate-slide-in-left" style={{ transitionDelay: '200ms' }}>
                    <CheckCircle className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-200">
                      Certified by international health and safety standards
                    </p>
                  </div>
                  <div className="flex items-start space-x-4 scroll-animate animate-slide-in-left" style={{ transitionDelay: '300ms' }}>
                    <CheckCircle className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-200">
                      Professional installation and maintenance service
                    </p>
                  </div>
                <div className="flex items-start space-x-4 scroll-animate animate-slide-in-left" style={{ transitionDelay: '400ms' }}>
                    <CheckCircle className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-200">
                    24/7 customer support and satisfaction guarantee
                 </p>
                  </div>
                </div>
              </div>

              {/* Right placeholder (which is invisible, so no animation needed) */}
              <div className="hidden lg:block h-full"></div>
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
              Schedule a free consultation with our water wellness experts
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-4 py-2 sm:px-8 sm:py-4 text-sm sm:text-base bg-white text-cyan-700 font-semibold rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg w-auto sm:w-auto mx-4 sm:mx-0"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                to="/technology"
                className="inline-flex items-center justify-center px-4 py-2 sm:px-8 sm:py-4 text-sm sm:text-base bg-cyan-800 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-cyan-900 transition-all border border-white/20 w-auto sm:w-auto mx-4 sm:mx-0"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        {isVisible && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
