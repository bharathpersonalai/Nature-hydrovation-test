import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 99999 99999',
      action: 'tel:+919999999999',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: 'Chat with us instantly',
      action: 'https://wa.me/919999999999',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'info@naturehydrovation.com',
      action: 'mailto:info@naturehydrovation.com',
      gradient: 'from-teal-500 to-cyan-500',
    },
  ];

  const businessHours = [
    { day: 'Monday - Saturday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 5:00 PM' },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="h-4 w-4" />
              <span>We're Here to Help</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in Touch
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">
                With Our Experts
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Have questions about alkaline water purification? Ready to transform your home's water quality?
              We're here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                target={method.title === 'WhatsApp' ? '_blank' : undefined}
                rel={method.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className={`bg-gradient-to-br ${method.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600">{method.info}</p>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our water wellness experts will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    We've received your message and will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your water purification needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 border-2 border-cyan-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-gradient-to-br from-cyan-500 to-teal-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Nature Hydrovation<br />
                      Gajularamaram<br />
                      Hyderabad, Telangana<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 h-64 flex items-center justify-center text-gray-400 border-2 border-gray-200">
                  <MapPin className="h-16 w-16" />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                    <div className="space-y-3">
                      {businessHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                          <span className="font-medium text-gray-700">{schedule.day}</span>
                          <span className="text-cyan-600 font-semibold">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-cyan-50 rounded-lg p-4 text-sm text-cyan-900">
                  <strong>Note:</strong> Emergency support available 24/7 for existing customers
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-600 to-teal-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Japanese Health Authority Certified</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Expert Installation & Maintenance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Premium Volcanic Mineral Technology</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>15+ Years of Trusted Service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Follow Our Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Stay connected for water wellness tips, customer stories, and product updates
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="bg-cyan-100 text-cyan-800 px-6 py-3 rounded-full font-medium">
              #Refresh_Replenish_Rejoice
            </div>
            <div className="bg-teal-100 text-teal-800 px-6 py-3 rounded-full font-medium">
              #kazannoro
            </div>
            <div className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-medium">
              #NatureHydrovation
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
