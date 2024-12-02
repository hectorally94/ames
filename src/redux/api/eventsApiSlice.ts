import apiServices from "../../common/apiServices";

// Define the interfaces for Event and related types
interface PaginatedResponse<T> {
  data: T[];
  currentPage: any;
  totalItems: any;
  totalPages: any;
}

export interface Event {
  id: any;
  title: string;
  objectif: string;
  recolte: string;
  description: string;
  date:string;
}

// Define the DTO interface for Event
export interface EventDto {
  id: any;
  title: string;
  objectif: string;
  recolte: string;
  description: string;
  date:string;
  
  typeActionsTranslateId: any;
  typeActionsTranslate: string;
  languageId: any;
  languageName: string;
  categoryTranslateId: any;
  categoryTranslate: string;
  clanguageId: any;
  clanguageName: string;
  storeImageId: any;
  storeImageName: string;
  storeImageType: string;
  imagedata: any;

}

// Define the tag types
export const EVENTS_TAGS = ['Event'] as const;

// Enhance the API service with additional tag types
const eventsApiSlice = apiServices
  .enhanceEndpoints({
    addTagTypes: EVENTS_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
          // Endpoint to fetch paginated actions with optional title filtering
    getPaginatedEventsAllOne: builder.query<PaginatedResponse<EventDto>, { languageName?: string;clanguageName?: string;typeActionsTranslate?: string;categoryTranslate?: string; page?: any; size?: any; sort?: any }>({
      query: ({ languageName = '',clanguageName='', typeActionsTranslate = '',categoryTranslate='',page = 0, size = 2, sort = 'id,desc' }) => ({
        url: '/findAllEventsAllPageByLangTypeTranslateLangCategoryTranslate',
        params: { languageName,clanguageName,typeActionsTranslate  ,categoryTranslate, page, size, sort },
        method: 'GET',
      }),
      providesTags: [EVENTS_TAGS[0]], // Tag for the list of actions
    }),

     // Endpoint to fetch paginated actions with optional title filtering
     getPaginatedLastEventsAllOne: builder.query<PaginatedResponse<EventDto>, { languageName?: string;clanguageName?: string; page?: any; size?: any; sort?: string }>({
      query: ({ languageName = '',clanguageName='',page = 0, size = 3, sort = 'id,desc' }) => ({
        url: '/findAllLastEventsClient',
        params: { languageName,clanguageName, page, size, sort },
        method: 'GET',
      }),
      providesTags: [EVENTS_TAGS[0]], // Tag for the list of actions
    }),
    
    }),
    overrideExisting: false,
  });

// Export hooks generated by createApi for each endpoint
export const {
  useGetPaginatedEventsAllOneQuery,
  useGetPaginatedLastEventsAllOneQuery,
  useLazyGetPaginatedLastEventsAllOneQuery
} = eventsApiSlice;

// Default export for the slice
export default eventsApiSlice;
