import React, { ReactNode } from "react";
import { Card, CardContent, CardFooter } from "./ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: ReactNode; // Accepts an <AdvancedImage /> element
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  avatar,
}) => (
  <Card className="border-gray-200 h-full">
    <CardContent className="pt-6">
      <div className="mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="text-yellow-400 inline-block">
            ★
          </span>
        ))}
      </div>
      <blockquote className="text-gray-700 mb-6">"{quote}"</blockquote>
    </CardContent>
    <CardFooter className="flex items-center gap-3 border-t pt-4">
      {avatar && <div className="mb-4">{avatar}</div>}
      <div>
        <p className="font-medium text-gray-900">{author}</p>
        <p className="text-sm text-gray-500">
          {role}, {company}
        </p>
      </div>
    </CardFooter>
  </Card>
);

export default TestimonialCard;
