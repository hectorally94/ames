import React from 'react';
import { useTranslation } from 'react-i18next';

interface ArticleProps {
  title: string;
  date: string;
  image: string;
  content: string;
  category: string;
  type: string;
  goal: string;
  raised: string;
}

const Actions: React.FC<ArticleProps> = ({ title, date, image, content, category, type, goal, raised }) => {
  const { t } = useTranslation();

  return (
    <article className="w-full px-2 md:w-3/4 md:px-4 mb-8">
      <div className="aspect-w-4 aspect-h-3">
        <img 
          src={image} 
          alt="Blog Featured Image" 
          className="mb-4 h-48 md:h-64 w-full object-cover rounded-lg border border-gray-300 shadow-lg" 
        />
      </div>
      <h1 className="text-2xl md:text-4xl font-bold font-slab text-gray-800 mb-1 md:mb-2">{title}</h1>
      <p className="text-sm md:text-base text-gray-600 mb-1 font-slab">{date}</p>
      <div className="text-sm md:text-lg text-gray-800 mb-1 font-slab">
        {t('post.Goal')}: ${goal}
      </div>
      <div className="text-sm md:text-lg text-gray-800 mb-4 font-slab">
        {t('post.Raised')}: ${raised}
      </div>
      <div className="prose max-w-none text-sm md:text-base mb-4 font-slab" dangerouslySetInnerHTML={{ __html: content }}></div>
      <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1 font-slab">{category}</h2>
      <h2 className="text-lg md:text-xl font-bold text-gray-800 font-slab">{type}</h2>
    </article>
  );
};

export default Actions;
