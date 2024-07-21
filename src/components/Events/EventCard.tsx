// components/Events/EventCard.tsx
import React from 'react';

interface EventCardProps {
  date: string;
  category: string;
  title: string;
  imageUrl: string;
}

const EventCard: React.FC<EventCardProps> = ({ date, category, title, imageUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
        <span>{date}</span>
        <span className="text-blue-500 font-semibold dark:text-gray-500">{category}</span>
      </div>
      <h3 className="text-xl font-bold mt-2">{title}</h3>
    </div>
  );
};

export default EventCard;
