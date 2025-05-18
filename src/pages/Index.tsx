
import React from "react";
import { Link } from "react-router-dom";
import { 
  ShoppingCart, 
  CreditCard, 
  Truck, 
  BarChart, 
  Package, 
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

const Index = () => {
  // Featured customers logos (placeholder content)
  const customers = [
    "Artisanal Cafe", "Boutique Apparel", "Eco Goods", 
    "Local Harvest", "Handmade Crafts", "Urban Garden"
  ];
  
  // Feature cards content
  const features = [
    {
      icon: <ShoppingCart className="h-6 w-6 text-shopy-600" />,
      title: "Online Storefront",
      description: "Build a beautiful, customizable online store with our easy-to-use themes and drag-and-drop builder."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-shopy-600" />,
      title: "Checkout & Payments",
      description: "Accept payments with ease using our secure, optimized checkout process and multiple payment options."
    },
    {
      icon: <Truck className="h-6 w-6 text-shopy-600" />,
      title: "Shipping & Fulfillment",
      description: "Manage orders, print shipping labels, and track deliveries all from one centralized dashboard."
    },
    {
      icon: <BarChart className="h-6 w-6 text-shopy-600" />,
      title: "Marketing & Analytics",
      description: "Grow your business with built-in SEO tools, email marketing, and detailed performance analytics."
    },
    {
      icon: <Package className="h-6 w-6 text-shopy-600" />,
      title: "Inventory Management",
      description: "Keep track of your stock with automated inventory tracking, bulk editing, and low-stock alerts."
    },
    {
      icon: <Globe className="h-6 w-6 text-shopy-600" />,
      title: "Global Expansion",
      description: "Reach customers worldwide with multi-currency support, international shipping, and localization tools."
    }
  ];
  
  // Testimonial cards content
  const testimonials = [
    {
      quote: "Shopy transformed our small pottery business. We went from selling at local markets to shipping nationwide in just months.",
      author: "Emily Richards",
      role: "Owner",
      company: "Artisan Ceramics"
    },
    {
      quote: "The ease of setting up our store and managing inventory has been a game-changer for our boutique. Customer support is fantastic too!",
      author: "Michael Torres",
      role: "Founder",
      company: "Urban Threads"
    },
    {
      quote: "As a one-person business, I needed something simple yet powerful. Shopy is exactly that—it handles the tech so I can focus on creating.",
      author: "Sarah Johnson",
      role: "Creator",
      company: "Handcrafted Journals"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-shopy-50 to-white pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Empower your small business with{" "}
                <span className="gradient-text">Shopy</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                The all-in-one e-commerce platform designed specifically for small businesses. 
                Build your store, sell your products, and grow your brand—all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-shopy-600 hover:bg-shopy-700 text-white px-8 py-6 h-auto text-lg" asChild>
                  <Link to="/signup">Start your free trial</Link>
                </Button>
                <Button variant="outline" className="px-8 py-6 h-auto text-lg" asChild>
                  <Link to="/demo">See a demo</Link>
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                No credit card required. 14-day free trial.
              </p>
            </div>
            <div className="lg:justify-self-end animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Shopy platform dashboard" 
                className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Customers Section */}
      <section className="py-12 border-y border-gray-100">
        <div className="container">
          <p className="text-center text-gray-600 mb-8">Trusted by thousands of small businesses</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {customers.map((customer, index) => (
              <div key={index} className="text-gray-400 font-semibold">
                {customer}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to succeed online
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Our platform is built specifically for small businesses, with all the tools you need
              to build, manage, and grow your online store.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Shopy works for you
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Getting started is simple. Our platform is designed to help you launch quickly
              and scale effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Build your store",
                description: "Choose from our beautiful templates and customize to match your brand."
              },
              {
                step: "2",
                title: "Add your products",
                description: "Upload your catalog, set prices, and configure shipping options."
              },
              {
                step: "3",
                title: "Start selling",
                description: "Launch your store, market your products, and manage orders with ease."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-shopy-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-shopy-600 font-semibold">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loved by small businesses
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Don't take our word for it. Here's what small business owners have to say about Shopy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Preview Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Choose the plan that's right for your business. All plans come with a 14-day free trial.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-shopy-50 p-1 rounded-lg inline-flex">
              <Button className="bg-white shadow-sm border border-transparent">Monthly</Button>
              <Button variant="ghost">Annual (save 20%)</Button>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$29",
                  description: "Everything you need to start selling online",
                  features: ["Online store", "Unlimited products", "24/7 support", "2.9% + 30¢ transaction fee"]
                },
                {
                  name: "Growth",
                  price: "$79",
                  description: "Advanced features to grow your business",
                  features: ["Everything in Starter", "Professional reports", "Advanced inventory", "Lower transaction fees"]
                },
                {
                  name: "Scale",
                  price: "$299",
                  description: "For established businesses ready to scale",
                  features: ["Everything in Growth", "Custom reporting", "Priority support", "Lowest transaction fees"]
                }
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-lg border ${
                    index === 1
                      ? "border-shopy-200 shadow-lg relative bg-white"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  {index === 1 && (
                    <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                      <span className="bg-shopy-600 text-white text-xs font-semibold py-1 px-3 rounded-full inline-block">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="p-6 md:p-8">
                    <h3 className="font-semibold text-lg">{plan.name}</h3>
                    <div className="mt-4 mb-6">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <Button
                      className={index === 1 ? "bg-shopy-600 hover:bg-shopy-700 w-full" : "w-full"}
                      variant={index === 1 ? "default" : "outline"}
                    >
                      Choose plan
                    </Button>
                    <ul className="mt-6 space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <svg
                            className="h-4 w-4 mr-2 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default Index;
