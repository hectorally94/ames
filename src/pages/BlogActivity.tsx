// components/Blog/FromOurBlog.tsx
import React from 'react';
import Article from '../components/Blog/Article';
import Sidebar from '../components/Blog/SideBar';

const articles = [
  {
    title: "Blog Title Here",
    date: "Published on April 4, 2023",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
       `
  },
  {
    title: "Blog Title Here",
    date: "Published on April 4, 2023",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
       `
  },
  {
    title: "Blog Title Here",
    date: "Published on April 4, 2023",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
       `
  },
  {
    title: "Blog Title Here",
    date: "Published on April 4, 2023",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
       `
  },
  {
    title: "Blog Title Here",
    date: "Published on April 4, 2023",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
       `
  },
  {
    title: "Blog Title Here",
    date: "Published on April 4, 2023",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
       `
  },
  {
    title: "Blog Title Here",
    date: "Published on April 4, 2023",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed sit amet feugiat eros, eget eleifend dolor. Proin maximus bibendum felis, id fermentum odio vestibulum id. Sed ac ligula eget dolor consequat tincidunt. Nullam fringilla ipsum et ex lacinia, at bibendum elit posuere. Aliquam eget leo nec nibh mollis consectetur.</p>
       `
  },
  // Add more articles here
];

const BlogActivity: React.FC = () => {
  return (
    <div className="flex flex-col pt-20">
        <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Ames BLog</h1>
        </div>
    </div>
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          <div className="w-full md:w-3/4 px-4">
            {articles.map((article, index) => (
              <Article
                key={index}
                title={article.title}
                date={article.date}
                image={article.image}
                content={article.content}
              />
            ))}
          </div> <div className="w-full md:w-1/4 px-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogActivity;
