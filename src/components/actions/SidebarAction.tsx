// components/Blog/Sidebar.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../common/store';
 import { setSelectedCategory, setSelectedType } from '../../redux/eventsSlice';
 import Base64ImageIcon from '../../common/Base64ImageIcon';
import { useTranslation } from 'react-i18next';
import { CategoryActionTranslateDto, useGetAllCategoryActionTranslatesQuery } from '../../redux/api/categoryActionTranslateApiSlice';
import { TypeActionsTranslateDto, useGetAllTypeActionsTranslatesQuery } from '../../redux/api/typeActionsTranslateApiSlice';
 
interface MyTypeResponse {
  message: string;
  data: TypeActionsTranslateDto[];
} 
interface MyCategoryResponse {
  message: string;
  data: CategoryActionTranslateDto[];
} 
const SidebarAction: React.FC = () => {
  const { t } = useTranslation();

  const [currentPage,  _setCurrentPage] = useState(0);
  const [itemsPerPage, _setItemsPerPage] = useState(10);
  const [sort, _setSort] = useState('id,desc'); // Default sort as a single string

  const selectedLanguage = useSelector((state: RootState) => state.language.language); // Get selected language from Redux store
  const { data } = useGetAllTypeActionsTranslatesQuery({ name:selectedLanguage, page: currentPage, size: itemsPerPage, sort });
  
  const { data:defaultData } = useGetAllTypeActionsTranslatesQuery({ name:'French', page: currentPage, size: itemsPerPage, sort });
  const [typeContent, setTypeContent] = useState<TypeActionsTranslateDto[]>([]);

  const { data:dataCategory } = useGetAllCategoryActionTranslatesQuery({ name:selectedLanguage, page: currentPage, size: itemsPerPage, sort });
  
  const { data:defaultDataCategory } = useGetAllCategoryActionTranslatesQuery({ name:'French', page: currentPage, size: itemsPerPage, sort });
  const [categoryContent, setCategory] = useState<CategoryActionTranslateDto[]>([]);


useEffect(() => {
  if (data) {
    const fetchedData = (data as unknown as MyTypeResponse)?.data || [];
    
    if (fetchedData.length === 0 && selectedLanguage !== 'French') {
      // If no content is found for the selected language, fall back to the default language (English)
      const fallbackData = (defaultData as unknown as MyTypeResponse)?.data || [];
      setTypeContent(fallbackData);
    } else {
      setTypeContent(fetchedData);
    }
  } else if (defaultData) {
    // In case the initial data request fails but fallback data is available
    const fallbackData = (defaultData as unknown as MyTypeResponse)?.data || [];
    setTypeContent(fallbackData);
  }
}, [data, defaultData, selectedLanguage]);


useEffect(() => {
  if (dataCategory) {
    const fetchedData = (dataCategory as unknown as MyCategoryResponse)?.data || [];
    
    if (fetchedData.length === 0 && selectedLanguage !== 'French') {
      // If no content is found for the selected language, fall back to the default language (English)
      const fallbackData = (defaultDataCategory as unknown as MyCategoryResponse)?.data || [];
      setCategory(fallbackData);
    } else {
      setCategory(fetchedData);
    }
  } else if (defaultData) {
    // In case the initial data request fails but fallback data is available
    const fallbackData = (defaultDataCategory as unknown as MyCategoryResponse)?.data || [];
    setCategory(fallbackData);
  }
}, [dataCategory, defaultDataCategory, selectedLanguage]);
const dispatch = useDispatch();

const handleCategoryClick = (category: any) => {
  dispatch(setSelectedCategory(category));
  //console.log('selectedCategory',category)

};
const handleTypeClick = (type: any) => {
  dispatch(setSelectedType(type));
 //console.log('type',type)

};

  return (
    <div
  className="bg-transparent p-4 mb-20 pb-20 pt-20 md:fixed md:top-20 md:right-0 md:w-1/4 md:overflow-auto"
  style={{ height: 'calc(100vh - 5rem)', maxHeight: 'calc(100vh - 5rem)', overflowY: 'auto', zIndex: 10 }}
>
  <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4 font-slab">  {t('post.Type of Actions') || ''}
        </h2>
        <ul className="list-none">
        {typeContent.map((post, index) => (
  <li key={index} className="mb-4 flex items-center">
    <div className="flex items-center">
    <Base64ImageIcon
         alt={`${post.typeTranslate} icon`}
        className="mr-2" // Additional margin if needed
      />
      <a
        href="#"
        className="text-gray-700 hover:text-green-500"
        onClick={() => handleTypeClick(post.typeTranslate)}
      >
        <div className="font-semibold font-slab">{post.typeTranslate}</div>
      </a>
    </div>
  </li>
))}
        </ul>
      </div> 

      <div className="mt-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4 font-slab">{t('post.Categories') || ''}</h2>
        <ul className="list-none">
          {categoryContent.map((post, index) => (
            <li key={index} className="mb-4 flex items-center">
    <div className="flex items-center">
    <Base64ImageIcon
         alt={`${post.categoryTranslate} icon`}
        className="mr-2" // Additional margin if needed
      />
               <a
                  href="#"
                  className="text-gray-700 hover:text-green-500"
                  onClick={() => handleCategoryClick(post.categoryTranslate)}
                >
                  <div className="font-semibold font-slab">{post.categoryTranslate}</div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarAction;
