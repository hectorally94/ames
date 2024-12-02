// components/Evenement/MyEventActivity.tsx
import React, { useEffect, useState } from 'react';
import Evenement from '../components/evenements/Evenement';
import SidebarEvent from '../components/evenements/SidebarEvent';
import ErrorMessage from '../components/ErrorMessage'; // Import the ErrorMessage component
import { EventDto, useGetPaginatedEventsAllOneQuery } from '../redux/api/eventsApiSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../common/store';
import ChevronLeftIcon from '@heroicons/react/20/solid/ChevronLeftIcon';
import ChevronRightIcon from '@heroicons/react/20/solid/ChevronRightIcon';

interface MyResponse {
  message: string;
  data: EventDto[];
}

const MyEventActivity: React.FC = () => {
  const [currentPage, _setCurrentPage] = useState(0);
  const [itemsPerPage, _setItemsPerPage] = useState(10);
  const [sort, _setSort] = useState('id,desc');

  const selectedLanguage = useSelector((state: RootState) => state.language.language);
  const selectedCategory = useSelector((state: RootState) => state.events.selectedCategory);
  const selectedType = useSelector((state: RootState) => state.events.selectedType);

  const { data } = useGetPaginatedEventsAllOneQuery({
    languageName: selectedLanguage,
    clanguageName: selectedLanguage,
    typeActionsTranslate: selectedType,
    categoryTranslate: selectedCategory,
    page: currentPage,
    size: itemsPerPage, 
    sort,
  });

  const [aboutContent, setAboutContent] = useState<EventDto[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error message

  useEffect(() => {
    if (data) {
      const fetchedData = (data as unknown as MyResponse)?.data || [];

      if (fetchedData.length === 0) {
        setErrorMessage('No content available for your request.');
      } else {
        setAboutContent(fetchedData);
        setErrorMessage(null); // Clear error message
      }
    } else {
      setErrorMessage(' Failed to fetch data. Please try again later.');
    }
  }, [aboutContent,data, selectedLanguage]);

  const handlePreviousPage = () => {
    if (currentPage > 0) _setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    // Adjust this condition based on your total pages or data length
    if (aboutContent.length === 10) _setCurrentPage(currentPage + 1); // Keeping it constant at 10
  };
   // Example total item count, adjust according to your API response
   const totalItems = 100; // Replace with actual total count from your API response
   const totalPages = Math.ceil(totalItems / 10); // Update to reflect constant items per page
 
  return (
    <div className="flex flex-col pt-20">
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          <div className="w-full md:w-3/4 px-4">
            {errorMessage ? (
              <ErrorMessage message={errorMessage} /> // Display error message
            ) : (
              aboutContent.map((article, index) => (
                <Evenement
                  key={index}
                  title={article.title}
                  date={article.date}
                  image={article.imagedata}
                  content={article.description}
                  category={article.categoryTranslate}
                  type={article.typeActionsTranslate}
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
            <SidebarEvent />
          </div>

             

        </div>
      </div>
    </div>
  );
};

export default MyEventActivity;