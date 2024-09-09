import apiServices from "../../common/apiServices";
import { Language as LinkFaceBook } from "../../components/amesComponents/language/Model";
 

// Define the tag types
export const LinkFaceBook_TAGS = ['LinkFaceBook'] as const;

// Enhance the API service with additional tag types
const linkFaceApiSlice = apiServices
  .enhanceEndpoints({
    addTagTypes: LinkFaceBook_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      // Endpoint to fetch all LinkFaceBooks
      getAllLinkFaceBooks: builder.query<LinkFaceBook[], void>({
        query: () => ({
          url: '/linkFaceBookAll',
          method: 'GET',
        }),
        providesTags: [LinkFaceBook_TAGS[0]], // Tag for the list of LinkFaceBooks
      }),
      // Endpoint to fetch a single LinkFaceBook by ID
      getLinkFaceBookById: builder.query<LinkFaceBook, string>({
        query: (id) => ({
          url: `/linkFaceBook/${id}`,
          method: 'GET',
        }),
        providesTags: (result, error, id) => [{ type: LinkFaceBook_TAGS[0], id }], // Tag for individual LinkFaceBook
      }),
      // Endpoint to create a new LinkFaceBook
      createLinkFaceBook: builder.mutation<LinkFaceBook, Partial<LinkFaceBook>>({
        query: (newLinkFaceBook) => ({
          url: '/linkFaceBook',
          method: 'POST',
          data: newLinkFaceBook,
        }),
        invalidatesTags: [LinkFaceBook_TAGS[0]], // Invalidate the entire list of LinkFaceBooks
      }),
      // Endpoint to update an existing LinkFaceBook
      updateLinkFaceBook: builder.mutation<LinkFaceBook, { id: any; name: any }>({
        query: ({ id, ...patch }) => ({
          url: `/linkFaceBook/${id}`,
          method: 'PUT',
          data: patch,
        }),
        invalidatesTags: [LinkFaceBook_TAGS[0]], // Invalidate the entire list of LinkFaceBooks
      }),
      // Endpoint to delete a LinkFaceBook by ID
      deleteLinkFaceBook: builder.mutation<void, any>({
        query: (id) => ({
          url: `/linkFaceBook/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [LinkFaceBook_TAGS[0]], // Invalidate the entire list of LinkFaceBooks
      }),
    }),
    overrideExisting: false,
  });

export const {
  useGetAllLinkFaceBooksQuery,
  useGetLinkFaceBookByIdQuery,
  useCreateLinkFaceBookMutation,
  useUpdateLinkFaceBookMutation,
  useDeleteLinkFaceBookMutation,
} = linkFaceApiSlice;

export default linkFaceApiSlice;
