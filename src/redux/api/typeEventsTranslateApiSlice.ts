import apiServices from "../../common/apiServices";

// Define the interfaces for TypeEventsTranslate and TypeEventsTranslateDto
export interface TypeEventsTranslate {
  id: number;
  typeTranslate: string;
}

export interface TypeEventsTranslateDto {
  id: number;
  typeTranslate: string;
  languageId: number;
  languageName: string;
}
// Define the interfaces for Event and related types
interface PaginatedResponse<T> {
  data: T[];
  currentPage: number;
  totalItems: number;
  totalPages: number;
}
// Define the tag types
export const TYPE_EVENTS_TRANSLATE_TAGS = ['TypeEventsTranslates'] as const;

// Enhance the API service with additional tag types
const typeEventsTranslateApiSlice = apiServices
  .enhanceEndpoints({
    addTagTypes: TYPE_EVENTS_TRANSLATE_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
            // Endpoint to fetch paginated actions with optional title filtering
    getPaginatedTypeEventsAllOne: builder.query<PaginatedResponse<TypeEventsTranslateDto>, { name?: string; page?: number; size?: number; sort?: string }>({
      query: ({ name = '', page = 0, size = 15, sort = 'id,desc' }) => ({
        url: '/type-events-translateDtoAll',
        params: { name, page, size, sort },
        method: 'GET',
      }),
      providesTags: [TYPE_EVENTS_TRANSLATE_TAGS[0]], // Tag for the list of actions
    }),
    }),
    overrideExisting: false,
  });

// Export hooks generated by createApi for each endpoint
export const {
  useGetPaginatedTypeEventsAllOneQuery
} = typeEventsTranslateApiSlice;

// Default export for the slice
export default typeEventsTranslateApiSlice;
