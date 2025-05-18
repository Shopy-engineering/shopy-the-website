
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

// Logo component for better organization
const Logo = () => (
  <Link to="/" className="flex items-center gap-2">
    <div className="w-10 h-10 rounded-lg bg-shopy-500 flex items-center justify-center">
      <span className="text-white font-bold text-xl">S</span>
    </div>
    <span className="font-bold text-xl">Shopy</span>
  </Link>
);

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation links
  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "News", path: "/news" },
    { title: "Blog", path: "/blog" },
    { title: "Careers", path: "/careers" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container py-4 flex items-center justify-between">
        <Logo />
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="font-medium text-gray-700 hover:text-shopy-600 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        
        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button className="bg-shopy-600 hover:bg-shopy-700 text-white" asChild>
            <Link to="/signup">Start free trial</Link>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-fade-in">
          <div className="container flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="font-medium text-gray-700 hover:text-shopy-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-100 mt-2">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button className="bg-shopy-600 hover:bg-shopy-700 text-white w-full" asChild>
                <Link to="/signup">Start free trial</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
