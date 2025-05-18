
import React, { useState } from "react";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Careers = () => {
  // State for filtering jobs
  const [activeCategory, setActiveCategory] = useState("All");

  // Job categories
  const categories = ["All", "Engineering", "Product", "Marketing", "Customer Success", "Operations"];

  // Job listings (placeholder content)
  const allJobs = [
    {
      id: "1",
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "Remote (US)",
      type: "Full-time"
    },
    {
      id: "2",
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time"
    },
    {
      id: "3",
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote (Global)",
      type: "Full-time"
    },
    {
      id: "4",
      title: "Growth Marketing Specialist",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time"
    },
    {
      id: "5",
      title: "Backend Engineer",
      department: "Engineering",
      location: "Remote (US)",
      type: "Full-time"
    },
    {
      id: "6",
      title: "UX/UI Designer",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time"
    },
    {
      id: "7",
      title: "Technical Support Specialist",
      department: "Customer Success",
      location: "Remote (Global)",
      type: "Full-time"
    },
    {
      id: "8",
      title: "Content Marketing Manager",
      department: "Marketing",
      location: "Remote (US)",
      type: "Full-time"
    },
    {
      id: "9",
      title: "Operations Manager",
      department: "Operations",
      location: "San Francisco, CA",
      type: "Full-time"
    }
  ];

  // Filter jobs based on active category
  const filteredJobs = activeCategory === "All"
    ? allJobs
    : allJobs.filter(job => job.department === activeCategory);

  // Company benefits
  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Salary packages that recognize your skills and experience, plus equity options."
    },
    {
      title: "Flexible Work",
      description: "Work remotely or from our offices with flexible hours that fit your life."
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs."
    },
    {
      title: "Learning & Development",
      description: "Budget for courses, conferences, and resources to help you grow professionally."
    },
    {
      title: "Generous Time Off",
      description: "Unlimited PTO policy, parental leave, and company holidays."
    },
    {
      title: "Team Building",
      description: "Regular company retreats, team events, and opportunities to connect."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-shopy-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Help us build the future of e-commerce for small businesses around the world.
            </p>
            <Button className="bg-shopy-600 hover:bg-shopy-700" size="lg">
              View open positions
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Shopy, we're on a mission to make e-commerce accessible to small businesses everywhere. 
                We believe that powerful tools shouldn't be reserved for big companies with deep pockets.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We're building a platform that gives small businesses everything they need to succeed 
                online without the complexity or high costs typically associated with e-commerce.
              </p>
              <p className="text-lg text-gray-700">
                If you're passionate about supporting small businesses, solving complex challenges, 
                and working in a fast-paced, collaborative environment, we'd love to hear from you.
              </p>
            </div>
            <div className="lg:justify-self-end order-first lg:order-last mb-8 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Shopy team collaboration"
                className="rounded-lg shadow-xl w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              These core principles guide how we work and make decisions every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Customer Obsession",
                description: "We start with our customers and work backwards. Their success is our success."
              },
              {
                title: "Simplicity",
                description: "We make the complex simple. Great technology feels intuitive and empowering."
              },
              {
                title: "Ownership",
                description: "We take responsibility for our work and never say 'that's not my job.'"
              },
              {
                title: "Learn & Be Curious",
                description: "We're never done learning. We seek to improve ourselves and share knowledge."
              },
              {
                title: "Think Big",
                description: "We create bold solutions for big problems. Small thinking doesn't serve our customers."
              },
              {
                title: "Move Fast",
                description: "We value speed. We make decisions quickly and aren't afraid to change direction."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20" id="positions">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
          
          {/* Department filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === activeCategory ? "default" : "outline"}
                className={category === activeCategory ? "bg-shopy-600 hover:bg-shopy-700" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Job listings */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="border border-gray-200 rounded-lg p-6 hover:border-shopy-200 hover:shadow-sm transition-all flex flex-col sm:flex-row justify-between gap-4"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {job.department}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {job.location}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button
                    className="bg-shopy-600 hover:bg-shopy-700 self-start shrink-0"
                    asChild
                  >
                    <Link to={`/careers/${job.id}`}>Apply</Link>
                  </Button>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No open positions in this department currently.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-shopy-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Work at Shopy?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We offer a range of benefits to support your health, happiness, and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photos Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Life at Shopy</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
              "https://images.unsplash.com/photo-1542744094-3a31f272c490",
              "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
              "https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
            ].map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Team at Shopy ${index + 1}`}
                className="rounded-lg w-full h-48 object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Open Application Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Don't see a role that fits?
            </h2>
            <p className="text-gray-700 mb-8">
              We're always looking for talented individuals to join our team. Send us your resume, and we'll keep you in mind for future opportunities.
            </p>
            <Button className="bg-shopy-600 hover:bg-shopy-700" size="lg" asChild>
              <Link to="/careers/open-application">Submit Open Application</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to build the future of e-commerce?"
        description="Join our team and help empower small businesses around the world."
        primaryActionLabel="View open positions"
        primaryActionLink="#positions"
        secondaryActionLabel="Learn more about us"
        secondaryActionLink="/about"
      />
    </Layout>
  );
};

export default Careers;
