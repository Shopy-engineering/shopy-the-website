
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";

const News = () => {
  // News articles (placeholder content)
  const pressReleases = [
    {
      id: "1",
      title: "Shopy Raises $20M Series A to Expand E-Commerce Platform for Small Businesses",
      date: "May 15, 2023",
      summary:
        "Funding will accelerate product development and international expansion to serve more small businesses worldwide.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216"
    },
    {
      id: "2",
      title: "Shopy Launches New Analytics Dashboard to Help Small Businesses Make Data-Driven Decisions",
      date: "March 8, 2023",
      summary:
        "New features provide small businesses with enterprise-level insights without the complexity.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
      id: "3",
      title: "Shopy Partners with Major Shipping Carriers to Offer Discounted Rates for Small Businesses",
      date: "February 22, 2023",
      summary:
        "New partnerships will help small businesses save up to 40% on shipping costs compared to retail rates.",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55"
    }
  ];
  
  const newsArticles = [
    {
      id: "4",
      title: "How Shopy is Leveling the Playing Field for Small Businesses",
      publication: "Tech Today",
      date: "April 3, 2023",
      link: "#"
    },
    {
      id: "5",
      title: "The Rise of Small Business E-Commerce: Shopy Leading the Charge",
      publication: "Business Weekly",
      date: "March 17, 2023",
      link: "#"
    },
    {
      id: "6",
      title: "E-Commerce Platforms for Small Businesses in 2023: Shopy Named Top Choice",
      publication: "Digital Trends",
      date: "January 10, 2023",
      link: "#"
    },
    {
      id: "7",
      title: "YC-Backed Shopy Focused on Simplifying E-Commerce for Small Businesses",
      publication: "Startup Insider",
      date: "November 15, 2022",
      link: "#"
    },
    {
      id: "8",
      title: "Shopy Founders Share Vision for the Future of Small Business E-Commerce",
      publication: "Entrepreneur Magazine",
      date: "October 28, 2022",
      link: "#"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-shopy-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Shopy Newsroom</h1>
            <p className="text-lg md:text-xl text-gray-700">
              The latest news, updates, and announcements from Shopy.
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Press Releases</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pressReleases.map((article) => (
              <div key={article.id} className="border border-gray-200 rounded-lg overflow-hidden hover-lift card-shadow h-full">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.summary}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/news/${article.id}`}>Read more</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Coverage Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">In the News</h2>
          
          <div className="grid grid-cols-1 gap-6 max-w-4xl">
            {newsArticles.map((article) => (
              <a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-shopy-200 transition-colors flex flex-col sm:flex-row justify-between gap-4"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600">{article.publication}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-gray-500">{article.date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Media Resources Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Media Resources</h2>
            <p className="text-gray-700 mb-8">
              If you're a member of the press and would like more information about Shopy, please contact our media relations team.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Press Contact</h3>
              <p className="text-gray-700 mb-2">
                For press inquiries, please email:
              </p>
              <a
                href="mailto:press@shopy.com"
                className="text-shopy-600 hover:text-shopy-700 transition-colors font-medium"
              >
                press@shopy.com
              </a>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Brand Assets</h3>
                <p className="text-gray-700 mb-4">
                  Download our brand assets, including logos, product screenshots, and founder photos.
                </p>
                <Button className="bg-shopy-600 hover:bg-shopy-700">
                  Download Press Kit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Experience Shopy for yourself"
        description="Join thousands of small businesses using Shopy to build their online presence."
      />
    </Layout>
  );
};

export default News;
