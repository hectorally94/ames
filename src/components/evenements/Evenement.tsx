// components/Blog/Article.tsx
import React from 'react';

interface ArticleProps {
  title: string;
  date: string;
  image: string;
  content: string;
}

const Evenement: React.FC<ArticleProps> = ({ title, date, image, content }) => (
  <article className="w-full md:w-3/4 px-4 mb-8">
    <img src={image} alt="Blog Featured Image" className="mb-8" />
    <h1 className="text-4xl font-bold text-gray-800 mb-2">{title}</h1>
    <p className="text-gray-600">{date}</p>
    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }}></div>
  </article>
);

export default Evenement;
