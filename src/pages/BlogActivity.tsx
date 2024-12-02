// components/Evenement/MyEventActivity.tsx
import React, { useEffect, useState } from 'react';
import ErrorMessage from '../components/ErrorMessage'; // Import the ErrorMessage component
import { useSelector } from 'react-redux';
import { RootState } from '../common/store';
import Article from '../components/Blog/Article';
import Sidebar from '../components/Blog/SideBar';
import { BlogDto, useGetPaginatedBlogsAllOneQuery } from '../redux/api/blogsApiSlice';
import ChevronLeftIcon from '@heroicons/react/20/solid/ChevronLeftIcon';
import ChevronRightIcon from '@heroicons/react/20/solid/ChevronRightIcon';

interface MyResponse {
  message: string;
  data: BlogDto[];
  totalItems: number; // Assuming your API response includes totalItems
}

const BlogActivity: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(10);
  const [sort] = useState('id,desc');

  const selectedLanguage = useSelector((state: RootState) => state.language.language);
  const selectedCategory = useSelector((state: RootState) => state.events.selectedCategory);

  const { data } = useGetPaginatedBlogsAllOneQuery({
    clanguageName: selectedLanguage,
    categoryBlogTranslate: selectedCategory,
    page: currentPage,
    size: itemsPerPage,
    sort,
  });

  const [aboutContent, setAboutContent] = useState<BlogDto[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error message
  const [totalItems, setTotalItems] = useState(0); // State for total items

  useEffect(() => {
    if (data) {
      const fetchedData = (data as unknown as MyResponse)?.data || [];
      setTotalItems((data as unknown as MyResponse)?.totalItems || 0); // Get total items from the response

      if (fetchedData.length === 0) {
        setErrorMessage('No content available for your request.');
      } else {
        setAboutContent(fetchedData);
        setErrorMessage(null); // Clear error message
      }
    } else {
      setErrorMessage('Failed to fetch data. Please try again later.');
    }
  }, [data, selectedLanguage, currentPage]); // Removed aboutContent from dependencies

  const handlePreviousPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalItems / itemsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total pages

  return (
    <div className="flex flex-col pt-20">
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          <div className="w-full md:w-3/4 px-4">
            {errorMessage ? (
              <ErrorMessage message={errorMessage} /> // Display error message
            ) : (
              aboutContent.map((article, index) => (
                <Article
                  key={index}
                  title={article.title}
                  date={article.date}
                  image={article.imagedata}
                  content={article.description}
                  category={article.categoryBlogTranslate}
                />
              ))
            )}
            {/* Pagination Controls */}
            <div className="flex justify-center mt-4 mb-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 0}
                className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50 flex items-center"
              >
                <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
              </button>
              <span className="px-4 py-2"></span>
              <button
                onClick={handleNextPage}
                disabled={currentPage >= totalPages - 1}
                className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50 flex items-center"
              >
                <ChevronRightIcon className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogActivity;
