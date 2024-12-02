
import React, { useEffect, useState } from 'react'; 
import ErrorMessage from '../components/ErrorMessage';
import { useSelector } from 'react-redux';
import { RootState } from '../common/store';
import SidebarAction from '../components/actions/SidebarAction';
import Actions from '../components/actions/Actions';
import { ActionDto, useGetPaginatedActionsAllOneQuery } from '../redux/api/actionsApiSlice';
import ChevronLeftIcon from '@heroicons/react/24/outline/ChevronLeftIcon';
import ChevronRightIcon from '@heroicons/react/20/solid/ChevronRightIcon';

interface MyResponse {
  message: string;
  data: ActionDto[];
}

const ActionsActivity: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [sort, _setSort] = useState('id,desc');

  const selectedLanguage = useSelector((state: RootState) => state.language.language);
  const selectedCategory = useSelector((state: RootState) => state.events.selectedCategory);
  const selectedType = useSelector((state: RootState) => state.events.selectedType);

  const { data } = useGetPaginatedActionsAllOneQuery({
    languageName: selectedLanguage,
    clanguageName: selectedLanguage,
    typeActionsTranslate: selectedType,
    categoryTranslate: selectedCategory,
    page: currentPage,
    size: 10, // Set a constant value for items per page
    sort,
  });

  const [aboutContent, setAboutContent] = useState<ActionDto[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      const fetchedData = (data as unknown as MyResponse)?.data || [];
      if (fetchedData.length === 0) {
        setErrorMessage('No content available for your request.');
      } else {
        setAboutContent(fetchedData);
        setErrorMessage(null);
      }
    } else {
      setErrorMessage('Failed to fetch data. Please try again later.');
    }
  }, [data, selectedLanguage]);

  const handlePreviousPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    // Adjust this condition based on your total pages or data length
    if (aboutContent.length === 10) setCurrentPage(currentPage + 1); // Keeping it constant at 10
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
              <ErrorMessage message={errorMessage} />
            ) : (
              aboutContent.map((article, index) => (
                <Actions
                  key={index}
                  title={article.title}
                  date={article.date}
                  image={article.imagedata}
                  content={article.description}
                  category={article.categoryTranslate}
                  type={article.typeActionsTranslate}
                  goal={article.objectif}
                  raised={article.recolte}
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
            <SidebarAction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionsActivity;
