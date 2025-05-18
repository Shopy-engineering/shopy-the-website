
import React from "react";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";

const About = () => {
  // Team members (placeholder content)
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Former product leader at Shopify, passionate about empowering small businesses.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY4NDk1NzQ1NA&ixlib=rb-4.0.3&q=80&w=300",
    },
    {
      name: "Michael Lee",
      role: "CTO & Co-Founder",
      bio: "Tech entrepreneur with 15+ years experience building scalable e-commerce platforms.",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY4NDk1NzQ3OA&ixlib=rb-4.0.3&q=80&w=300",
    },
    {
      name: "David Wilson",
      role: "COO",
      bio: "Operations expert focused on creating smooth experiences for our customers.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY4NDk1NzQ5OQ&ixlib=rb-4.0.3&q=80&w=300",
    },
    {
      name: "Jessica Chen",
      role: "VP of Product",
      bio: "Product manager focused on building tools that small businesses actually need.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY4NDk1NzUyMQ&ixlib=rb-4.0.3&q=80&w=300",
    },
    {
      name: "James Rodriguez",
      role: "VP of Customer Success",
      bio: "Dedicated to ensuring every small business thrives on our platform.",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY4NDk1NzU0MA&ixlib=rb-4.0.3&q=80&w=300",
    },
    {
      name: "Emily Park",
      role: "VP of Marketing",
      bio: "Marketing strategist helping small businesses grow their online presence.",
      image: "https://images.unsplash.com/photo-1687394588829-11ae52574ae0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY4NDk1NzU1OA&ixlib=rb-4.0.3&q=80&w=300",
    },
  ];

  // Company values
  const values = [
    {
      title: "Small Business First",
      description:
        "We build everything with the needs of small businesses in mind, not enterprise corporations.",
    },
    {
      title: "Simplicity",
      description:
        "We believe powerful tools don't have to be complicated. Everything we make is easy to use.",
    },
    {
      title: "Transparency",
      description:
        "We're open and honest about our pricing, policies, and how our features work.",
    },
    {
      title: "Growth-Focused",
      description:
        "We succeed when our customers succeed. We're dedicated to helping small businesses grow.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-shopy-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Shopy</h1>
            <p className="text-lg md:text-xl text-gray-700">
              We're on a mission to empower small businesses with the tools they
              need to succeed in the digital economy.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Shopy was founded in 2022 by Sarah Johnson and Michael Lee, who
                  met while working at larger e-commerce companies. They saw
                  firsthand how small businesses were underserved by existing
                  platforms that were either too complex, too expensive, or both.
                </p>
                <p>
                  Drawing on their experience, they set out to build an
                  e-commerce platform specifically designed for small businesses –
                  one that was powerful enough to compete with larger retailers,
                  but simple enough for anyone to use.
                </p>
                <p>
                  Backed by Y Combinator in 2023, Shopy has quickly grown to serve
                  thousands of small businesses across the globe, helping them
                  sell millions of dollars in products and services online.
                </p>
                <p>
                  Today, our team of 50+ passionate individuals continues to build
                  and improve our platform with one goal in mind: making
                  e-commerce accessible and effective for small businesses
                  everywhere.
                </p>
              </div>
            </div>
            <div className="lg:justify-self-end order-first lg:order-last mb-8 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
                alt="Shopy office"
                className="rounded-lg shadow-xl w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              These core principles guide everything we do at Shopy, from how we
              build our product to how we interact with our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-shopy-100 flex items-center justify-center mb-4">
                  <span className="text-shopy-600 font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Meet the people dedicated to making Shopy the best e-commerce
              platform for small businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden hover-lift card-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-shopy-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Backed By</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We're proud to be supported by investors who believe in our mission.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-12 max-w-4xl mx-auto">
            {["Y Combinator", "Sequoia Capital", "Andreessen Horowitz", "Accel"].map(
              (investor, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-gray-100 rounded-lg p-6 w-48 h-32"
                >
                  <span className="text-gray-500 font-semibold text-lg">
                    {investor}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Join the Shopy community"
        description="Thousands of small businesses are already growing with Shopy. Start your journey today."
      />
    </Layout>
  );
};

export default About;
