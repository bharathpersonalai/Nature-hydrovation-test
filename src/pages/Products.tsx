import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Zap } from "lucide-react";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  gradient: string;
  tagline: string;
  description: string;
  features: string[];
  benefits?: string[];
  idealFor: string[];
  extraImages?: {
    houseDiagram: string;
    usageIcons: string;
  };
}

export default function Products() {
  const products: Product[] = [
    {
      id: "alkaline-purifier",
      name: "Alkaline Water Purifier",
      imageUrl: "/images/P1.jpg",
      gradient: "from-cyan-500 to-teal-600",
      tagline: "Transform ordinary water into wellness",
      description:
        "Our flagship alkaline purifier uses 5-layer volcanic mineral technology to produce pH-balanced, mineral-rich water that revitalizes your body.",
      features: [
        "pH 8.5-10 alkaline water",
        "Volcanic mineral enrichment",
        "Negative ORP antioxidant",
        "Essential minerals (Ca, Mg, K)",
        "Removes 99.9% contaminants",
        "Compact under-sink option",
        "Easy filter replacement",
      ],
      benefits: [
        "Better hydration",
        "Natural pH balance support",
        "Mineral-rich healthy water",
        "Detoxification & antioxidant benefits",
        "Smooth refreshing taste",
      ],
      idealFor: ["Health-conscious families", "Fitness & wellness lifestyle"],
    },

    {
      id: "ro-purifier",
      name: "RO Water Purifier",
      imageUrl: "/images/P2.jpg",
      gradient: "from-blue-500 to-cyan-600",
      tagline: "Advanced purification for every drop",
      description:
        "High-performance Reverse Osmosis technology ensures safe and crystal-clear drinking water.",
      features: [
        "Multi-stage RO filtration",
        "UV purification chamber",
        "TDS mineral controller",
        "Large water storage capacity",
        "Auto cut-off system",
      ],
      benefits: [
        "Removes bacteria & viruses",
        "Reduces heavy metals & chemicals",
        "Great tasting, pure water",
        "Safe for babies & elders",
      ],
      idealFor: ["High TDS areas", "Urban homes", "Large families"],
    },

    // ✅ Polyphosphate filter (replaces softener)
    {
      id: "polyphosphate-filter",
      name: "Polyphosphate Whole-House Anti-Scale Filter",
      imageUrl: "/images/POL.png",
      gradient: "from-green-500 to-teal-600",
      tagline: "Protects plumbing & appliances from scale deposits",
      description:
        "Whole-house polyphosphate system prevents scale in pipes, geysers, faucets & appliances without altering water hardness.",
      features: [
        "European food-grade polyphosphate",
        "Prevents scale & corrosion",
        "Protects geysers & washing machines",
        "Zero electricity",
        "No water wastage",
        "Easy cartridge replacement",
        "Ideal for borewell/municipal water",
      ],
      idealFor: ["Homes with scaling issues", "Borewell & tank water"],
      extraImages: {
        houseDiagram: "/images/housee.png",
        usageIcons: "/images/poly line.png",
      },
    },
  ];

  return (
  <div className="min-h-screen">

    {/* ✅ Hero Section */}
    <section
      className="relative py-24 sm:py-32 lg:py-48 min-h-[50vh] lg:min-h-[70vh] text-white flex items-center px-6"
      style={{
        backgroundImage: "url(/images/6.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our Water <span className="text-green-400">Treatment Systems</span>
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl">
          Premium systems engineered for healthy, scale-free & purified water at home.
        </p>
      </div>
    </section>

    {products.map((product, index) => {
      const isPoly = product.id === "polyphosphate-filter";

      return (
        <section
          key={product.id}
          className={`py-20 px-6 ${
            index % 2 === 0
              ? "bg-white"
              : "bg-gradient-to-br from-gray-50 to-cyan-50"
          }`}
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            {/* ✅ LEFT SIDE */}
            <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mb-8">
                <img
                  src={product.imageUrl}
                  className="w-full h-full object-cover"
                  alt={product.name}
                />
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h2>
              <p className="text-xl text-gray-600 mb-4 italic">
                {product.tagline}
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {product.description}
              </p>

              {!isPoly && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Zap className="h-5 w-5 text-cyan-600 mr-2" />
                    Key Benefits
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.benefits?.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ✅ RIGHT SIDE */}
            <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
              {isPoly ? (
                // ✅ Show single image for polyphosphate
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <img
                    src="/images/prod3.jpg"
                    alt="Polyphosphate System Overview"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ) : (
                // ✅ Default layout for other products
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Technical Features
                  </h3>

                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className={`w-6 h-6 rounded-md bg-gradient-to-br ${product.gradient} flex items-center justify-center`}
                        >
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 border-t pt-6">
                    <Link
                      to="/contact"
                      className="block text-center px-6 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg"
                    >
                      Request Consultation{" "}
                      <ArrowRight className="inline ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ✅ Polyphosphate usage strip stays same */}
          {isPoly && product.extraImages?.usageIcons && (
            <div className="mt-14 flex justify-center">
              <div className="max-w-5xl w-full rounded-xl overflow-hidden shadow-xl border border-gray-200">
                <img
                  src={product.extraImages.usageIcons}
                  className="w-full object-contain"
                  alt="Appliance usage"
                />
              </div>
            </div>
          )}
        </section>
      );
    })}

    {/* ✅ CTA */}
    <section className="py-20 bg-gradient-to-br from-cyan-600 to-teal-700 text-white text-center px-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Not Sure Which System is Right For You?
      </h2>
      <p className="text-lg mb-8 text-cyan-100">
        Get a free water test & expert advice.
      </p>

      <Link
        to="/contact"
        className="inline-block px-10 py-4 bg-white text-cyan-700 rounded-xl font-bold hover:scale-105 transition shadow-lg"
      >
        Book Free Consultation
      </Link>
    </section>
  </div>
);
}
