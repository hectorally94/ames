// components/Blog/Sidebar.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import { setSelectedCategory } from '../../redux/eventsSlice';
import Base64ImageIcon from '../../common/Base64ImageIcon';
import { useTranslation } from 'react-i18next';
import { CategoryBlogTranslateDto, useGetAllCategoryBlogTranslatesQuery } from '../../redux/api/categoryBlogTranslateApiSlice';
 
interface MyCategoryResponse {
  message: string;
   data: CategoryBlogTranslateDto[];

} 
const SideBar: React.FC = () => {
  const { t } = useTranslation();

  const [currentPage,  _setCurrentPage] = useState(0);
  const [itemsPerPage, _setItemsPerPage] = useState(10);
  const [sort, _setSort] = useState('id,desc'); // Default sort as a single string

  const selectedLanguage = useSelector((state: RootState) => state.language.language); // Get selected language from Redux store
   
  const { data:dataCategory } = useGetAllCategoryBlogTranslatesQuery({ name:selectedLanguage, page: currentPage, size: itemsPerPage, sort });
  
  const { data:defaultDataCategory } = useGetAllCategoryBlogTranslatesQuery({ name:'French', page: currentPage, size: itemsPerPage, sort });
  const [categoryContent, setCategory] = useState<CategoryBlogTranslateDto[]>([]);

 

useEffect(() => {
     const fetchedData = (dataCategory as unknown as MyCategoryResponse)?.data || [];
    
    if (fetchedData.length === 0 && selectedLanguage !== 'French') {
      // If no content is found for the selected language, fall back to the default language (English)
      const fallbackData = (defaultDataCategory as unknown as MyCategoryResponse)?.data || [];
      setCategory(fallbackData);
    } else {
      setCategory(fetchedData);
    }
   
}, [dataCategory, defaultDataCategory, selectedLanguage]);
const dispatch = useDispatch();

const handleCategoryClick = (category: any) => {
  dispatch(setSelectedCategory(category));
  //console.log('selectedCategory',category)

};

  return (
    <div
  className="bg-transparent p-4 mb-20 pb-20 pt-20 md:fixed md:top-20 md:right-0 md:w-1/4 md:overflow-auto"
  style={{ height: 'calc(100vh - 5rem)', maxHeight: 'calc(100vh - 5rem)', overflowY: 'auto', zIndex: 10 }}
> 
      <div className="mt-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4 font-slab">{t('post.Categories') || ''}</h2>
        <ul className="list-none">
          {categoryContent.map((post, index) => (
            <li key={index} className="mb-4 flex items-center">
    <div className="flex items-center">
    <Base64ImageIcon
         alt={`${post.categoryBlogTranslate} icon`}
        className="mr-2" // Additional margin if needed
      />
               <a
                  href="#"
                  className="text-gray-700 hover:text-green-500"
                  onClick={() => handleCategoryClick(post.categoryBlogTranslate)}
                >
                  <div className="font-semibold font-slab">{post.categoryBlogTranslate}</div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
