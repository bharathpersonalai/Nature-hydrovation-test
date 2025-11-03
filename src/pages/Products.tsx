import { Link } from "react-router-dom";
import {
  Droplet,
  Filter,
  Waves,
  CheckCircle,
  ArrowRight,
  Award,
  Shield,
  Zap,
} from "lucide-react";

// TypeScript interface for Product type
interface Product {
  id: string;
  name: string;
  imageUrl: string;
  gradient: string;
  tagline: string;
  description: string;
  features: string[];
  benefits: string[];
  idealFor: string[];
}

export default function Products() {
  const products: Product[] = [
    {
      id: "alkaline-purifier",
      name: "Alkaline Water Purifier",
      imageUrl: "/images/ALK.png",
      gradient: "from-cyan-500 to-teal-600",
      tagline: "Transform ordinary water into wellness",
      description:
        "Our flagship alkaline water purification system uses 5-layer volcanic mineral technology to create mineral-rich, pH-balanced water that revitalizes your body.",
      features: [
        "pH 8.5-10 alkaline water output",
        "5-layer volcanic mineral enrichment",
        "Negative ORP antioxidant properties",
        "Essential mineral infusion (Ca, Mg, K)",
        "Removes 99.9% contaminants",
        "Japanese Health Authority Certified",
        "Compact countertop or under-sink design",
        "Easy filter replacement system",
      ],
      benefits: [
        "Enhanced cellular hydration",
        "Supports natural pH balance",
        "Rich in bioavailable minerals",
        "Antioxidant protection",
        "Better taste and clarity",
        "Promotes detoxification",
      ],
      idealFor: [
        "Health-conscious families",
        "Fitness enthusiasts",
        "Those seeking wellness through hydration",
        "Anyone wanting premium drinking water",
      ],
    },
    {
      id: "ro-purifier",
      name: "RO Water Purifier",
      imageUrl: "/images/RO2.png",
      gradient: "from-blue-500 to-cyan-600",
      tagline: "Pure, safe water for every need",
      description:
        "Advanced Reverse Osmosis technology combined with mineral cartridges ensures your water is both pure and healthy, removing all harmful contaminants while retaining essential minerals.",
      features: [
        "Multi-stage RO purification",
        "TDS controller for mineral retention",
        "UV sterilization chamber",
        "High-efficiency membrane",
        "Smart LED indicators",
        "Large storage capacity (8-12L)",
        "Energy-efficient operation",
        "Auto shut-off system",
      ],
      benefits: [
        "Removes bacteria, viruses, and chemicals",
        "Reduces heavy metals and TDS",
        "Crystal clear, odor-free water",
        "Balanced mineral content",
        "Safe for all age groups",
        "Cost-effective solution",
      ],
      idealFor: [
        "Areas with high TDS water",
        "Homes and offices",
        "Large families",
        "Commercial establishments",
      ],
    },
    {
      id: "water-softener",
      name: "Water Softener System",
      imageUrl: "/images/pol1.png",
      gradient: "from-teal-500 to-green-600",
      tagline: "Protect your home, prolong appliance life",
      description:
        "Our advanced water softening system removes hardness-causing minerals, protecting your appliances, plumbing, and giving you softer skin and hair.",
      features: [
        "Ion exchange technology",
        "Automatic regeneration cycle",
        "High-capacity resin tank",
        "Digital control valve",
        "Salt-efficient operation",
        "Bypass valve included",
        "Whole-home protection",
        "Low maintenance design",
      ],
      benefits: [
        "Prevents scale buildup in pipes",
        "Extends appliance lifespan",
        "Softer skin and shinier hair",
        "Better soap and detergent efficiency",
        "Reduced energy costs",
        "Cleaner dishes and glassware",
      ],
      idealFor: [
        "Homes with hard water issues",
        "Areas with high calcium/magnesium",
        "Protecting expensive appliances",
        "Improving personal care",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner Section */}
      <section
        role="banner"
        className="relative py-24 sm:py-32 lg:py-48 min-h-[50vh] lg:min-h-[70vh] px-4 sm:px-6 lg:px-8 text-white overflow-hidden flex items-center"
        style={{
          backgroundImage: "url(/images/6.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 bg-gray-900 opacity-20"
          aria-hidden="true"
        ></div>

        <div className="relative max-w-7xl mx-auto z-10 w-full h-full flex flex-col items-start text-left">
          <div className="mt-8 lg:mt-0">
            <h1
              className="text-4xl md:text-5xl font-extrabold mb-2 max-w-xl"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
            >
              <span className="block">Our Water</span>
              <span className="text-green-400">Treatment Systems</span>
            </h1>
          </div>
          <div className="h-16"></div>
          <div className="mb-12 lg:mb-0 max-w-2xl">
            <p
              className="text-xl text-gray-200"
              style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}
            >
              Choose from our range of certified water purification and
              softening systems, each designed to address specific water quality
              needs while promoting health and wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Product Listings */}
      {products.map((product, index) => (
        <section
          key={product.id}
          role="region"
          aria-label={`${product.name} details`}
          className={`py-20 px-4 sm:px-6 lg:px-8 ${
            index % 2 === 0
              ? "bg-white"
              : "bg-gradient-to-br from-gray-50 to-cyan-50"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mb-8">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h2>
                <p className="text-xl text-gray-600 mb-6 italic">
                  {product.tagline}
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  {product.description}
                </p>

                <div className="space-y-6 mt-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Zap className="h-5 w-5 text-cyan-600 mr-2" />
                      Key Benefits
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Technical Features
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div
                          className={`bg-gradient-to-br ${product.gradient} w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Shield className="h-5 w-5 text-cyan-600 mr-2" />
                      Ideal For
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.idealFor.map((ideal, idx) => (
                        <span
                          key={idx}
                          className="bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {ideal}
                        </span>
                      ))}
                    </div>
                  </div>

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

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Not Sure Which System Is Right for You?
          </h2>
          <p className="text-xl mb-8 text-cyan-50">
            Our water wellness experts will assess your water quality,
            understand your needs, and recommend the perfect solution for your
            home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-700 font-semibold rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
              role="button"
            >
              Schedule Free Consultation
            </Link>
            <Link
              to="/technology"
              className="inline-flex items-center justify-center px-8 py-4 bg-cyan-800 text-white font-semibold rounded-xl hover:bg-cyan-900 transition-all border-2 border-white/20"
              role="button"
            >
              Learn About Our Technology
            </Link>
          </div>
        </div>
      </section> 
      
    </div>
  );
}
