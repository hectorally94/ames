import apiServices from "../../common/apiServices";

// Define the interface for Blog
export interface Blog {
  id: number;
  title: string;
  objectif: string;
  recolte: string;
  description: string;
  date:string;
}

interface PaginatedResponse<T> {
  data: T[];
  currentPage: number;
  totalItems: number;
  totalPages: number;
}
// Define the interface for BlogDto
export interface BlogDto {
  id: number;
  title: string;
  objectif: string;
  recolte: string;
  description: string;
  date:string;

  categoryBlogTranslateId: number;
  categoryBlogTranslate: string;

  clanguageId: number;
  clanguageName: string;

  storeImageId: number;
  storeImageName: string;
  storeImageType: string;
   imagedata: any;
}

// Define the tag types
export const BLOG_TAGS = ['Blogs'] as const;

// Enhance the API service with additional tag types
const blogsApiSlice = apiServices
  .enhanceEndpoints({
    addTagTypes: BLOG_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      // Endpoint to fetch all blogs
      getAllBlogs: builder.query<BlogDto[], void>({
        query: () => ({
          url: '/blogsAll',
          method: 'GET',
        }),
        providesTags: [BLOG_TAGS[0]], // Tag for the list of blogs
      }),
       // Endpoint to fetch paginated actions with optional title filtering
    getPaginatedBlog: builder.query<PaginatedResponse<BlogDto>, { title?: string; page?: number; size?: number; sort?: string }>({
      query: ({ title = '', page = 0, size = 2, sort = 'id,desc' }) => ({
        url: '/blogsAllPageByTitle',
        params: { title, page, size, sort },
        method: 'GET',
      }),
      providesTags: [BLOG_TAGS[0]], // Tag for the list of actions
    }),
      // Endpoint to fetch a single blog by ID
      getBlogById: builder.query<Blog, number>({
        query: (id) => ({
          url: `/blogs/${id}`,
          method: 'GET',
        }),
        providesTags: (result, error, id) => [{ type: BLOG_TAGS[0], id }], // Tag for individual blog
      }),
      // Endpoint to fetch blogs with pagination
      getBlogsPage: builder.query<BlogDto[], { page: number; size: number }>({
        query: ({ page, size }) => ({
          url: `/blogsPage?page=${page}&size=${size}`,
          method: 'GET',
        }),
        providesTags: [BLOG_TAGS[0]], // Tag for paginated blogs
      }),
      // Endpoint to create a new blog
      createBlog: builder.mutation<Blog, { 
         categoryTranslateId: any;
        storeImageId: any;
        data: Partial<Blog>
      }>({
        query: ({categoryTranslateId, storeImageId, data }) => ({
          url: `/${categoryTranslateId}/${storeImageId}/blogs`,
       
          method: 'POST',
          data: data,
        }),
        invalidatesTags: [BLOG_TAGS[0]], // Invalidate the entire list of blogs
      }),
      // Endpoint to update an existing blog
      updateBlog: builder.mutation<Blog, { id: any; data: Partial<Blog> }>({
        query: ({ id, data }) => ({
          url: `/blogs/${id}`,
          method: 'PUT',
          data: data,
        }),
        invalidatesTags: [BLOG_TAGS[0]], // Invalidate the entire list of blogs
      }),
      // Endpoint to delete a blog by ID
      deleteBlog: builder.mutation<void, number>({
        query: (id) => ({
          url: `/deleteBlogs/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [BLOG_TAGS[0]], // Invalidate the entire list of blogs
      }),
    }),
    overrideExisting: false,
  });

// Export hooks generated by createApi for each endpoint
export const {
  useGetPaginatedBlogQuery,
  useGetAllBlogsQuery,
  useGetBlogByIdQuery,
  useGetBlogsPageQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogsApiSlice;

// Default export for the slice
export default blogsApiSlice;
