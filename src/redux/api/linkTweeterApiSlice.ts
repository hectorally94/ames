import apiServices from "../../common/apiServices";
import { Language as LinkTweeter } from "../languageSlice";

// Define the tag types
export const LinkTweeter_TAGS = ['LinkTweeter'] as const;

// Enhance the API service with additional tag types
const linkTweeterApiSlice = apiServices
  .enhanceEndpoints({
    addTagTypes: LinkTweeter_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      // Endpoint to fetch all linkTweeter
      getAlllinkTweeter: builder.query<LinkTweeter[], void>({
        query: () => ({
          url: '/linkTweeterAll',
          method: 'GET',
        }),
        providesTags: [LinkTweeter_TAGS[0]], // Tag for the list of linkTweeter
      }),
      // Endpoint to fetch a single LinkTweeter by ID
      getLinkTweeterById: builder.query<LinkTweeter, string>({
        query: (id) => ({
          url: `/linkTweeter/${id}`,
          method: 'GET',
        }),
        providesTags: (_result, _error, id) => [{ type: LinkTweeter_TAGS[0], id }], // Tag for individual LinkTweeter
      }),
      // Endpoint to create a new LinkTweeter
      createLinkTweeter: builder.mutation<LinkTweeter, Partial<LinkTweeter>>({
        query: (newLinkTweeter) => ({
          url: '/linkTweeter',
          method: 'POST',
          data: newLinkTweeter,
        }),
        invalidatesTags: [LinkTweeter_TAGS[0]], // Invalidate the entire list of linkTweeter
      }),
      // Endpoint to update an existing LinkTweeter
      updateLinkTweeter: builder.mutation<LinkTweeter, { id: any; name: any }>({
        query: ({ id, ...patch }) => ({
          url: `/linkTweeter/${id}`,
          method: 'PUT',
          data: patch,
        }),
        invalidatesTags: [LinkTweeter_TAGS[0]], // Invalidate the entire list of linkTweeter
      }),
      // Endpoint to delete a LinkTweeter by ID
      deleteLinkTweeter: builder.mutation<void, any>({
        query: (id) => ({
          url: `/linkTweeter/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [LinkTweeter_TAGS[0]], // Invalidate the entire list of linkTweeter
      }),
    }),
    overrideExisting: false,
  });

export const {
  useGetAlllinkTweeterQuery,
  useGetLinkTweeterByIdQuery,
  useCreateLinkTweeterMutation,
  useUpdateLinkTweeterMutation,
  useDeleteLinkTweeterMutation,
} = linkTweeterApiSlice;

export default linkTweeterApiSlice;
