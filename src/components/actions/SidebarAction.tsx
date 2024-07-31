import React from 'react';

const recentPosts = [
  { 
    title: "Be soft and kind for the poor people.", 
    date: "22 Sep 2021", 
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    goal: 5000,
    raised: 3200
  },
  { 
    title: "Another Recent Post", 
    date: "15 Jul 2021", 
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    goal: 3000,
    raised: 1500
  },
  { 
    title: "Yet Another Post", 
    date: "03 May 2021", 
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    goal: 4000,
    raised: 4000
  },
  { 
    title: "Last Recent Post", 
    date: "21 Jan 2021", 
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    goal: 2500,
    raised: 1000
  }
];

const SidebarAction: React.FC = () => {
  return (
    <div className="bg-transparent p-4 mb-20 pb-20 pt-20 md:fixed md:top-20 md:right-0 md:w-1/4 md:overflow-auto" style={{ height: 'calc(100vh - 5rem)', maxHeight: 'calc(100vh - 5rem)', overflowY: 'auto' }}>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Actions future</h2>
        <ul className="list-none">
          {recentPosts.map((post, index) => (
            <li key={index} className="mb-4 flex items-center">
              <img src={post.image} alt={post.title} className="w-12 h-12 mr-4" />
              <div>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  <div className="font-semibold">{post.title}</div>
                  <div className="text-gray-600">{post.date}</div>
                  <div className="text-gray-600">Goal: ${post.goal}</div>
                  <div className="text-gray-600">Raised: ${post.raised}</div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Actions recentes</h2>
        <ul className="list-none">
          {recentPosts.map((post, index) => (
            <li key={index} className="mb-4 flex items-center">
              <img src={post.image} alt={post.title} className="w-12 h-12 mr-4" />
              <div>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  <div className="font-semibold">{post.title}</div>
                  <div className="text-gray-600">{post.date}</div>
                  <div className="text-gray-600">Goal: ${post.goal}</div>
                  <div className="text-gray-600">Raised: ${post.raised}</div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Categories</h2>
        <ul className="list-none">
          <li className="mb-2">
            <a href="#" className="text-gray-700 hover:text-gray-900">Action 1</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-700 hover:text-gray-900">Action 2</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-700 hover:text-gray-900">Action 3</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-700 hover:text-gray-900">All</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarAction;
