// components/Gallery/GalleryItem.tsx
import React from 'react';

interface GalleryItemProps {
  title: string;
  imageUrl: string;
  description: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ title, imageUrl, description }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 dark:text-gray-500 ">{title}</h3>
          <p className="text-gray-700 ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
