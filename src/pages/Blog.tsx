import { BookOpen, Calendar, Clock, ArrowRight, Droplet, TestTube, Wrench, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const articles = [
    {
      id: 1,
      icon: Droplet,
      title: 'The Complete Guide to Alkaline Water: Benefits and Science',
      excerpt: 'Discover why pH matters and how alkaline water supports your body\'s natural balance. Learn about the science behind optimal hydration and mineral absorption.',
      date: '2024-10-15',
      readTime: '8 min read',
      category: 'Health Science',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      id: 2,
      icon: TestTube,
      title: 'Understanding Volcanic Minerals in Your Water',
      excerpt: 'Explore how volcanic stones and marine minerals transform ordinary water into a wellness powerhouse. The natural filtration process explained.',
      date: '2024-10-10',
      readTime: '6 min read',
      category: 'Technology',
      gradient: 'from-teal-500 to-green-500',
    },
    {
      id: 3,
      icon: Wrench,
      title: 'How to Maintain Your Water Purifier for Optimal Performance',
      excerpt: 'Essential maintenance tips to ensure your water purification system continues delivering premium quality water year after year.',
      date: '2024-10-05',
      readTime: '5 min read',
      category: 'Maintenance',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      id: 4,
      icon: Scale,
      title: 'RO vs Alkaline: Choosing the Right Water System',
      excerpt: 'A comprehensive comparison of water purification technologies. Understand the differences and make an informed decision for your family\'s health.',
      date: '2024-09-28',
      readTime: '10 min read',
      category: 'Buyer Guide',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      id: 5,
      icon: Heart,
      title: 'Hydration and Health: How Water Quality Affects Your Body',
      excerpt: 'The connection between water quality and overall wellness. Learn how mineral-rich water impacts digestion, energy levels, and cellular health.',
      date: '2024-09-20',
      readTime: '7 min read',
      category: 'Health Science',
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      id: 6,
      icon: Shield,
      title: 'What to Look for When Buying a Water Purifier',
      excerpt: 'Essential factors to consider before purchasing. Certifications, filtration technology, maintenance costs, and long-term value explained.',
      date: '2024-09-12',
      readTime: '9 min read',
      category: 'Buyer Guide',
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  const categories = [
    'All Articles',
    'Health Science',
    'Technology',
    'Buyer Guide',
    'Maintenance',
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              <span>Educational Resources</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Water Wellness
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">
                Knowledge Hub
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Expert insights on water purification, health benefits, and making informed decisions
              about your family's hydration needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className={`h-48 bg-gradient-to-br ${article.gradient} flex items-center justify-center`}>
                  <article.icon className="h-20 w-20 text-white opacity-90" />
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-xs font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                    <button className="text-cyan-600 hover:text-cyan-700 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-gradient-to-br from-cyan-500 to-teal-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Droplet className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Health Benefits</h3>
              <p className="text-gray-600 mb-4">
                Learn how alkaline mineral water supports your body's natural processes and enhances overall wellness.
              </p>
              <button className="text-cyan-600 hover:text-cyan-700 font-medium text-sm flex items-center">
                Explore Articles
                <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-gradient-to-br from-teal-500 to-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <TestTube className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technology Insights</h3>
              <p className="text-gray-600 mb-4">
                Understand the science behind volcanic mineral filtration and advanced water purification methods.
              </p>
              <button className="text-cyan-600 hover:text-cyan-700 font-medium text-sm flex items-center">
                Explore Articles
                <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Scale className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Buyer Guides</h3>
              <p className="text-gray-600 mb-4">
                Make informed decisions with our comprehensive comparisons and expert recommendations.
              </p>
              <button className="text-cyan-600 hover:text-cyan-700 font-medium text-sm flex items-center">
                Explore Articles
                <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Stay Informed</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to receive the latest articles on water wellness, health tips, and product updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-teal-700 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Have Questions About Water Purification?</h2>
          <p className="text-xl mb-8 text-cyan-50">
            Our water wellness experts are here to help you understand the best options for your home.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-cyan-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
          >
            Contact Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
}

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"/>
  </svg>
);

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor"/>
  </svg>
);
