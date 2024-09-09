import apiServices from "../../common/apiServices";
 import { Language as LinkInstagram } from "../../components/amesComponents/language/Model";

// Define the tag types
export const LinkInstagram_TAGS = ['LinkInstagram'] as const;

// Enhance the API service with additional tag types
const linkInstagramApiSlice = apiServices
  .enhanceEndpoints({
    addTagTypes: LinkInstagram_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      // Endpoint to fetch all linkInstagram
      getAlllinkInstagram: builder.query<LinkInstagram[], void>({
        query: () => ({
          url: '/linkInstagramAll',
          method: 'GET',
        }),
        providesTags: [LinkInstagram_TAGS[0]], // Tag for the list of linkInstagram
      }),
      // Endpoint to fetch a single LinkInstagram by ID
      getLinkInstagramById: builder.query<LinkInstagram, string>({
        query: (id) => ({
          url: `/linkInstagram/${id}`,
          method: 'GET',
        }),
        providesTags: (result, error, id) => [{ type: LinkInstagram_TAGS[0], id }], // Tag for individual LinkInstagram
      }),
      // Endpoint to create a new LinkInstagram
      createLinkInstagram: builder.mutation<LinkInstagram, Partial<LinkInstagram>>({
        query: (newLinkInstagram) => ({
          url: '/linkInstagram',
          method: 'POST',
          data: newLinkInstagram,
        }),
        invalidatesTags: [LinkInstagram_TAGS[0]], // Invalidate the entire list of linkInstagram
      }),
      // Endpoint to update an existing LinkInstagram
      updateLinkInstagram: builder.mutation<LinkInstagram, { id: any; name: any }>({
        query: ({ id, ...patch }) => ({
          url: `/linkInstagram/${id}`,
          method: 'PUT',
          data: patch,
        }),
        invalidatesTags: [LinkInstagram_TAGS[0]], // Invalidate the entire list of linkInstagram
      }),
      // Endpoint to delete a LinkInstagram by ID
      deleteLinkInstagram: builder.mutation<void, any>({
        query: (id) => ({
          url: `/linkInstagram/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [LinkInstagram_TAGS[0]], // Invalidate the entire list of linkInstagram
      }),
    }),
    overrideExisting: false,
  });

export const {
  useGetAlllinkInstagramQuery,
  useGetLinkInstagramByIdQuery,
  useCreateLinkInstagramMutation,
  useUpdateLinkInstagramMutation,
  useDeleteLinkInstagramMutation,
} = linkInstagramApiSlice;

export default linkInstagramApiSlice;
