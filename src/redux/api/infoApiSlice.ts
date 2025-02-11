import apiServices from "../../common/apiServices";

// Define the interface for Info
export interface Info {
  id: number;
  infoType: string;
}

// Define the tag types
export const INFO_TAGS = ['Info'] as const;

// Enhance the API service with additional tag types
const infoApiSlice = apiServices
  .enhanceEndpoints({
    addTagTypes: INFO_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      // Endpoint to fetch all info
      getAllInfo: builder.query<Info[], void>({
        query: () => ({
          url: '/info',
          method: 'GET',
        }),
        providesTags: [INFO_TAGS[0]], // Tag for the list of info
      }),
      // Endpoint to fetch a specific info by ID
      getInfoById: builder.query<Info, number>({
        query: (id) => ({
          url: `/info/${id}`,
          method: 'GET',
        }),
        providesTags: (_result, _error, id) => [{ type: INFO_TAGS[0], id }], // Tag for individual info
      }),
      // Endpoint to create a new info
      createInfo: builder.mutation<Info, Partial<Info>>({
        query: (newInfo) => ({
          url: '/info',
          method: 'POST',
          data: newInfo,
        }),
        invalidatesTags: [INFO_TAGS[0]], // Invalidate the entire list of info
      }),
      // Endpoint to update an existing info by ID
      updateInfo: builder.mutation<Info, { id: number; data: Partial<Info> }>({
        query: ({ id, data }) => ({
          url: `/info/${id}`,
          method: 'PUT',
          data: data,
        }),
        invalidatesTags: [INFO_TAGS[0]], // Invalidate the entire list of info
      }),
      // Endpoint to delete an info by ID
      deleteInfo: builder.mutation<void, number>({
        query: (id) => ({
          url: `/info/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [INFO_TAGS[0]], // Invalidate the entire list of info
      }),
    }),
    overrideExisting: false,
  });

// Export hooks generated by createApi for each endpoint
export const {
  useGetAllInfoQuery,
  useGetInfoByIdQuery,
  useCreateInfoMutation,
  useUpdateInfoMutation,
  useDeleteInfoMutation,
} = infoApiSlice;

// Default export for the slice
export default infoApiSlice;
