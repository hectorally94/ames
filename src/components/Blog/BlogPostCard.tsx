// components/Blog/BlogPostCard.tsx
import React from 'react';

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string; // Add imageUrl to the props
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ title, excerpt, author, date, imageUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <div className="text-gray-500 text-sm">
        <span>By {author}</span>
        <span className="mx-2">•</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default BlogPostCard;
