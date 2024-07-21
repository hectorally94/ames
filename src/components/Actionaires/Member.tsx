// components/Team/TeamMember.tsx
import React from 'react';

interface MemberProps {
  name: string;
  role: string;
  imageUrl: string;
}

const Member: React.FC<MemberProps> = ({ name, role, imageUrl }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
        <img src={imageUrl} alt={name} className="w-32 h-32 object-cover rounded-full mx-auto mt-4" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 dark:text-gray-500">{name}</h3>
          <p className="text-gray-700">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Member;
