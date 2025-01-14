import apiServices from "../../common/apiServices";

// Define the interface for Contact
export interface Contact {
  id: number;
  fullName: string;
  email: string;
  tel: string;
  sujet: string;
  message: string;
  dateCreated:string;
}

// Define the tag types
export const CONTACTS_TAGS_Mganga = ['Mganga'] as const;

// Enhance the API service with additional tag types
const contactsMgangaApiSlice = apiServices
  .enhanceEndpoints({
    addTagTypes: CONTACTS_TAGS_Mganga,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      // Endpoint to fetch all contacts
      getAllContactsM: builder.query<Contact[], void>({
        query: () => ({
          url: '/contactsMganga',
          method: 'GET',
        }),
        providesTags: [CONTACTS_TAGS_Mganga[0]], // Tag for the list of contacts
      }),
      // Endpoint to fetch a specific contact by ID
      getContactMById: builder.query<Contact, number>({
        query: (id) => ({
          url: `/contactsMganga/${id}`,
          method: 'GET',
        }),
        providesTags: (_result, _error, id) => [{ type: CONTACTS_TAGS_Mganga[0], id }], // Tag for individual contact
      }),
      // Endpoint to create a new contact
      createContactM: builder.mutation<Contact, Omit<Contact, 'id' | 'dateCreated'>>({
        query: (contact) => ({
          url: '/contactsMganga',
          method: 'POST',
          data: contact,
        }),
        invalidatesTags: [CONTACTS_TAGS_Mganga[0]], // Invalidate the entire list of contacts
      }),
      // Endpoint to update an existing contact by ID
      updateContactM: builder.mutation<Contact, { id: number; data: Partial<Contact> }>({
        query: ({ id, data }) => ({
          url: `/contactsMganga/${id}`,
          method: 'PUT',
          data: data,
        }),
        invalidatesTags: [CONTACTS_TAGS_Mganga[0]], // Invalidate the entire list of contacts
      }),
      // Endpoint to delete a contact by ID
      deleteContactM: builder.mutation<void, number>({
        query: (id) => ({
          url: `/contactsMganga/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [CONTACTS_TAGS_Mganga[0]], // Invalidate the entire list of contacts
      }),
    }),
    overrideExisting: false,
  });

// Export hooks generated by createApi for each endpoint
export const {
  useGetAllContactsMQuery,
  useGetContactMByIdQuery,
  useCreateContactMMutation,
  useUpdateContactMMutation,
  useDeleteContactMMutation,
} = contactsMgangaApiSlice;

// Default export for the slice
export default contactsMgangaApiSlice;
