// components/Actions/FromOurActions.tsx
import React from 'react';  
import SidebarAction from '../components/actions/SidebarAction';
import Actions from '../components/actions/Actions';

const articles = [
    {
      title: "Actions Title Here",
      date: "Published on April 4, 2023",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
      `,
      goal: 5000,
      raised: 3200
    },
    {
      title: "Actions Title Here",
      date: "Published on April 4, 2023",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
      `,
      goal: 3000,
      raised: 1500
    },
    {
      title: "Actions Title Here",
      date: "Published on April 4, 2023",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
      `,
      goal: 4000,
      raised: 4000
    },
    {
      title: "Actions Title Here",
      date: "Published on April 4, 2023",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
      `,
      goal: 2500,
      raised: 1000
    },
    {
      title: "Actions Title Here",
      date: "Published on April 4, 2023",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
      `,
      goal: 6000,
      raised: 2500
    },
    {
      title: "Actions Title Here",
      date: "Published on April 4, 2023",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
      `,
      goal: 7000,
      raised: 5000
    },
    {
      title: "Actions Title Here",
      date: "Published on April 4, 2023",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
      `,
      goal: 8000,
      raised: 6000
    },
    // Add more articles here
  ];
  

const ActionsActivity: React.FC = () => {
  return (
    <div className="flex flex-col pt-20">
       
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          <div className="w-full md:w-3/4 px-4">
            {articles.map((article, index) => (
              <Actions
                    key={index}
                    title={article.title}
                    date={article.date}
                    image={article.image}
                    content={article.content}
                     goal={article.goal}
                     raised={article.raised}              />
            ))}
          </div> <div className="w-full md:w-1/4 px-4">
            <SidebarAction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionsActivity;
