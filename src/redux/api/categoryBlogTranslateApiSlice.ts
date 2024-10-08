import apiServices from "../../common/apiServices";

// Define the interfaces for CategoryBlogTranslate and CategoryBlogTranslateDto
export interface CategoryBlogTranslate {
  id: number;
  categoryBlogTranslate: string;
}

export interface CategoryBlogTranslateDto {
  id: number;
  categoryBlogTranslate: string;
  languageId: number;
  languageName: string;
}

// Define the tag types
export const CATEGORY_BLOG_TRANSLATE_TAGS = ['CategoryBlogTranslate'] as const;

// Enhance the API service with additional tag types
const categoryBlogTranslateApiSlice = apiServices
  .enhanceEndpoints({
    addTagTypes: CATEGORY_BLOG_TRANSLATE_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      // Endpoint to fetch all category blog translates
      getAllCategoryBlogTranslates: builder.query<CategoryBlogTranslate[], void>({
        query: () => ({
          url: '/category-blog-translates',
          method: 'GET',
        }),
        providesTags: [CATEGORY_BLOG_TRANSLATE_TAGS[0]], // Tag for the list of category blog translates
      }),
      // Endpoint to fetch a specific category blog translate by ID
      getCategoryBlogTranslateById: builder.query<CategoryBlogTranslate, number>({
        query: (id) => ({
          url: `/category-blog-translates/${id}`,
          method: 'GET',
        }),
        providesTags: (result, error, id) => [{ type: CATEGORY_BLOG_TRANSLATE_TAGS[0], id }], // Tag for individual category blog translate
      }),
      // Endpoint to fetch all category blog translates DTOs
      getAllCategoryBlogTranslateDtos: builder.query<CategoryBlogTranslateDto[], void>({
        query: () => ({
          url: '/category-blog-translatesDtoAll',
          method: 'GET',
        }),
        providesTags: [CATEGORY_BLOG_TRANSLATE_TAGS[0]], // Tag for the list of category blog translate DTOs
      }),
      // Endpoint to fetch all category blog translates (with language information)
      getAllCategoryBlogTranslatesAll: builder.query<CategoryBlogTranslateDto[], void>({
        query: () => ({
          url: '/category-blog-translatesAll',
          method: 'GET',
        }),
        providesTags: [CATEGORY_BLOG_TRANSLATE_TAGS[0]], // Tag for the list of all category blog translates
      }),
      // Endpoint to create a new category blog translate
      createCategoryBlogTranslate: builder.mutation<CategoryBlogTranslate, { languageId: number; data: CategoryBlogTranslate }>({
        query: ({ languageId, data }) => ({
          url: `/${languageId}/category-blog-translates`,
          method: 'POST',
          data: data,
        }),
        invalidatesTags: [CATEGORY_BLOG_TRANSLATE_TAGS[0]], // Invalidate the entire list of category blog translates
      }),
      // Endpoint to update an existing category blog translate by ID
      updateCategoryBlogTranslate: builder.mutation<CategoryBlogTranslate, { id: number; data: Partial<CategoryBlogTranslate> }>({
        query: ({ id, data }) => ({
          url: `/category-blog-translates/${id}`,
          method: 'PUT',
          data: data,
        }),
        invalidatesTags: [CATEGORY_BLOG_TRANSLATE_TAGS[0]], // Invalidate the entire list of category blog translates
      }),
      // Endpoint to delete a category blog translate by ID
      deleteCategoryBlogTranslate: builder.mutation<void, number>({
        query: (id) => ({
          url: `/category-blog-translates/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [CATEGORY_BLOG_TRANSLATE_TAGS[0]], // Invalidate the entire list of category blog translates
      }),
    }),
    overrideExisting: false,
  });

// Export hooks generated by createApi for each endpoint
export const {
  useGetAllCategoryBlogTranslatesQuery,
  useGetCategoryBlogTranslateByIdQuery,
  useGetAllCategoryBlogTranslateDtosQuery,
  useGetAllCategoryBlogTranslatesAllQuery,
  useCreateCategoryBlogTranslateMutation,
  useUpdateCategoryBlogTranslateMutation,
  useDeleteCategoryBlogTranslateMutation,
} = categoryBlogTranslateApiSlice;

// Default export for the slice
export default categoryBlogTranslateApiSlice;
