import apiServices from "../../common/apiServices";

// Define the interface for AutreInfo
export interface AutreInfo {
  id: number;
  money: any;

}
export interface AutreInfoDto {
  id: number;
  money: any;

  translateId: any;
  translateName: any;

   languageId: any;
   languageName: any;
}
// Define the tag types 

export const AUTRE_TYPE_INFO_TAGS = ['TypeAutreInfo'] as const;

// Enhance the API service with additional tag types
const autreInfoApiSlice = apiServices
  .enhanceEndpoints({
    addTagTypes: AUTRE_TYPE_INFO_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      // Endpoint to fetch all type actions
      getAllTypeAutreInfo: builder.query<AutreInfoDto[], void>({
        query: () => ({
          url: '/type_autre_infoDtoAll',
          method: 'GET',
        }),
        providesTags: [AUTRE_TYPE_INFO_TAGS[0]], // Tag for the list of type actions
      }),
      // Endpoint to fetch a specific type action by ID
      getTypeTypeAutreInfoById: builder.query<AutreInfo, number>({
        query: (id) => ({
          url: `/type_autre_info/${id}`,
          method: 'GET',
        }),
        providesTags: (_result, _error, id) => [{ type: AUTRE_TYPE_INFO_TAGS[0], id }], // Tag for individual type action
      }),
      // Endpoint to create a new type action
      
      createTypeTypeAutreInfo: builder.mutation<AutreInfo, { typeAutreTranslate_id: any; data: Partial<AutreInfo> }>({
        query: ({ typeAutreTranslate_id, data }) => ({
            url: `/${typeAutreTranslate_id}/type_autre_info`,

          method: 'POST',
          data: data,
        }),
        invalidatesTags: [AUTRE_TYPE_INFO_TAGS[0]], // Invalidate the entire list of type actions
      }),

      // Endpoint to update an existing type action by ID
      updateTypeAutreInfo: builder.mutation<AutreInfo, { id: any; data: Partial<AutreInfo> }>({
        query: ({ id, data }) => ({
          url: `/type_autre_info/${id}`,
          method: 'PUT',
          data: data,
        }),
        invalidatesTags: [AUTRE_TYPE_INFO_TAGS[0]], // Invalidate the entire list of type actions
      }),

      // Endpoint to delete a type action by ID
      deleteTypeTypeAutreInfo: builder.mutation<void, number>({
        query: (id) => ({
          url: `/type_autre_info/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [AUTRE_TYPE_INFO_TAGS[0]], // Invalidate the entire list of type actions
      }),
    }),
    overrideExisting: false,
  });

// Export hooks generated by createApi for each endpoint
export const {
  useGetAllTypeAutreInfoQuery,
  useGetTypeTypeAutreInfoByIdQuery,
  useCreateTypeTypeAutreInfoMutation,
  useUpdateTypeAutreInfoMutation,
  useDeleteTypeTypeAutreInfoMutation,
} = autreInfoApiSlice;

// Default export for the slice
export default autreInfoApiSlice;
