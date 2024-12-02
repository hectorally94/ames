// components/Team/OurTeam.tsx
import React, { useEffect, useState } from 'react';
import Member from './Member';
import { useTranslation } from 'react-i18next';
import { RootState } from '../../common/store';
import { useSelector } from 'react-redux';
import { useGetPaginatedPartenaireAllOneQuery } from '../../redux/api/partenairesApiSlice';

 
interface TeamMemberData {
  id: number;
  fullname: string;
  post: string;
  languageId:any;
  languageName:any;
  imagePartenaireId:any;
  imagedata:any

}
interface MyResponse {
  message: string;
  data: TeamMemberData[];
} 
 
const OurActionnaire: React.FC = () => {
  const { t } = useTranslation();

  const [currentPage, _setCurrentPage] = useState(0);
  const [itemsPerPage, _setItemsPerPage] = useState(10);
  const [sort, _setSort] = useState('id,desc'); // Default sort as a single string

 
  const selectedLanguage = useSelector((state: RootState) => state.language.language); // Get selected language from Redux store
  const { data } = useGetPaginatedPartenaireAllOneQuery({ languageName:selectedLanguage, page: currentPage, size: itemsPerPage, sort });
  
  const { data:defaultData } = useGetPaginatedPartenaireAllOneQuery({ languageName:'French', page: currentPage, size: itemsPerPage, sort });
  const [typeContent, setTypeContent] = useState<TeamMemberData[]>([]);


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
    <section className="py-20 px-6 bg-white dark:bg-gray-600">
      <div className="container mx-auto text-center dark:text-white">
        <h2 className="text-4xl font-semibold mb-6 font-slab"> {t('post.Our Main Partners') || ''}
        </h2>
        <h3 className="text-2xl font-semibold mb-6 font-slab">  {t('post.Donating in the Name of Allah') || ''}
        </h3>
        <div className="flex flex-wrap justify-center">
          {typeContent.map((member, index) => (
            <Member
              key={index}
              name={member.fullname}
              role={member.post}
              imageUrl={member.imagedata}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurActionnaire;
