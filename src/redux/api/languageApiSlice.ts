import apiServices from "../../common/apiServices";
import { Language } from "../languageSlice";
 
// Define the tag types
export const LANGUAGE_TAGS = ['Language'] as const;

// Enhance the API service with additional tag types
const languageApiSlice = apiServices
  .enhanceEndpoints({
    addTagTypes: LANGUAGE_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      // Endpoint to fetch all languages
      getAllLanguages: builder.query<Language[], void>({
        query: () => ({
          url: '/languagesAll',
          method: 'GET',
        }),
        providesTags: [LANGUAGE_TAGS[0]], // Tag for the list of languages
      }),
      // Endpoint to fetch a single language by ID
      getLanguageById: builder.query<Language, string>({
        query: (id) => ({
          url: `/languages/${id}`,
          method: 'GET',
        }),
        providesTags: (_result, _error, id) => [{ type: LANGUAGE_TAGS[0], id }], // Tag for individual language
      }),
      // Endpoint to create a new language
      createLanguage: builder.mutation<Language, Partial<Language>>({
        query: (newLanguage) => ({
          url: '/languages',
          method: 'POST',
          data: newLanguage,
        }),
        invalidatesTags: [LANGUAGE_TAGS[0]], // Invalidate the entire list of languages
      }),
      // Endpoint to update an existing language
      updateLanguage: builder.mutation<Language, { id: any; name: any }>({
        query: ({ id, ...patch }) => ({
          url: `/languages/${id}`,
          method: 'PUT',
          data: patch,
        }),
        invalidatesTags: [LANGUAGE_TAGS[0]], // Invalidate the entire list of languages
      }),
      // Endpoint to delete a language by ID
      deleteLanguage: builder.mutation<void, any>({
        query: (id) => ({
          url: `/languages/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [LANGUAGE_TAGS[0]], // Invalidate the entire list of languages
      }),
    }),
    overrideExisting: false,
  });

export const {
  useGetAllLanguagesQuery,
  useGetLanguageByIdQuery,
  useCreateLanguageMutation,
  useUpdateLanguageMutation,
  useDeleteLanguageMutation,
} = languageApiSlice;

export default languageApiSlice;
