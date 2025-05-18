
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  ShoppingCart, 
  Globe, 
  Package, 
  CreditCard 
} from "lucide-react";

const Blog = () => {
  // Blog categories
  const categories = [
    "All Posts",
    "E-commerce Tips",
    "Product Updates",
    "Success Stories",
    "Marketing",
    "Small Business"
  ];

  // Featured post (placeholder content)
  const featuredPost = {
    id: "1",
    title: "How to Drive More Traffic to Your Small Business E-Commerce Store",
    excerpt:
      "Learn practical strategies to attract more visitors to your online store without breaking your marketing budget.",
    date: "May 12, 2023",
    author: "Jessica Chen",
    authorRole: "VP of Product",
    image: "https://images.unsplash.com/photo-1489533119213-66a5cd877091",
    category: "Marketing",
    readTime: "8 min read"
  };

  // Blog posts (placeholder content)
  const blogPosts = [
    {
      id: "2",
      title: "5 Essential Features Every Small Business E-Commerce Site Needs",
      excerpt:
        "Make sure your online store has these crucial elements to convert visitors into customers.",
      date: "May 5, 2023",
      author: "Michael Lee",
      category: "E-commerce Tips",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12",
      icon: <ShoppingCart className="h-5 w-5" />
    },
    {
      id: "3",
      title: "Introducing Our New Analytics Dashboard for Small Businesses",
      excerpt:
        "Get powerful insights into your store's performance with our completely redesigned analytics tools.",
      date: "April 28, 2023",
      author: "Sarah Johnson",
      category: "Product Updates",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      icon: <BarChart className="h-5 w-5" />
    },
    {
      id: "4",
      title: "How Artisan Ceramics Grew Their Sales by 300% in Six Months",
      excerpt:
        "Learn how this small pottery business transformed their operation with Shopy's e-commerce tools.",
      date: "April 20, 2023",
      author: "Emily Park",
      category: "Success Stories",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9",
      icon: <Package className="h-5 w-5" />
    },
    {
      id: "5",
      title: "Optimizing Your Checkout Process to Reduce Cart Abandonment",
      excerpt:
        "Simple changes to your checkout flow that can dramatically increase your conversion rate.",
      date: "April 15, 2023",
      author: "David Wilson",
      category: "E-commerce Tips",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      icon: <CreditCard className="h-5 w-5" />
    },
    {
      id: "6",
      title: "Expanding Your Small Business Globally: A Step-by-Step Guide",
      excerpt:
        "Ready to sell internationally? Here's how to prepare your online store for global customers.",
      date: "April 8, 2023",
      author: "James Rodriguez",
      category: "Small Business",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      icon: <Globe className="h-5 w-5" />
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-shopy-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Shopy Blog</h1>
            <p className="text-lg md:text-xl text-gray-700">
              Insights, tips, and strategies to help your small business succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-6 border-b border-gray-200 sticky top-[76px] bg-white z-10">
        <div className="container">
          <div className="flex flex-nowrap overflow-x-auto gap-4 pb-2 hide-scrollbar">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-shopy-600 hover:bg-shopy-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Featured Post</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-shopy-100 text-shopy-700 text-sm font-medium py-1 px-3 rounded-full">
                  {featuredPost.category}
                </span>
                <span className="text-gray-500 text-sm">
                  {featuredPost.readTime}
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4">{featuredPost.title}</h3>
              <p className="text-gray-700 text-lg mb-4">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-shopy-100 flex items-center justify-center">
                  <span className="text-shopy-600 font-medium">
                    {featuredPost.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{featuredPost.author}</p>
                  <p className="text-sm text-gray-500">{featuredPost.date}</p>
                </div>
              </div>
              <Button className="bg-shopy-600 hover:bg-shopy-700" asChild>
                <Link to={`/blog/${featuredPost.id}`}>Read article</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="rounded-lg shadow-lg w-full object-cover h-64 md:h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Latest Posts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover-lift card-shadow h-full">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <div className="text-shopy-600">
                      {post.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-shopy-100 text-shopy-700 text-xs font-medium py-1 px-2 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-6">
                    <div className="text-sm text-gray-500">{post.date}</div>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/blog/${post.id}`}>Read more</Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load more articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to our newsletter
            </h2>
            <p className="text-gray-700 mb-8">
              Get the latest e-commerce tips and strategies delivered straight to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="bg-shopy-600 hover:bg-shopy-700 h-12">
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to start selling online?"
        description="Join thousands of small businesses using Shopy to build and grow their online stores."
      />
    </Layout>
  );
};

export default Blog;
