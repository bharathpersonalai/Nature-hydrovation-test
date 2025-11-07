import {
  Award,
  Target,
  Heart,
  Shield,
  Users,
  Leaf,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function About() {
  const certifications = [
    {
      name: "Japanese Health Ministry",
      description: "Certified water purification technology",
    },
    { name: "ISO 9001:2015", description: "Quality management systems" },
    {
      name: "NSF/ANSI Standards",
      description: "Water treatment components certification",
    },
    {
      name: "FDA Approved Materials",
      description: "Safe for human consumption",
    },
  ];

  const values = [
    {
      icon: "/images/Untitled design.png",
      title: "Health First",
      description:
        "Every decision we make is guided by the impact on human wellness and vitality.",
    },
    {
      icon: "/images/quality.png",
      title: "Quality Assurance",
      description:
        "Rigorous testing and certification ensure only the best reaches your home.",
    },
    {
      icon: "/images/natural.png",
      title: "Natural Approach",
      description:
        "Harnessing nature's minerals and volcanic stones for pure, living water.",
    },
    {
      icon: "/images/team.png",
      title: "Customer Care",
      description:
        "Dedicated support from consultation through installation and beyond.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* 🏞️ Consistent Hero Section with 'style' Prop */}
      <section
        className="relative py-24 sm:py-32 lg:py-48 **min-h-[50vh] lg:min-h-[70vh]** px-4 sm:px-6 lg:px-8 text-white overflow-hidden flex items-center"
        style={{
          // Use your 'about.jpg' path here
          backgroundImage: "url(/images/5.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay for better text readability */}
        <div
          className="absolute inset-0 bg-gray-900 opacity-30"
          aria-hidden="true"
        ></div>

        {/* Text Content */}
        <div className="max-w-7xl mx-auto text-center relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">
              Nature Hydrovation
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto drop-shadow-md">
            We're not just water purifier suppliers—we're pioneers in water
            wellness, dedicated to transforming health through superior alkaline
            mineral water technology.
          </p>
        </div>
      </section>
      {/* --- MODIFIED HERO SECTION END --- */}

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Nature Hydrovation was founded on a simple yet powerful
                  belief: the water you drink should do more than quench
                  thirst—it should nourish, heal, and revitalize.
                </p>
                <p>
                  After years of research into water science and the remarkable
                  properties of volcanic minerals, we partnered with Japanese
                  health authorities to bring advanced alkaline water
                  purification technology to homes across India.
                </p>
                <p>
                  Today, we stand as a trusted name in water wellness, combining
                  cutting-edge filtration with nature's most powerful minerals
                  to create water that truly makes a difference in people's
                  lives.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center shadow-md">
                    <div className="text-4xl font-bold text-cyan-700 mb-2">
                      15+
                    </div>
                    <div className="text-sm text-gray-600">
                      Years of Excellence
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-md">
                    <div className="text-4xl font-bold text-cyan-700 mb-2">
                      10K+
                    </div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-md">
                    <div className="text-4xl font-bold text-cyan-700 mb-2">
                      99%
                    </div>
                    <div className="text-sm text-gray-600">
                      Satisfaction Rate
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-md">
                    <div className="text-4xl font-bold text-cyan-700 mb-2">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600">
                      Support Available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8">
              {/* Mission Section */}
              <div className="flex items-center mb-6">
                <img
                  src="/images/mission.png" // your mission image with text included
                  alt="Our Mission"
                  className="h-24 w-auto object-contain"
                />
              </div>
              <p className="text-gray-700 leading-relaxed mb-10">
                To revolutionize home water consumption by making premium
                alkaline mineral water accessible and affordable. We believe
                everyone deserves water that supports their health goals and
                enhances their quality of life.
              </p>

              {/* Vision Section */}
              <div className="flex items-center mb-6">
                <img
                  src="/images/vision.png" // your vision image with text included
                  alt="Our Vision"
                  className="h-24 w-auto object-contain"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be recognized as India's most trusted water wellness brand,
                setting new standards in water purification technology while
                educating communities about the profound impact of proper
                hydration on human health.
              </p>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What Drives Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Nature Hydrovation, we’re driven by a single purpose to
                make alkaline, mineral-rich water a part of every healthy
                household. Our advanced alkaline RO systems and Japanese media
                alkaline filters are designed to do more than purify they
                revitalize every drop with essential sea minerals and rare
                volcanic stones, creating water that’s naturally balanced,
                hydrogen-infused, and antioxidant-rich.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe wellness begins with hydration. Each system we
                install and each filter we maintain reflects our commitment to
                scientific precision, natural enhancement, and lasting health
                impact. By combining cutting-edge Japanese filtration technology
                with India’s growing awareness of mineral wellness, Nature
                Hydrovation stands at the intersection of innovation, purity,
                and purpose. 
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Principles that guide every decision and interaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="bg-gradient-to-br from-cyan-500 to-teal-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <img
                    src={value.icon}
                    alt={value.title}
                    width={50}
                    height={40}
                    className="object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Certifications & Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is validated by leading health and
              safety organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-6 border-2 border-cyan-200 hover:border-cyan-400 transition-colors"
              >
                <Award className="h-10 w-10 text-cyan-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-600 to-teal-700 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Visit Our Location
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <a
                  href="https://maps.app.goo.gl/DU8XcxSLHQyfy2z16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-700 leading-relaxed hover:text-cyan-700 transition-colors"
                >
                  Nature Hydrovation
                  <br />
                  Shop no:4, 1st floor, Door no:02-128/1/A
                  <br />
                  Union Bank Opp Building, Gajularamaram
                  <br />
                  Hyderabad, Telangana, India
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-6 w-6" />
                <a href="tel:+917997261499" className="text-lg hover:underline">
                  +91 79972 61499
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-6 w-6" />
                <a
                  href="mailto:naturehydrovation@gmail.com"
                  className="text-lg hover:underline"
                >
                  naturehydrovation@gmail.com
                </a>
              </div>
            </div>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-cyan-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              Schedule Your Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
