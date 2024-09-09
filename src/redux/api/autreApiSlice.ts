import apiServices from "../../common/apiServices";

export interface TypeAutre {
    id: any | null; // id can be a string or null
    name: any;
  }
// Define the tag types
export const AUTRE_TAGS = ['TypeAutre'] as const;

// Enhance the API service with additional tag types
const autreApiSlice = apiServices
  .enhanceEndpoints({
    addTagTypes: AUTRE_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      // Endpoint to fetch all TypeAutres
      getAllTypeAutres: builder.query<TypeAutre[], void>({
        query: () => ({
          url: '/TypeAutreAll',
          method: 'GET',
        }),
        providesTags: [AUTRE_TAGS[0]], // Tag for the list of TypeAutres
      }),
      // Endpoint to fetch a single TypeAutre by ID
      getTypeAutreById: builder.query<TypeAutre, string>({
        query: (id) => ({
          url: `/TypeAutre/${id}`,
          method: 'GET',
        }),
        providesTags: (result, error, id) => [{ type: AUTRE_TAGS[0], id }], // Tag for individual TypeAutre
      }),
      // Endpoint to create a new TypeAutre
      createTypeAutre: builder.mutation<TypeAutre, Partial<TypeAutre>>({
        query: (newTypeAutre) => ({
          url: '/TypeAutre',
          method: 'POST',
          data: newTypeAutre,
        }),
        invalidatesTags: [AUTRE_TAGS[0]], // Invalidate the entire list of TypeAutres
      }),
      // Endpoint to update an existing TypeAutre
      updateTypeAutre: builder.mutation<TypeAutre, { id: any; name: any }>({
        query: ({ id, ...patch }) => ({
          url: `/TypeAutre/${id}`,
          method: 'PUT',
          data: patch,
        }),
        invalidatesTags: [AUTRE_TAGS[0]], // Invalidate the entire list of TypeAutres
      }),
      // Endpoint to delete a TypeAutre by ID
      deleteTypeAutre: builder.mutation<void, any>({
        query: (id) => ({
          url: `/TypeAutre/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [AUTRE_TAGS[0]], // Invalidate the entire list of TypeAutres
      }),
    }),
    overrideExisting: false,
  });

export const {
  useGetAllTypeAutresQuery,
  useGetTypeAutreByIdQuery,
  useCreateTypeAutreMutation,
  useUpdateTypeAutreMutation,
  useDeleteTypeAutreMutation,
} = autreApiSlice;

export default autreApiSlice;
