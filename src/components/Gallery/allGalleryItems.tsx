// components/Gallery/Gallery.tsx
import React, { useState } from 'react';
import GalleryItem from './GalleryItem';

interface GalleryItemData {
  category: string;
  title: string;
  imageUrl: string;
  description: string;
}

const allGalleryItems: GalleryItemData[] = [
  { category: 'Enfant', title: 'Enfant 1', imageUrl: 'https://c7.alamy.com/comp/B7C5XM/flooding-and-drought-in-northern-kenya-B7C5XM.jpg', description: 'Description de l\'Enfant 1' },
  { category: 'Charité', title: 'Charité 1', imageUrl: 'https://media.istockphoto.com/id/1435049455/photo/doctor-examining-young-african-boy-in-small-village-kenya.jpg?s=1024x1024&w=is&k=20&c=Q734Q5I1wIVJCUgbYp96yOBnkiOi1QskI4RNXAZjaQM=', description: 'Description de la Charité 1' },
  { category: 'Bénévolat', title: 'Bénévolat 1', imageUrl: 'https://media.istockphoto.com/id/813460430/photo/happy-volunteer-looking-at-donation-box.jpg?s=1024x1024&w=is&k=20&c=AKFIpgLQKg6bd-NF1FQYIDG84yDO3mROt49i8UsmhXU=', description: 'Description du Bénévolat 1' },
  { category: 'Parrainage', title: 'Parrainage 1', imageUrl: 'https://media.istockphoto.com/id/1317357918/photo/happy-multi-ethnic-volunteers-at-food-bank-preparing-for-charitable-food-drive.jpg?s=1024x1024&w=is&k=20&c=1auR9CbrAJBXZZQtKicizDHWIi5akBWEJQNkTqM_qRA=', description: 'Description du Parrainage 1' },
  { category: 'Parrainage', title: 'Parrainage 2', imageUrl: 'https://media.istockphoto.com/id/1317357918/photo/happy-multi-ethnic-volunteers-at-food-bank-preparing-for-charitable-food-drive.jpg?s=1024x1024&w=is&k=20&c=1auR9CbrAJBXZZQtKicizDHWIi5akBWEJQNkTqM_qRA=', description: 'Description du Parrainage 2' },
  { category: 'Enfant', title: 'Enfant 2', imageUrl: 'https://c7.alamy.com/comp/B7C5XM/flooding-and-drought-in-northern-kenya-B7C5XM.jpg', description: 'Description de l\'Enfant 2' },
  // Ajouter d'autres éléments si nécessaire
];


const categories = ['tous', 'Enfant', 'Charité', 'Bénévolat', 'Parrainage'];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('tous');

  const filteredItems = selectedCategory === 'tous'
    ? allGalleryItems
    : allGalleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="py-10 px-6 bg-gray-100 dark:bg-gray-600">
      <div className="container mx-auto text-center dark:text-white">
        <h2 className="text-4xl font-semibold mb-6">Our Gallery</h2>
        <div className="mb-6">
          {categories.map(category => (
            
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 m-1 rounded-lg font-semibold ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center">
          {filteredItems.map((item, index) => (
            <GalleryItem
              key={index}
              title={item.title}
              imageUrl={item.imageUrl}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
