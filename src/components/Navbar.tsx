import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/technology", label: "Technology" },
    { path: "/about", label: "About Us" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
    className="fixed w-full bg-white backdrop-blur-sm shadow-sm z-50"

      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-20 flex-wrap">
          {/* Logo + Text + Tagline */}
          <Link to="/" className="flex flex-col items-start space-y-1 group">
            <div className="flex items-center space-x-2">
              <img
                src="/images/nav logo.png"
                alt="Nature Hydrovation Logo"
                className={`h-14 w-auto object-contain transition-opacity duration-300 ${
                  logoLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setLogoLoaded(true)}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all relative
                  ${
                    isActive(link.path)
                      ? "bg-cyan-50 text-cyan-700 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-cyan-600 after:transform after:scale-x-100 after:transition-transform"
                      : "text-gray-900 hover:bg-gray-50 hover:text-cyan-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-cyan-600 after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsOpen(!isOpen);
              }
            }}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div ref={menuRef} className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all relative
                  ${
                    isActive(link.path)
                      ? "bg-cyan-50 text-cyan-700 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-cyan-600 after:transform after:scale-x-100 after:transition-transform"
                      : "text-gray-700 hover:bg-gray-50 hover:text-cyan-600"
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
