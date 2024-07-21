import React, { useState } from 'react';

interface CauseProps {
  goal: number;
  raised: number;
  title: string;
  description: string;
  imageUrl: string;
  imageSize?: number;
}

export const Cause: React.FC<CauseProps> = ({ goal, raised, title, description, imageUrl, imageSize = 300 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#">
        <img
          className="w-full h-auto rounded-t-lg object-cover"
          src={imageUrl}
          alt={title}
          style={{ height: imageSize }}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">OBJECTIF: ${goal}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">RECOLTE: ${raised}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        {isHovered && (
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Faire un don maintenant
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};
