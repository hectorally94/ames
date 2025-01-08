import apiServices from "../../common/apiServices";

// Define the interfaces for Type_image_image_store and Type_image_image_storeDto
export interface Type_image_image_store {
  id: number;
}
interface PaginatedResponse<T> {
  data: T[];
  currentPage: number;
  totalItems: number;
  totalPages: number;
}


export interface Type_image_image_storeDto {
  id: number;
  typeImageTranslateId: number;
  typeTranslate:any;
  imageStoreId: number;
  imageStoreName:any;
  imageStoreUrl:any;

  languageName: string;
}

// Define the tag types
export const TYPE_IMAGE_TRANSLATE_TAGS = ['Type_image_image_store'] as const;

// Enhance the API service with additional tag types
const storeTypeImageImageStore = apiServices
  .enhanceEndpoints({
    addTagTypes: TYPE_IMAGE_TRANSLATE_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
            // Endpoint to fetch paginated actions with optional title filtering
    getPaginatedType_image_image_storeAllOne: builder.query<PaginatedResponse<Type_image_image_storeDto>, { languageName?: string; page?: number; size?: number; sort?: string }>({
      query: ({ languageName = '',page = 0, size = 3, sort = 'id,desc' }) => ({
        url: '/type_image_image_storeFilterLanguage',
        params: { languageName,page, size, sort },
        method: 'GET',
      }),
      providesTags: [TYPE_IMAGE_TRANSLATE_TAGS[0]], // Tag for the list of type image translates
    }),
     
      // Endpoint to fetch a specific type image translate by ID
      getType_image_image_storeById: builder.query<Type_image_image_store, number>({
        query: (id) => ({
          url: `/type_image_image_store/${id}`,
          method: 'GET',
        }),
        providesTags: (_result, _error, id) => [{ type: TYPE_IMAGE_TRANSLATE_TAGS[0], id }], // Tag for individual type image translate
      }),
     
      // Endpoint to fetch all type image translate records
      getAllType_image_image_storeRecords: builder.query<Type_image_image_storeDto[], void>({
        query: () => ({
          url: '/type_image_image_storeAll',
          method: 'GET',
        }),
        providesTags: [TYPE_IMAGE_TRANSLATE_TAGS[0]], // Tag for the list of type image translates
      }),
      // Endpoint to create a new type image translate
   // Endpoint to create a new type image translate
   createType_image_image_store: builder.mutation<Type_image_image_store, { typeImageTranslate_id: any; imageStore_id: any; data: { id: any } }>({
  query: ({ typeImageTranslate_id, imageStore_id, data }) => ({
    url: `/type_image_image_store/${typeImageTranslate_id}/${imageStore_id}`,
    method: 'POST',
    data: { typeImageTranslate_id, imageStore_id, data }, // Correct usage of `body`
  }),
        invalidatesTags: [TYPE_IMAGE_TRANSLATE_TAGS[0]], // Invalidate the entire list of type image translates
      }),
      // Endpoint to update an existing type image translate by ID
      updateType_image_image_store: builder.mutation<Type_image_image_store, { id: number; data: Partial<Type_image_image_store> }>({
        query: ({ id, data }) => ({
          url: `/type_image_image_store/${id}`,
          method: 'PUT',
          data: data,
        }),
        invalidatesTags: [TYPE_IMAGE_TRANSLATE_TAGS[0]], // Invalidate the entire list of type image translates
      }),
      // Endpoint to delete a type image translate by ID
      deleteType_image_image_store: builder.mutation<void, number>({
        query: (id) => ({
          url: `/type_image_image_store/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [TYPE_IMAGE_TRANSLATE_TAGS[0]], // Invalidate the entire list of type image translates
      }),
    }),
    overrideExisting: false,
  });

// Export hooks generated by createApi for each endpoint
export const {
  useGetPaginatedType_image_image_storeAllOneQuery,
  useGetType_image_image_storeByIdQuery,
  useGetAllType_image_image_storeRecordsQuery,
  useCreateType_image_image_storeMutation,
  useUpdateType_image_image_storeMutation,
  useDeleteType_image_image_storeMutation,
} = storeTypeImageImageStore;

// Default export for the slice
export default storeTypeImageImageStore;