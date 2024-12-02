import apiServices from "../../common/apiServices";

// Define the interface for CategoryActionTranslate
export interface CategoryActionTranslate {
  id: number;
  categoryTranslate: string;
}

// Define the DTO interface for CategoryActionTranslate
export interface CategoryActionTranslateDto {
  id: number;
  categoryTranslate: string;
  languageId: number;
  languageName: string;
}


// Define the interfaces for Event and related types
interface PaginatedResponse<T> {
  data: T[];
  currentPage: number;
  totalItems: number;
  totalPages: number;
}
// Define the tag types
export const CATEGORY_ACTION_TRANSLATE_TAGS = ['CategoryActionTranslate'] as const;

// Enhance the API service with additional tag types
const categoryActionTranslateApiSlice = apiServices
  .enhanceEndpoints({
    addTagTypes: CATEGORY_ACTION_TRANSLATE_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
       // Endpoint to fetch paginated actions with optional title filtering
       getAllCategoryActionTranslates: builder.query<PaginatedResponse<CategoryActionTranslateDto>, { name?: string; page?: number; size?: number; sort?: string }>({
      query: ({ name = '', page = 0, size = 15, sort = 'id,desc' }) => ({
        url: '/category_action_translateDtoAll',
        params: { name, page, size, sort },
        method: 'GET',
      }),
      providesTags: [CATEGORY_ACTION_TRANSLATE_TAGS[0]], // Tag for the list of category action translates
    }), 
      // Endpoint to fetch a specific category action translate by ID
      getCategoryActionTranslateById: builder.query<CategoryActionTranslate, number>({
        query: (id) => ({
          url: `/category_action_translate/${id}`,
          method: 'GET',
        }),
        providesTags: (_result, _error, id) => [{ type: CATEGORY_ACTION_TRANSLATE_TAGS[0], id }], // Tag for individual category action translate
      }),
      // Endpoint to create a new category action translate
      createCategoryActionTranslate: builder.mutation<CategoryActionTranslate, { languageId: number; categoryActionTranslate: CategoryActionTranslate }>({
        query: ({ languageId, categoryActionTranslate }) => ({
          url: `/${languageId}/category_action_translate`,
          method: 'POST',
          data: categoryActionTranslate,
        }),
        invalidatesTags: [CATEGORY_ACTION_TRANSLATE_TAGS[0]], // Invalidate the entire list of category action translates
      }),
      // Endpoint to update an existing category action translate by ID
      updateCategoryActionTranslate: builder.mutation<CategoryActionTranslate, { id: number; data: Partial<CategoryActionTranslate> }>({
        query: ({ id, data }) => ({
          url: `/category_action_translate/${id}`,
          method: 'PUT',
          data: data,
        }),
        invalidatesTags: [CATEGORY_ACTION_TRANSLATE_TAGS[0]], // Invalidate the entire list of category action translates
      }),
      // Endpoint to delete a category action translate by ID
      deleteCategoryActionTranslate: builder.mutation<void, number>({
        query: (id) => ({
          url: `/category_action_translate/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [CATEGORY_ACTION_TRANSLATE_TAGS[0]], // Invalidate the entire list of category action translates
      }),
      // Endpoint to fetch all category action translate DTOs
      getAllCategoryActionTranslateDtos: builder.query<CategoryActionTranslateDto[], void>({
        query: () => ({
          url: '/category_action_translateDtoAll',
          method: 'GET',
        }),
        providesTags: [CATEGORY_ACTION_TRANSLATE_TAGS[0]], // Tag for the list of category action translate DTOs
      }),
      // Endpoint to fetch all category action translate DTOs (alternative route)
      getAllCategoryActionTranslateAll: builder.query<CategoryActionTranslateDto[], void>({
        query: () => ({
          url: '/category_action_translateAll',
          method: 'GET',
        }),
        providesTags: [CATEGORY_ACTION_TRANSLATE_TAGS[0]], // Tag for the list of category action translate DTOs (alternative route)
      }),
    }),
    overrideExisting: false,
  });

// Export hooks generated by createApi for each endpoint
export const {
  useGetAllCategoryActionTranslatesQuery,
  useGetCategoryActionTranslateByIdQuery,
  useCreateCategoryActionTranslateMutation,
  useUpdateCategoryActionTranslateMutation,
  useDeleteCategoryActionTranslateMutation,
  useGetAllCategoryActionTranslateDtosQuery,
  useGetAllCategoryActionTranslateAllQuery,
} = categoryActionTranslateApiSlice;

// Default export for the slice
export default categoryActionTranslateApiSlice;
