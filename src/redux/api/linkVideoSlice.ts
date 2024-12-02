import apiServices from "../../common/apiServices";
import { Language as LinkVideos } from "../languageSlice";
 
// Define the tag types
export const LinkVideos_TAGS = ['LinkVideos'] as const;

// Enhance the API service with additional tag types
const linkVideoSlice = apiServices
  .enhanceEndpoints({
    addTagTypes: LinkVideos_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      // Endpoint to fetch all linkVideos
      getAlllinkVideos: builder.query<LinkVideos[], void>({
        query: () => ({
          url: '/linkVideosAll',
          method: 'GET',
        }),
        providesTags: [LinkVideos_TAGS[0]], // Tag for the list of linkVideos
      }),
      // Endpoint to fetch a single LinkVideos by ID
      getLinkVideosById: builder.query<LinkVideos, string>({
        query: (id) => ({
          url: `/linkVideos/${id}`,
          method: 'GET',
        }),
        providesTags: (_result, _error, id) => [{ type: LinkVideos_TAGS[0], id }], // Tag for individual LinkVideos
      }),
      // Endpoint to create a new LinkVideos
      createLinkVideos: builder.mutation<LinkVideos, Partial<LinkVideos>>({
        query: (newLinkVideos) => ({
          url: '/linkVideos',
          method: 'POST',
          data: newLinkVideos,
        }),
        invalidatesTags: [LinkVideos_TAGS[0]], // Invalidate the entire list of linkVideos
      }),
      // Endpoint to update an existing LinkVideos
      updateLinkVideos: builder.mutation<LinkVideos, { id: any; name: any }>({
        query: ({ id, ...patch }) => ({
          url: `/linkVideos/${id}`,
          method: 'PUT',
          data: patch,
        }),
        invalidatesTags: [LinkVideos_TAGS[0]], // Invalidate the entire list of linkVideos
      }),
      // Endpoint to delete a LinkVideos by ID
      deleteLinkVideos: builder.mutation<void, any>({
        query: (id) => ({
          url: `/linkVideos/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [LinkVideos_TAGS[0]], // Invalidate the entire list of linkVideos
      }),
    }),
    overrideExisting: false,
  });

export const {
  useGetAlllinkVideosQuery,
  useGetLinkVideosByIdQuery,
  useCreateLinkVideosMutation,
  useUpdateLinkVideosMutation,
  useDeleteLinkVideosMutation,
} = linkVideoSlice;

export default linkVideoSlice;
