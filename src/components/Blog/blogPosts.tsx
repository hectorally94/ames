// components/Blog/FromOurBlog.tsx
import React, { useEffect, useState } from 'react';
import BlogPostCard from './BlogPostCard';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import { useGetPaginatedBlogsLastQuery } from '../../redux/api/blogsApiSlice';
 
interface BlogPost {
  id: number;
  title: string;
  objectif: string;
  recolte: string;
  description: string;
  date:string;

  categoryBlogTranslateId: number;
  categoryBlogTranslate: string;

  clanguageId: number;
  clanguageName: string;

  storeImageId: number;
  storeImageName: string;
  storeImageType: string;
   imagedata: any;
}
 

interface MyResponse {
  message: string;
  data: BlogPost[];
}  

const FromOurBlog: React.FC = () => {
  const { t } = useTranslation();



  const [currentPage, _setCurrentPage] = useState(0);
  const [itemsPerPage, _setItemsPerPage] = useState(3);
  const [sort, _setSort] = useState('id,desc'); // Default sort as a single string

 
 
 const selectedLanguage = useSelector((state: RootState) => state.language.language); // Get selected language from Redux store
 console.log('selectedLanguage selectedLanguage',selectedLanguage)

   const { data } = useGetPaginatedBlogsLastQuery({ clanguageName:selectedLanguage, page: currentPage, size: itemsPerPage, sort });
  
  console.log('data data',data)

  const { data:defaultData } = useGetPaginatedBlogsLastQuery({ clanguageName:'French', page: currentPage, size: itemsPerPage, sort });
  const [typeContent, setTypeContent] = useState<BlogPost[]>([]);

  console.log('defaultData defaultData',defaultData)

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
  }, [data, defaultData, selectedLanguage,currentPage]);

  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-600">
      <div className="container mx-auto text-center dark:text-white">
        <h2 className="text-4xl font-semibold mb-6 font-slab">  {t('post.Our Blog') || ''}
        </h2>
        <h3 className="text-2xl font-semibold mb-6 font-slab">  {t('post.Latest News') || ''}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {typeContent.map((post, index) => (
            <BlogPostCard
              key={index}
              title={post.title}   
              excerpt={post.description}
               date={post.date}
              imageUrl={post.imagedata} // Pass the image URL to BlogPostCard
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FromOurBlog;
