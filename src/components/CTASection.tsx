
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryActionLabel?: string;
  primaryActionLink?: string;
  secondaryActionLabel?: string;
  secondaryActionLink?: string;
  bgColor?: string;
}

const CTASection = ({
  title = "Ready to grow your small business online?",
  description = "Join thousands of small businesses using Shopy to build and scale their online presence.",
  primaryActionLabel = "Start selling today",
  primaryActionLink = "https://shopy-the-app.vercel.app/",
  secondaryActionLabel = "Contact sales",
  secondaryActionLink = "/contact",
  bgColor = "bg-shopy-50"
}: CTASectionProps) => {
  return (
    <section className={`${bgColor} py-20`}>
      <div className="container text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-shopy-600 hover:bg-shopy-700 text-white px-8 py-6 h-auto text-base" asChild>
            <Link to={primaryActionLink} target="_blank" rel="noopener noreferrer">{primaryActionLabel}</Link>
          </Button>
          <Button variant="outline" className="px-8 py-6 h-auto text-base" asChild>
            <Link to={secondaryActionLink}>{secondaryActionLabel} </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
