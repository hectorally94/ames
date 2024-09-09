import { imgApiServices } from "../../common/imgApiServices";

export interface Image_store_images {
  file: any; // FormData Changed to hold image data as a file
}
export interface Images {
  id: any; 
  name: any; 
  type: any; 
  imagedata: any; 
}
// Define the tag types image_profilesimages
export const Image_store_images_TAGS = ['Image_store_images'] as const;

// Enhance the API service with additional tag types
const storeImageApiSlice = imgApiServices
  .enhanceEndpoints({
    addTagTypes: Image_store_images_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      // Endpoint to fetch all Image_store_images
      getAllImage_store_images: builder.query<Images[], void>({
        query: () => ({
          url: '/image_store_images',
          method: 'GET',
        }),
        providesTags: [Image_store_images_TAGS[0]], // Tag for the list of Image_store_images
      }),
         // Endpoint to fetch all Image_store_images
         getAllImage_store_imagesAll: builder.query<Images[], void>({
          query: () => ({
            url: '/image_store_imagesAll',
            method: 'GET',
          }),
          providesTags: [Image_store_images_TAGS[0]], // Tag for the list of Image_store_images
        }),
      // Endpoint to fetch a single Image_store_images by ID
      getImage_store_imagesById: builder.query<Image_store_images, string>({
        query: (id) => ({
          url: `/image_store_images/${id}`,
          method: 'GET',
        }),
        providesTags: (result, error, id) => [{ type: Image_store_images_TAGS[0], id }], // Tag for individual Image_store_images
      }),
     // Endpoint to create a  new Image_store_images
     CreateImage_store_images: builder.mutation<Image_store_images, FormData>({
      query: (formData) => ({
        url: '/image_store_images',
        method: 'POST',
        data: formData, // Make sure 'data' is a FormData object
      }),
  invalidatesTags: [Image_store_images_TAGS[0]], // Invalidate the entire list of Image_store_images
}),
 // Endpoint to update an existing Image_store_images
 updateImage_store_images: builder.mutation<Image_store_images, { id: any; formData: FormData }>({
  query: ({ id, formData }) => ({
    url: `/image_store_images/${id}`,
    method: 'PUT',
    data: formData, // Send the FormData object
  }),
        invalidatesTags: [Image_store_images_TAGS[0]], // Invalidate the entire list of Image_store_images
      }),
      // Endpoint to delete a Image_store_images by ID
      deleteImage_store_images: builder.mutation<void, any>({
        query: (id) => ({
          url: `/image_store_images/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [Image_store_images_TAGS[0]], // Invalidate the entire list of Image_store_images
      }),
    }),
    overrideExisting: false,
  });

export const {
  useGetAllImage_store_imagesQuery,
  useGetAllImage_store_imagesAllQuery,
  useGetImage_store_imagesByIdQuery,
  useCreateImage_store_imagesMutation,
  useUpdateImage_store_imagesMutation,
  useDeleteImage_store_imagesMutation,
} = storeImageApiSlice;

export default storeImageApiSlice;
