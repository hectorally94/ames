// components/Evenement/FromOurEvenement.tsx
import React from 'react';
import Evenement from '../components/evenements/Evenement';
import SidebarEvent from '../components/evenements/SidebarEvent';

const articles = [
  {
    title: "Evenement Title Here",
    date: "Published on April 4, 2023",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
       `
  },
  {
    title: "Evenement Title Here",
    date: "Published on April 4, 2023",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
       `
  },
  {
    title: "Evenement Title Here",
    date: "Published on April 4, 2023",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
       `
  },
  {
    title: "Evenement Title Here",
    date: "Published on April 4, 2023",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
       `
  },
  {
    title: "Evenement Title Here",
    date: "Published on April 4, 2023",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
       `
  },
  {
    title: "Evenement Title Here",
    date: "Published on April 4, 2023",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
       `
  },
  {
    title: "Evenement Title Here",
    date: "Published on April 4, 2023",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
       `
  },
  // Add more articles here
];

const MyEventActivity: React.FC = () => {
  return (
    <div className="flex flex-col pt-20">
       
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          <div className="w-full md:w-3/4 px-4">
            {articles.map((article, index) => (
              <Evenement
                key={index}
                title={article.title}
                date={article.date}
                image={article.image}
                content={article.content}
              />
            ))}
          </div> <div className="w-full md:w-1/4 px-4">
            <SidebarEvent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEventActivity;
