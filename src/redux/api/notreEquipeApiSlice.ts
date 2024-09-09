import apiServices from "../../common/apiServices";

// Define the interface for NotreEquipe
export interface NotreEquipe {
  id: number;
  fullname: string;
  position: string;
}

export interface NotreEquipeDto {
  id: number;
  fullname: string;
  position: string;
  languageId:any;
  languageName:any;
  imageNotreEquipeId:any;
  imagedata:any

}
// Define the tag types
export const NOTRE_EQUIPE_TAGS = ['NotreEquipe'] as const;

// Enhance the API service with additional tag types
const notreEquipeApiSlice = apiServices
  .enhanceEndpoints({
    addTagTypes: NOTRE_EQUIPE_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      // Endpoint to fetch all notreEquipe
      getAllNotreEquipe: builder.query<NotreEquipeDto[], void>({
        query: () => ({
          url: '/notreEquipeAllDto',
          method: 'GET',
        }),
        providesTags: [NOTRE_EQUIPE_TAGS[0]], // Tag for the list of notreEquipe
      }),
      // Endpoint to fetch a specific notreEquipe by ID
      getNotreEquipeById: builder.query<NotreEquipe, number>({
        query: (id) => ({
          url: `/notreEquipe/${id}`,
          method: 'GET',
        }),
        providesTags: (result, error, id) => [{ type: NOTRE_EQUIPE_TAGS[0], id }], // Tag for individual notreEquipe
      }),
      // Endpoint to create a new notreEquipe
     
      createNotreEquipe: builder.mutation<NotreEquipe, { languageId: any; imageNotreEquipeId: any; data: Partial<NotreEquipe> }>({
        query: ({ languageId, imageNotreEquipeId, data }) => ({
          url: `/notreEquipe?languageId=${languageId}&imageNotreEquipeId=${imageNotreEquipeId}`, // Add query parameters to the URL
          method: 'POST',
          data: data,
        }),
        invalidatesTags: [NOTRE_EQUIPE_TAGS[0]], // Invalidate the entire list of notreEquipe
      }),
      // Endpoint to update an existing notreEquipe by ID
      updateNotreEquipe: builder.mutation<NotreEquipe, { id: number; data: Partial<NotreEquipe> }>({
        query: ({ id, data }) => ({
          url: `/notreEquipe/${id}`,
          method: 'PUT',
          data: data,
        }),
        invalidatesTags: [NOTRE_EQUIPE_TAGS[0]], // Invalidate the entire list of notreEquipe
      }),
      // Endpoint to delete a notreEquipe by ID
      deleteNotreEquipe: builder.mutation<void, number>({
        query: (id) => ({
          url: `/notreEquipe/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [NOTRE_EQUIPE_TAGS[0]], // Invalidate the entire list of notreEquipe
      }),
    }),
    overrideExisting: false,
  });

// Export hooks generated by createApi for each endpoint
export const {
  useGetAllNotreEquipeQuery,
  useGetNotreEquipeByIdQuery,
  useCreateNotreEquipeMutation,
  useUpdateNotreEquipeMutation,
  useDeleteNotreEquipeMutation,
} = notreEquipeApiSlice;

// Default export for the slice
export default notreEquipeApiSlice;
