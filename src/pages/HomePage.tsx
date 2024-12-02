import React from 'react';
import { Link } from 'react-router-dom';
 import Gallery from '../components/Gallery/allGalleryItems';
import OurTeam from '../components/teams/OurTeam';
import OurEvents from '../components/Events/OurEvents';
import FromOurBlog from '../components/Blog/blogPosts';
import OurActionnaire from '../components/Actionaires/OurActionnaire'; 
import { useGetAllWelcomesQuery, WelcomesDto } from '../redux/api/welcomesApiSlice';
import { ImpactDto, useGetAllImpactsQuery } from '../redux/api/impactsApiSlice';
import { ParticipableDto, useGetAllParticipablesDtosQuery } from '../redux/api/participablesApiSlice';
import { HistoireSuccessDto, useGetAllHistoireSuccessQuery } from '../redux/api/histoireSuccessApiSlice';
import { AutreInfoDto } from '../redux/api/autreInfoApiSlice';
import { useGetAllTypeAutresQuery } from '../redux/api/autreApiSlice';
 import { useSelector } from 'react-redux';
import { RootState } from '../common/store';
import { useTranslation } from 'react-i18next';
 import ActionsRecent from '../components/Causes/ActionsRecent';
  
interface WelcomeResponse {
  message: string;
  data: WelcomesDto[];
} 
interface ImpactResponse {
  message: string;
  data: ImpactDto[];
} 
interface ParticipateResponse {
  message: string;
  data: ParticipableDto[];
} 
interface HistoireResponse {
  message: string;
  data: HistoireSuccessDto[];
} 
interface AutreResponse {
  message: string;
  data: AutreInfoDto[];
}
const HomePage: React.FC = () => {
  
  const { t } = useTranslation();

   
  const selectedLanguage = useSelector((state: RootState) => state.language.language); // Get selected language from Redux store

  const { data:dataWelcome } = useGetAllWelcomesQuery( selectedLanguage);
  const { data:dataImpact } = useGetAllImpactsQuery(selectedLanguage);

  const { data:dataPatipable } = useGetAllParticipablesDtosQuery(selectedLanguage);
  const { data:dataHistory } = useGetAllHistoireSuccessQuery(selectedLanguage);
  const { data:dataAutre } = useGetAllTypeAutresQuery(selectedLanguage);


  const  Welcome = (dataWelcome as unknown as WelcomeResponse)?.data || [];
  const Impact = (dataImpact as unknown as ImpactResponse)?.data || [];
   const Participat = (dataPatipable as unknown as ParticipateResponse)?.data || [];
  const Histoir = (dataHistory as unknown as HistoireResponse)?.data || [];
  const Autre = (dataAutre as unknown as AutreResponse)?.data || [];

  return (
   <>
    <div className="bg-gray-100 dark:bg-gray-600 min-h-screen flex flex-col pt-20">
      {/* Hero Section Welcome */}
      <section className="bg-blue-600 dark:bg-gray-600 text-white dark:text-gray-100 py-20 mt-10 flex flex-col items-center">
  {Welcome.map((item, index) => (
    <div key={index} className="mb-10 text-center">
       
      <h1 className="text-5xl font-slab mb-6">{item.title}</h1>
      {/* Add text-center and justify-center wrapper for description */}
      <div className="flex justify-center text-center">
        <p className="text-lg font-sans mb-8 max-w-3xl text-center">
          {item.description}
        </p>
      </div>
    </div>
  ))}
  <div>
    <Link 
      to="/donate" 
      className="bg-yellow-500 dark:bg-yellow-400 text-blue-900 dark:text-yellow-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 dark:hover:bg-yellow-300 transition duration-300 font-slab"
    >
       {t('post.Make a donation now') || ''}
    </Link>
  </div>
</section>



      {/* Impact Section */}
      <section className="py-10 px-6 bg-gray-200 dark:bg-gray-600">
      <div className="container mx-auto text-center dark:bg-gray-600">
        <h2 className="text-4xl font-semibold mb-3 dark:text-gray-100 font-slab"> {t('post.Our Impact') || ''}</h2>
        <div className="flex flex-wrap justify-center">
          {Impact.map((item, index) => (
            <div key={index} className="w-full sm:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 font-slab">{item.title}</h3>
                <p className='font-sans'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
 {/* Volunteer Section */}
 <section className="py-10 px-6 bg-gray-200 dark:bg-gray-600">
      <div className="container mx-auto text-center dark:bg-gray-600 dark:text-gray-100">
        <h2 className="text-4xl font-semibold mb-6 font-slab"> {t('post.Participate') || ''}</h2>
       
        {Participat.length > 0 && (
          <div className="flex flex-wrap justify-center">
            {Participat.map((item, index) => (
              <div key={index} className="w-full sm:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg mb-8">
                {item.description}        </p>
                  <Link to="/volunteer" className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold font-slab hover:bg-blue-400 transition duration-300">
             {t('post.Become a Volunteer') || ''}
          </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>

      {/* Success Stories Section */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-600">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6 dark:text-gray-100 font-slab"> {t('post.Success Stories') || ''}</h2>
        <div className="flex flex-wrap justify-center">
          {Histoir.map((item, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Latest Cause of Sadakat Section */}
      <ActionsRecent/>
     

      {/* Autre */}
      <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-600 flex items-center justify-center dark:text-white sm:p-8 space-x-8">
      {Autre.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl font-extrabold">{item.money}</dt>
          <dd className="text-gray-500 dark:text-gray-400">{item.translateName}</dd>
        </div>
      ))}
    </div>

      {/* Gallery Section */}
      <Gallery />

      {/* Our Team Section */}
      <OurTeam />

      {/* Our Events Section */}
      <OurEvents />

      {/* From Our Blog Section */}
      <FromOurBlog />

      {/* From Our Sponsor Section */}
      <OurActionnaire />
    </div>
    </> 
  );
};

export default HomePage;
