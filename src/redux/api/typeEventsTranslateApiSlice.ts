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

// Define the tag types
export const TYPE_EVENTS_TRANSLATE_TAGS = ['TypeEventsTranslates'] as const;

// Enhance the API service with additional tag types
const typeEventsTranslateApiSlice = apiServices
  .enhanceEndpoints({
    addTagTypes: TYPE_EVENTS_TRANSLATE_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      // Endpoint to fetch all type events translates
      getAllTypeEventsTranslates: builder.query<TypeEventsTranslate[], void>({
        query: () => ({
          url: '/type-events-translate',
          method: 'GET',
        }),
        providesTags: [TYPE_EVENTS_TRANSLATE_TAGS[0]], // Tag for the list of type events translates
      }),
      // Endpoint to fetch a specific type events translate by ID
      getTypeEventsTranslateById: builder.query<TypeEventsTranslate, number>({
        query: (id) => ({
          url: `/type-events-translate/${id}`,
          method: 'GET',
        }),
        providesTags: (result, error, id) => [{ type: TYPE_EVENTS_TRANSLATE_TAGS[0], id }], // Tag for individual type events translate
      }),
      // Endpoint to fetch all type events translate DTOs
      getAllTypeEventsTranslateDtos: builder.query<TypeEventsTranslateDto[], void>({
        query: () => ({
          url: '/type-events-translateDtoAll',
          method: 'GET',
        }),
        providesTags: [TYPE_EVENTS_TRANSLATE_TAGS[0]], // Tag for the list of type events translate DTOs
      }),
      // Endpoint to fetch all type events translate records
      getAllTypeEventsTranslateRecords: builder.query<TypeEventsTranslateDto[], void>({
        query: () => ({
          url: '/type-events-translateAll',
          method: 'GET',
        }),
        providesTags: [TYPE_EVENTS_TRANSLATE_TAGS[0]], // Tag for the list of type events translates
      }),
      // Endpoint to create a new type events translate
      createTypeEventsTranslate: builder.mutation<TypeEventsTranslate, { languageId: number; data: Partial<TypeEventsTranslate> }>({
        query: ({ languageId, data }) => ({
          url: `/${languageId}/type-events-translate`,
          method: 'POST',
          data: data,
        }),
        invalidatesTags: [TYPE_EVENTS_TRANSLATE_TAGS[0]], // Invalidate the entire list of type events translates
      }),
      // Endpoint to update an existing type events translate by ID
      updateTypeEventsTranslate: builder.mutation<TypeEventsTranslate, { id: number; data: Partial<TypeEventsTranslate> }>({
        query: ({ id, data }) => ({
          url: `/type-events-translate/${id}`,
          method: 'PUT',
          data: data,
        }),
        invalidatesTags: [TYPE_EVENTS_TRANSLATE_TAGS[0]], // Invalidate the entire list of type events translates
      }),
      // Endpoint to delete a type events translate by ID
      deleteTypeEventsTranslate: builder.mutation<void, number>({
        query: (id) => ({
          url: `/type-events-translate/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [TYPE_EVENTS_TRANSLATE_TAGS[0]], // Invalidate the entire list of type events translates
      }),
    }),
    overrideExisting: false,
  });

// Export hooks generated by createApi for each endpoint
export const {
  useGetAllTypeEventsTranslatesQuery,
  useGetTypeEventsTranslateByIdQuery,
  useGetAllTypeEventsTranslateDtosQuery,
  useGetAllTypeEventsTranslateRecordsQuery,
  useCreateTypeEventsTranslateMutation,
  useUpdateTypeEventsTranslateMutation,
  useDeleteTypeEventsTranslateMutation,
} = typeEventsTranslateApiSlice;

// Default export for the slice
export default typeEventsTranslateApiSlice;
