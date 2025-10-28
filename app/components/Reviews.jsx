'use client';
import Image from 'next/image';
import { useState } from 'react';

const RatingCategory = ({ name, value, icon }) => {
  const IconComponent = icon;
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center">
        <IconComponent className="w-5 h-5 text-purple-500 mr-2" />
        <span className="text-sm text-gray-600 capitalize">{name}</span>
      </div>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full mx-0.5 ${
              i < value ? 'bg-purple-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Icon components (in a real project, you might import these from react-icons or similar)
const PunctualityIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
  </svg>
);

const QualityIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
  </svg>
);

const CommunicationIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
  </svg>
);

const ReviewCard = ({ review }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl border border-gray-100">
      <div className="flex items-start mb-4">
        <div className="relative w-14 h-14 mr-4 flex-shrink-0">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            className="rounded-full object-cover border-2 border-purple-100"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-800 truncate">{review.name}</h3>
          <p className="text-sm text-gray-500">{review.role}</p>
          <p className="text-xs text-gray-400 mt-1">{review.date}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <RatingCategory 
          name="Punctuality" 
          value={review.ratings.punctuality} 
          icon={PunctualityIcon} 
        />
        <RatingCategory 
          name="Quality" 
          value={review.ratings.quality} 
          icon={QualityIcon} 
        />
        <RatingCategory 
          name="Communication" 
          value={review.ratings.communication} 
          icon={CommunicationIcon} 
        />
      </div>
      
      <div className="relative">
        <p className={`text-gray-600 mb-4 ${expanded ? '' : 'line-clamp-3'}`}>
          "{review.text}"
        </p>
        {review.text.length > 150 && (
          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-purple-600 text-sm font-medium hover:text-purple-800 transition-colors"
          >
            {expanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </div>
      
      {review.project && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            Project: <span className="text-gray-700 font-medium">{review.project}</span>
          </p>
        </div>
      )}
    </div>
  );
};

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Designer",
      avatar: "/avatars/sarah.jpg",
      ratings: { punctuality: 5, quality: 4, communication: 5 },
      text: "This product completely transformed my workflow. The attention to detail is remarkable and the customer support is exceptional. I've recommended it to all my colleagues in the design industry.",
      date: "March 12, 2023",
      project: "Website Redesign"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineer",
      avatar: "/avatars/michael.jpg",
      ratings: { punctuality: 4, quality: 4, communication: 3 },
      text: "Incredible value for the price. Some minor UI issues but overall a fantastic experience that I would recommend to colleagues. The integration with our existing systems was seamless.",
      date: "February 28, 2023",
      project: "API Integration"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Marketing Director",
      avatar: "/avatars/emma.jpg",
      ratings: { punctuality: 5, quality: 5, communication: 5 },
      text: "We've seen a 34% increase in productivity since implementing this solution. Game changer for our entire team! The reporting features alone are worth the investment.",
      date: "April 5, 2023",
      project: "Marketing Campaign"
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Startup Founder",
      avatar: "/avatars/james.jpg",
      ratings: { punctuality: 5, quality: 5, communication: 4 },
      text: "As a startup, we need tools that just work without requiring extensive training. This delivered on that promise and then some. Our team was up and running within a day.",
      date: "May 18, 2023",
      project: "Business Launch"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Professionals</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white text-purple-700 border border-purple-200 rounded-full px-6 py-3 font-medium hover:bg-purple-50 transition-colors shadow-sm">
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;