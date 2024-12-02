import apiServices from "../../common/apiServices";

// Define the interface for CategoryEvent
export interface CategoryEvent {
  id: number;
  categoryName: string;
}

// Define the tag types
export const CATEGORY_EVENT_TAGS = ['CategoryEvent'] as const;

// Enhance the API service with additional tag types
const categoryEventApiSlice = apiServices
  .enhanceEndpoints({
    addTagTypes: CATEGORY_EVENT_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      // Endpoint to fetch all category events
      getAllCategoryEvents: builder.query<CategoryEvent[], void>({
        query: () => ({
          url: '/category-events',
          method: 'GET',
        }),
        providesTags: [CATEGORY_EVENT_TAGS[0]], // Tag for the list of category events
      }),
      // Endpoint to fetch a specific category event by ID
      getCategoryEventById: builder.query<CategoryEvent, number>({
        query: (id) => ({
          url: `/category-events/${id}`,
          method: 'GET',
        }),
        providesTags: (_result, _error, id) => [{ type: CATEGORY_EVENT_TAGS[0], id }], // Tag for individual category event
      }),
      // Endpoint to create a new category event
      createCategoryEvent: builder.mutation<CategoryEvent, CategoryEvent>({
        query: (categoryEvent) => ({
          url: '/category-events',
          method: 'POST',
          data: categoryEvent,
        }),
        invalidatesTags: [CATEGORY_EVENT_TAGS[0]], // Invalidate the entire list of category events
      }),
      // Endpoint to update an existing category event by ID
      updateCategoryEvent: builder.mutation<CategoryEvent, { id: number; data: Partial<CategoryEvent> }>({
        query: ({ id, data }) => ({
          url: `/category-events/${id}`,
          method: 'PUT',
          data: data,
        }),
        invalidatesTags: [CATEGORY_EVENT_TAGS[0]], // Invalidate the entire list of category events
      }),
      // Endpoint to delete a category event by ID
      deleteCategoryEvent: builder.mutation<void, number>({
        query: (id) => ({
          url: `/category-events/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [CATEGORY_EVENT_TAGS[0]], // Invalidate the entire list of category events
      }),
    }),
    overrideExisting: false,
  });

// Export hooks generated by createApi for each endpoint
export const {
  useGetAllCategoryEventsQuery,
  useGetCategoryEventByIdQuery,
  useCreateCategoryEventMutation,
  useUpdateCategoryEventMutation,
  useDeleteCategoryEventMutation,
} = categoryEventApiSlice;

// Default export for the slice
export default categoryEventApiSlice;
