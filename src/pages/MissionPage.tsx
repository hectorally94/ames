import React, { useEffect, useState } from 'react';
import ComponentOne from '../common/ComponentOne';
 import OverlayLoader from '../common/Loader/OverlayLoader';
import ErrorLoader from '../common/Loader/ErrorLoader';
import { useSelector } from 'react-redux';
import { RootState } from '../common/store';
import i18n from '../i18n';
import { MissionDto, useGetMissionByLanguageQuery } from '../redux/api/missionsApiSlice';

interface MY_Response {
  message: string;
  data: MissionDto[];
}

const MissionPage: React.FC = () => {
  const selectedLanguage = useSelector((state: RootState) => state.language.language); // Get selected language from Redux store

  //const { data, isLoading, error } = useGetAboutUsByLanguageQuery(i18n.language);
    // Fetch data based on the selected language
    const { data, isLoading,isFetching, error } = useGetMissionByLanguageQuery(i18n.language, {
      skip: !i18n.language, // Skip query if no language is available
    });
  const { data: defaultData } = useGetMissionByLanguageQuery('French'); // Fetch default language data (English)

  const [aboutContent, setAboutContent] = useState<MissionDto[]>([]);

  useEffect(() => {
    if (data) {
      const fetchedData = (data as unknown as MY_Response)?.data || [];
      
      if (fetchedData.length === 0 && selectedLanguage !== 'French') {
        // If no content is found for the selected language, fall back to the default language (English)
        const fallbackData = (defaultData as unknown as MY_Response)?.data || [];
        setAboutContent(fallbackData);
      } else {
        setAboutContent(fetchedData);
      }
    } else if (defaultData) {
      // In case the initial data request fails but fallback data is available
      const fallbackData = (defaultData as unknown as MY_Response)?.data || [];
      setAboutContent(fallbackData);
    }
  }, [data, defaultData, selectedLanguage,isLoading]);

  // Handle loading state
  // Show the loader when loading the data for the first or any subsequent time
  if (isLoading || isFetching) {
    return <div><OverlayLoader /></div>;
  }

  // Handle error state
  if (error) return <div><ErrorLoader /></div>;

  // Handle case when aboutContent is empty
  if (aboutContent.length === 0) {
    return <div>No content available</div>;
  }

  return (
  <div>
    {aboutContent.map((item, index) => (
      <ComponentOne 
        key={index}
        title={item.title || 'Default Title'}
        content={item.description || 'Default Content'}
        imageData={item.imageData || ''}
      />
    ))}
  </div>
);
};

export default MissionPage;
