import React from 'react';

// Define an interface for the component's props
interface Base64ImageProps {
  base64String: string;
}

const Base64Image: React.FC<Base64ImageProps> = ({ base64String }) => {
  // Ensure the base64 string is a valid image format
  const imageSrc = `data:image/jpeg;base64,${base64String}`;

  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl ">
        <img
        src={imageSrc}
        alt="Base64 Image"
        className="h-full w-full rounded-t-lg object-cover object-center lg:h-full lg:w-full"
 
       />
        </div>

     
    </div>
  );
};

export default Base64Image;
