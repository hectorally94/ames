import apiServices from "../../common/apiServices";

// Define the interface for AutreType
export interface AutreType {
  id: number;
  typeTranslate: any;
}
export interface AutreTypeDto {
  id: number;
  typeTranslate: any;

  languageId: number;
  languageName: string;
}
// Define the tag types
export const AUTRE_TYPE_TAGS = ['TypeAutreTranslate'] as const;

// Enhance the API service with additional tag types
const autreTypeApiSlice = apiServices
  .enhanceEndpoints({
    addTagTypes: AUTRE_TYPE_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({

      // Endpoint to fetch all type actions
      getAllTypeAutreTranslate: builder.query<AutreTypeDto[], void>({
        query: () => ({
          url: '/type_autre_translateAll',
          method: 'GET',
        }),
        providesTags: [AUTRE_TYPE_TAGS[0]], // Tag for the list of type actions
      }),
       // Endpoint to fetch all type actions
      getAllTypeAutreTranslateAll: builder.query<AutreType[], void>({
        query: () => ({
          url: '/type_autre_translate',
          method: 'GET',
        }),
        providesTags: [AUTRE_TYPE_TAGS[0]], // Tag for the list of type actions
      }),
      // Endpoint to fetch a specific type action by ID
      getTypeTypeAutreById: builder.query<AutreType, number>({
        query: (id) => ({
          url: `/type_autre_translate/${id}`,
          method: 'GET',
        }),
        providesTags: (_result, _error, id) => [{ type: AUTRE_TYPE_TAGS[0], id }], // Tag for individual type action
      }),
      // Endpoint to create a new type action
      createTypeTypeAutre: builder.mutation<AutreType, { languageId: number; data: Partial<AutreType> }>({
        query: ({ languageId, data }) => ({
            url: `/${languageId}/type_autre_translate`,

          method: 'POST',
          data: data,
        }),
        invalidatesTags: [AUTRE_TYPE_TAGS[0]], // Invalidate the entire list of type actions
      }),
      // Endpoint to update an existing type action by ID
      updateTypeTypeAutre: builder.mutation<AutreType, { id: number; data: Partial<AutreType> }>({
        query: ({ id, data }) => ({
          url: `/type_autre_translate/${id}`,
          method: 'PUT',
          data: data,
        }),
        invalidatesTags: [AUTRE_TYPE_TAGS[0]], // Invalidate the entire list of type actions
      }),
      // Endpoint to delete a type action by ID
      deleteTypeTypeAutre: builder.mutation<void, number>({
        query: (id) => ({
          url: `/type_autre_translate/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [AUTRE_TYPE_TAGS[0]], // Invalidate the entire list of type actions
      }),
    }),
    overrideExisting: false,
  });

// Export hooks generated by createApi for each endpoint
export const {
  useGetAllTypeAutreTranslateQuery,
  useGetAllTypeAutreTranslateAllQuery,
  useGetTypeTypeAutreByIdQuery,
  useCreateTypeTypeAutreMutation,
  useUpdateTypeTypeAutreMutation,
  useDeleteTypeTypeAutreMutation,
} = autreTypeApiSlice;

// Default export for the slice
export default autreTypeApiSlice;