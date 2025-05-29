import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Footer sections with links
  const footerSections = [
    {
      title: "Product",
      links: [
        { title: "Online Storefront", path: "#" },
        { title: "Checkout & Payments", path: "#" },
        { title: "Shipping & Fulfillment", path: "#" },
        { title: "Marketing & Analytics", path: "#" },
        { title: "Inventory Management", path: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "About Us", path: "/about" },
        { title: "News Room", path: "/news" },
        { title: "Blog", path: "/blog" },
        { title: "Careers", path: "/careers" },
        { title: "Contact", path: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Help Center", path: "#" },
        { title: "API Documentation", path: "#" },
        { title: "Community Forum", path: "#" },
        { title: "Partner Program", path: "#" },
        { title: "Success Stories", path: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { title: "Privacy Policy", path: "#" },
        { title: "Terms of Service", path: "#" },
        { title: "Cookie Policy", path: "#" },
        { title: "Security", path: "#" },
        { title: "Compliance", path: "#" },
      ],
    },
  ];

  const existingRoutes = [
    "/features/storefront",
    "/features/payments",
    "/features/shipping",
    "/features/marketing",
    "/features/inventory",
    "/about",
    "/news",
    "/blog",
    "/careers",
    "/contact",
    "/help",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="container">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/favicons/favicon-32x32.png"
                alt="Shopy logo"
                className="w-8 h-8 rounded-lg"
                width={32}
                height={32}
              />
              <span className="font-bold text-lg">Shopy</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-xs">
              Helping small businesses succeed online with powerful e-commerce tools.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://x.com/shopy_1nc" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-shopy-100 flex items-center justify-center transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </div>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-shopy-100 flex items-center justify-center transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-shopy-100 flex items-center justify-center transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-shopy-100 flex items-center justify-center transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          
          {/* Links sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      to={existingRoutes.includes(link.path) ? link.path : "#"}
                      className="text-gray-600 hover:text-shopy-600 transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Copyright section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Shopy, Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-gray-500 text-sm hover:text-shopy-600 transition-colors">
                Terms
              </Link>
              <Link to="#" className="text-gray-500 text-sm hover:text-shopy-600 transition-colors">
                Privacy
              </Link>
              <Link to="#" className="text-gray-500 text-sm hover:text-shopy-600 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
