// components/Blog/FromOurBlog.tsx
import React from 'react';
import BlogPostCard from './BlogPostCard';

interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string; // Add imageUrl to the blog post type
}

const blogPosts: BlogPost[] = [
  {
    title: 'Best and Less Ont Publié Leur Liste de Fournisseurs',
    excerpt: 'Il existe de nombreuses variations de passages de Lorem Ipsum disponibles, mais la majorité ont subi des modifications.',
    author: 'Lily Anne',
    date: '12 Février 2021',
    imageUrl: 'https://c7.alamy.com/comp/D6N1A1/lodwar-kenya-leah-imoru-lobar-staff-member-of-the-childrens-charity-D6N1A1.jpg', // Exemple d'URL d'image
  },
  {
    title: 'Best and Less Ont Publié Leur Liste de Fournisseurs',
    excerpt: 'Il existe de nombreuses variations de passages de Lorem Ipsum disponibles, mais la majorité ont subi des modifications.',
    author: 'Lily Anne',
    date: '12 Février 2021',
    imageUrl: 'https://c7.alamy.com/comp/D6N1A1/lodwar-kenya-leah-imoru-lobar-staff-member-of-the-childrens-charity-D6N1A1.jpg', // Exemple d'URL d'image
  },
  {
    title: 'Best and Less Ont Publié Leur Liste de Fournisseurs',
    excerpt: 'Il existe de nombreuses variations de passages de Lorem Ipsum disponibles, mais la majorité ont subi des modifications.',
    author: 'Lily Anne',
    date: '12 Février 2021',
    imageUrl: 'https://c7.alamy.com/comp/D6N1A1/lodwar-kenya-leah-imoru-lobar-staff-member-of-the-childrens-charity-D6N1A1.jpg', // Exemple d'URL d'image
  },
];


const FromOurBlog: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-600">
      <div className="container mx-auto text-center dark:text-white">
        <h2 className="text-4xl font-semibold mb-6">From Our Blog</h2>
        <h3 className="text-2xl font-semibold mb-6">Latest News</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogPostCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              author={post.author}
              date={post.date}
              imageUrl={post.imageUrl} // Pass the image URL to BlogPostCard
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FromOurBlog;
