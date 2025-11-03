import { useState } from "react";
import "../components/Contact.css"; // keep your CSS file here
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { MapPin, Send, Clock, CheckCircle, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: <FiPhone size={22} color="#fff" />,
      title: "Call Us",
      info: "+91 79972 61499",
      action: "tel:+917997261499",
      color: "#007BFF",
    },
    {
      icon: <FaWhatsapp size={22} color="#fff" />,
      title: "WhatsApp",
      info: "Chat with us instantly",
      action: "https://wa.me/917997261499",
      color: "#25D366",
    },
    {
      icon: <HiOutlineMail size={22} color="#fff" />,
      title: "Email Us",
      info: "naturehydrovation@gmail.com",
      action: "mailto:naturehydrovation@gmail.com", 
      color: "#00bcd4",
    },
  ];

  const businessHours = [
    { day: "Monday - Saturday", hours: "9:00 AM - 7:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 5:00 PM" },
  ];

  return (
    <div className="min-h-screen">
   {/* Hero Section */}
<section
  className="relative h-[90vh] bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url("/images/cc.png")`, // your image path
  }}
>
  <div className="absolute inset-0 bg-black/40"></div> {/* subtle dark overlay */}
  
  <div className="relative flex items-center justify-start h-full px-12 md:px-24">
    <h1 className="text-white text-5xl md:text-6xl font-bold drop-shadow-lg">
      We are here to Help
    </h1>
  </div>
</section>



      {/* Contact Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
  <a
    key={index}
    href={method.action}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all group flex flex-col items-center text-center"
  >
    {/* Updated Icon Circle */}
    <div
      className="icon-circle mb-6 flex items-center justify-center"
      style={{ backgroundColor: method.color }}
    >
      {method.icon}
    </div>

    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
    <p className="text-gray-600">{method.info}</p>
  </a>
))}

          </div>

          {/* Contact Form + Info */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our water wellness experts will get
                back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700">
                    We've received your message and will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
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
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
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
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
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

            {/* Right: Location + Business Hours */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 border-2 border-cyan-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-gradient-to-br from-cyan-500 to-teal-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Our Location
                    </h3>
                    <a
                      href="https://maps.app.goo.gl/DU8XcxSLHQyfy2z16"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 leading-relaxed hover:text-cyan-700 transition-colors"
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
                </div>

                <div className="bg-white rounded-xl h-64 overflow-hidden border-2 border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1761832072216!6m8!1m7!1s75YdgcBN5k9TI8YwCbk8GQ!2m2!1d17.52512465554164!2d78.42299460638385!3f218.35213727148806!4f18.394656038025303!5f0.7820865974627469"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Business Hours
                    </h3>
                    <div className="space-y-3">
                      {businessHours.map((schedule, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                        >
                          <span className="font-medium text-gray-700">
                            {schedule.day}
                          </span>
                          <span className="text-cyan-600 font-semibold">
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-cyan-50 rounded-lg p-4 text-sm text-cyan-900">
                  <strong>Note:</strong> Emergency support available 24/7 for
                  existing customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
