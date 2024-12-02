import React, { useEffect, useState, useMemo } from 'react';
import GalleryItem from './GalleryItem';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import { useGetPaginatedType_image_image_storeAllOneQuery } from '../../redux/api/storeTypeImageImageStore';
import { TypeImageTranslateDto, useGetAllTypeImageTranslateDtosQuery } from '../../redux/api/typeImageTranslateApiSlice';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
 
interface GalleryItemData {
  id: number;
  typeImageTranslateId: number;
  typeTranslate: string;
  imageStoreId: number;
  imageStoreName: string;
  imageStoreUrl: string;
  languageName: string;
}

interface MyResponse {
  message: string;
  data: GalleryItemData[];
}

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const selectedLanguage = useSelector((state: RootState) => state.language.language);

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(6);
  const [sort] = useState('id,desc');

  const { data } = useGetPaginatedType_image_image_storeAllOneQuery({ languageName: selectedLanguage, page: currentPage, size: itemsPerPage, sort });
  const { data: defaultData } = useGetPaginatedType_image_image_storeAllOneQuery({ languageName: 'French', page: currentPage, size: itemsPerPage, sort });
  
  const [typeContent, setTypeContent] = useState<GalleryItemData[]>([]);
  const { data: type } = useGetAllTypeImageTranslateDtosQuery(selectedLanguage);
  
  const typeImag = (type as unknown as { message: string; data: TypeImageTranslateDto[] })?.data || [];
  const categories = useMemo(() => ['*', ...typeImag.map((item) => item.typeTranslate)], [typeImag]);

  useEffect(() => {
    if (data) {
      const fetchedData = (data as unknown as MyResponse)?.data || [];
      setTypeContent(fetchedData.length > 0 ? fetchedData : (defaultData as unknown as MyResponse)?.data || []);
    } else if (defaultData) {
      setTypeContent((defaultData as unknown as MyResponse)?.data || []);
    }
  }, [data, defaultData]);

  const [selectedCategory, setSelectedCategory] = useState<string>('*');
  
  const filteredItems = useMemo(() => 
    selectedCategory === '*' 
      ? typeContent 
      : typeContent.filter(item => item.typeTranslate === selectedCategory)
  , [selectedCategory, typeContent]);

  const handleNextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const handlePreviousPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));

  const hasNextPage = data && (data as unknown as MyResponse).data.length === itemsPerPage;

  return (
    <div className="py-10 px-6 bg-gray-100 dark:bg-gray-600">
      <div className="container mx-auto text-center dark:text-white">
        <h2 className="text-4xl font-semibold mb-6 font-slab">
          {t('post.Our Gallery') || ''}
        </h2>
        <div className="mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 m-1 rounded-lg font-semibold font-slab ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              aria-label={`Filter by ${category}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center">
          {filteredItems.map((item) => (
            <GalleryItem
              key={item.id}
              title={item.typeTranslate}
              imageUrl={item.imageStoreUrl}
            />
          ))}
        </div>
        <div className="mt-6 flex justify-center">
 
 
<div className="mt-6 flex justify-center items-center space-x-4">
  <button
    onClick={handlePreviousPage}
    disabled={currentPage === 0}
    className={`px-4 py-2 m-1 rounded-lg font-semibold flex items-center ${currentPage === 0 ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white'}`}
    aria-label={t('post.Previous')}
  >
    <ArrowLeftIcon className="w-5 h-5" />
  </button>
  <span className="font-semibold text-gray-700 dark:text-gray-300">
    <div></div>
  </span>
  <button
    onClick={handleNextPage}
    disabled={!hasNextPage}
    className={`px-4 py-2 m-1 rounded-lg font-semibold flex items-center ${!hasNextPage ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white'}`}
    aria-label={t('post.Next')}
  >
    <ArrowRightIcon className="w-5 h-5" />
  </button>
</div>


        </div>
      </div>
    </div>
  );
};

export default Gallery;
