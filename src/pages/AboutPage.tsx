import React, { useEffect, useState } from 'react';
import ComponentOne from '../common/ComponentOne';
import { AboutUsDTO, useGetAboutUsByLanguageQuery } from '../redux/api/aboutUsApiSlice';
import OverlayLoader from '../common/Loader/OverlayLoader';
import ErrorLoader from '../common/Loader/ErrorLoader';
import { useSelector } from 'react-redux';
import { RootState } from '../common/store';
 
interface MY_Response {
  message: string;
  data: AboutUsDTO[];
}

const AboutPage: React.FC = () => {
  const selectedLanguage = useSelector((state: RootState) => state.language.language); // Get selected language from Redux store

  //const { data, isLoading, error } = useGetAboutUsByLanguageQuery(i18n.language);
    // Fetch data based  on the selected language
    const { data, isLoading,isFetching, error } = useGetAboutUsByLanguageQuery(selectedLanguage);
  const { data: defaultData } = useGetAboutUsByLanguageQuery('French'); // Fetch default language data (English)

  const [aboutContent, setAboutContent] = useState<AboutUsDTO[]>([]);

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

  return (<div>
    {aboutContent.map((item, index) => (
      <ComponentOne 
        key={index}
        title={item.title || 'Default Title'}
        content={item.content || 'Default Content'}
        imageData={item.imageData || ''}
      />
    ))}
  </div>
);
};

export default AboutPage;
