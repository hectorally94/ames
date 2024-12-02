// components/Blog/Article.tsx
import React from 'react';

interface ArticleProps {
  title: string;
  date: string;
  image: string;
  content: string;
  category?:string;
  type?:string;
}

const Evenement: React.FC<ArticleProps> = ({ title, date, image, content,category,type }) => (
  
  <article className="w-full md:w-3/4 px-4 mb-8">
  <img 
          src={image} 
          alt="Blog Featured Image" 
          className="mb-4 h-48 md:h-64 w-full object-cover rounded-lg border border-gray-300 shadow-lg" 
        />
      <h1 className="text-4xl font-bold font-slab text-gray-800 mb-2">{title}</h1>
    <p className="text-gray-600 font-slab">{date}</p>
    <div className="prose max-w-none font-sans" dangerouslySetInnerHTML={{ __html: content }}></div>
    <h1 className="text-xl font-bold text-gray-800 mb-2 font-slab">{category}</h1>
    <h1 className="text-xl font-bold text-gray-800 mb-2 font-slab">{type}</h1>

  </article>
);

export default Evenement;
