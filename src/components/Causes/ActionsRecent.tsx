// components/Blog/FromOurBlog.tsx
import React, { useEffect, useState } from 'react';
 import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
 import { Cause } from './Cause';
import { useGetPaginatedLastActionsAllOneQuery } from '../../redux/api/actionsApiSlice';

  
interface CauseProps {
  id: number;
  title: string;
  objectif: string;
  recolte: string;
  description: string;
  date:string;
  
  typeActionsTranslateId: number;
  typeActionsTranslate: string;
  languageId: number;
  languageName: string;
  categoryTranslateId: number;
  categoryTranslate: string;
  clanguageId: number;
  clanguageName: string;
  storeImageId: number;
  storeImageName: string;
  storeImageType: string;
  imagedata: any;

}
interface MyResponse {
  message: string;
  data: CauseProps[];
}  

const ActionsRecent: React.FC = () => {
  const { t } = useTranslation();



  const [currentPage, _setCurrentPage] = useState(0);
  const [itemsPerPage, _setItemsPerPage] = useState(3);
  const [sort, _setSort] = useState('id,desc'); // Default sort as a single string

 
  const selectedLanguage = useSelector((state: RootState) => state.language.language); // Get selected language from Redux store
  const { data } = useGetPaginatedLastActionsAllOneQuery({ clanguageName:selectedLanguage, page: currentPage, size: itemsPerPage, sort });
  
  const { data:defaultData } = useGetPaginatedLastActionsAllOneQuery({ clanguageName:'French', page: currentPage, size: itemsPerPage, sort });
  const [typeContent, setTypeContent] = useState<CauseProps[]>([]);

  useEffect(() => {
    if (data) {
      const fetchedData = (data as unknown as MyResponse)?.data || [];
      
      if (fetchedData.length === 0 && selectedLanguage !== 'French') {
        // If no content is found for the selected language, fall back to the default language (English)
        const fallbackData = (defaultData as unknown as MyResponse)?.data || [];
        setTypeContent(fallbackData);
      } else {
        setTypeContent(fetchedData);
      }
    } else if (defaultData) {
      // In case the initial data request fails but fallback data is available
      const fallbackData = (defaultData as unknown as MyResponse)?.data || [];
      setTypeContent(fallbackData);
    }
  }, [data, defaultData, selectedLanguage]);

  return (
  
  <section className="py-20 px-6 bg-gray-200  dark:bg-gray-600">
    <div className="container mx-auto text-center dark:text-gray-100">
      <h2 className="text-4xl font-semibold mb-6 font-slab"> {t('post.Latest Actions of AMES') || ''}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {typeContent.map((cause, index) => (
          <Cause
            key={index}
            goal={cause.objectif}
            raised={cause.recolte}
            title={cause.title}
            description={cause.description}
            imageUrl={cause.imagedata}
          />
        ))}
      </div>
    </div>
  </section>
  );
};

export default ActionsRecent;
