import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/technology", label: "Technology" },
    { path: "/about", label: "About Us" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-20 flex-wrap">
          
          {/* 🔹 Logo + Text + Tagline */}
          <Link to="/" className="flex flex-col items-start space-y-1 group">
            {/* Logo + Brand in one line */}
            <div className="flex items-center space-x-2">
              <img
                src="/images/logo.png" // 👉 your logo path
                alt="Nature Hydrovation Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
          </Link>

          {/* 🔹 Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-cyan-50 text-cyan-700"
                    : "text-gray-700 hover:bg-gray-50 hover:text-cyan-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* 🔹 Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-cyan-50 text-cyan-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
