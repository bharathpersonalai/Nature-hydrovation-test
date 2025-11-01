import { Link } from "react-router-dom";
import {
  Droplet,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-cyan-500 to-teal-600 p-2 rounded-lg">
                <Droplet className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold">Nature Hydrovation</h3>
                <p className="text-xs text-gray-400">Pure Wellness</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Trusted provider of alkaline water purifiers, RO systems, and
              water softeners with volcanic stone technology.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/technology"
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
  <h4 className="text-white font-semibold mb-4">Contact Info</h4>
  <ul className="space-y-3">
    <li className="flex items-start space-x-3">
      <MapPin className="h-4 w-4 text-cyan-400 mt-1 flex-shrink-0" />
      {/* --- THIS IS THE NEW LINK --- */}
      <a
        href="https://maps.app.goo.gl/DU8XcxSLHQyfy2z16" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm hover:text-cyan-400 transition-colors"
      >
        <span className="text-sm">
          Nature Hydrovation
          <br />
          Shop no: 4, 1st floor
          <br />
          Door no:02-128/1/A
          <br />
          Union Bank Opp Building, Gajularamaram, Hyderabad
        </span>
      </a>
    </li>
    <li className="flex items-center space-x-3">
      <Phone className="h-4 w-4 text-cyan-400 flex-shrink-0" />
      <a
        href="tel:+917287004379"
        className="text-sm hover:text-cyan-400 transition-colors"
      >
        +91 79972 61499
      </a>
    </li>
    <li className="flex items-center space-x-3">
      <Mail className="h-4 w-4 text-cyan-400 flex-shrink-0" />
      <a
        href="mailto:info@naturehydrovation.com"
        className="text-sm hover:text-cyan-400 transition-colors"
      >
        naturehydrovation@gmail.com
      </a>
    </li>
  </ul>
</div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-3 mb-4">
              {/* --- Facebook Link --- */}
              <a
                href="https://www.facebook.com/share/19MsJRushh/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-lg hover:bg-cyan-600 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>

              {/* --- Instagram Link --- */}
              <a
                href="https://www.instagram.com/nature_hydrovation?igsh=MXI3bWZxc2ZyYTB0bg=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-lg hover:bg-cyan-600 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
             {/* 🔹 GST Number */}
  <p className="text-white font-bold text-sm mt-2">
    GST: 36BGXPS2557L1ZD 
  </p>
            <div className="space-y-1"></div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Nature Hydrovation. All rights
            reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
}
