import { imgApiServices } from "../../common/imgApiServices";

export interface Image_partenaireimages {
  file: any; // FormData Changed to hold image data as a file
}
export interface Images {
  id: any; 
  name: any; 
  type: any; 
  imagedata: any; 
}
// Define the tag types image_profilesimages
export const Image_partenaireimages_TAGS = ['Image_partenaireimages'] as const;

// Enhance the API service with additional tag types
const storePartenaireApiSlice = imgApiServices
  .enhanceEndpoints({
    addTagTypes: Image_partenaireimages_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      // Endpoint to fetch all image_partenaireimages
      getAllImage_partenaireimages: builder.query<Images[], void>({
        query: () => ({
          url: '/image_partenaireimages',
          method: 'GET',
        }),
        providesTags: [Image_partenaireimages_TAGS[0]], // Tag for the list of image_partenaireimages
      }),
         // Endpoint to fetch all image_partenaireimages
         getAllImage_partenaireimagesAll: builder.query<Images[], void>({
          query: () => ({
            url: '/image_partenaireimagesAll',
            method: 'GET',
          }),
          providesTags: [Image_partenaireimages_TAGS[0]], // Tag for the list of image_partenaireimages
        }),
      // Endpoint to fetch a single Image_partenaireimages by ID
      getImage_partenaireimagesById: builder.query<Image_partenaireimages, string>({
        query: (id) => ({
          url: `/image_partenaireimages/${id}`,
          method: 'GET',
        }),
        providesTags: (_result, _error, id) => [{ type: Image_partenaireimages_TAGS[0], id }], // Tag for individual Image_partenaireimages
      }),
     // Endpoint to create a  new Image_partenaireimages
     CreateImage_partenaireimages: builder.mutation<Image_partenaireimages, FormData>({
      query: (formData) => ({
        url: '/image_partenaireimages',
        method: 'POST',
        data: formData, // Make sure 'data' is a FormData object
      }),
  invalidatesTags: [Image_partenaireimages_TAGS[0]], // Invalidate the entire list of image_partenaireimages
}),
 // Endpoint to update an existing Image_partenaireimages
 updateImage_partenaireimages: builder.mutation<Image_partenaireimages, { id: any; formData: FormData }>({
  query: ({ id, formData }) => ({
    url: `/image_partenaireimages/${id}`,
    method: 'PUT',
    data: formData, // Send the FormData object
  }),
        invalidatesTags: [Image_partenaireimages_TAGS[0]], // Invalidate the entire list of image_partenaireimages
      }),
      // Endpoint to delete a Image_partenaireimages by ID
      deleteImage_partenaireimages: builder.mutation<void, any>({
        query: (id) => ({
          url: `/image_partenaireimages/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [Image_partenaireimages_TAGS[0]], // Invalidate the entire list of image_partenaireimages
      }),
    }),
    overrideExisting: false,
  });

export const {
  useGetAllImage_partenaireimagesQuery,
  useGetAllImage_partenaireimagesAllQuery,
  useGetImage_partenaireimagesByIdQuery,
  useCreateImage_partenaireimagesMutation,
  useUpdateImage_partenaireimagesMutation,
  useDeleteImage_partenaireimagesMutation,
} = storePartenaireApiSlice;

export default storePartenaireApiSlice;
