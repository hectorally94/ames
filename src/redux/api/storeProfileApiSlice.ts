import { imgApiServices } from "../../common/imgApiServices";

export interface image_profilesimages {
  file: any; // FormData Changed to hold image data as a file
}
export interface Images {
  id: any; 
  name: any; 
  type: any; 
  imagedata: any; 
}
// Define the tag types 
export const image_profilesimages_TAGS = ['image_profilesimages'] as const;

// Enhance the API service with additional tag types
const storeProfileApiSlice = imgApiServices
  .enhanceEndpoints({
    addTagTypes: image_profilesimages_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      // Endpoint to fetch all image_profilesimages
      getAllImage_profilesimages: builder.query<Images[], void>({
        query: () => ({
          url: '/image_profilesimages',
          method: 'GET',
        }),
        providesTags: [image_profilesimages_TAGS[0]], // Tag for the list of image_profilesimages
      }),
         // Endpoint to fetch all image_profilesimages
         getAllImage_profilesimagesAll: builder.query<Images[], void>({
          query: () => ({
            url: '/image_profilesimagesAll',
            method: 'GET',
          }),
          providesTags: [image_profilesimages_TAGS[0]], // Tag for the list of image_profilesimages
        }),
      // Endpoint to fetch a single image_profilesimages by ID
      getImage_profilesimagesById: builder.query<image_profilesimages, string>({
        query: (id) => ({
          url: `/image_profilesimages/${id}`,
          method: 'GET',
        }),
        providesTags: (_result, _error, id) => [{ type: image_profilesimages_TAGS[0], id }], // Tag for individual image_profilesimages
      }),
     // Endpoint to create a  new image_profilesimages
     CreateImage_profilesimages: builder.mutation<image_profilesimages, FormData>({
      query: (formData) => ({
        url: '/image_profilesimages',
        method: 'POST',
        data: formData, // Make sure 'data' is a FormData object
      }),
  invalidatesTags: [image_profilesimages_TAGS[0]], // Invalidate the entire list of image_profilesimages
}),
 // Endpoint to update an existing image_profilesimages
 updateImage_profilesimages: builder.mutation<image_profilesimages, { id: any; formData: FormData }>({
  query: ({ id, formData }) => ({
    url: `/image_profilesimages/${id}`,
    method: 'PUT',
    data: formData, // Send the FormData object
  }),
        invalidatesTags: [image_profilesimages_TAGS[0]], // Invalidate the entire list of image_profilesimages
      }),
      // Endpoint to delete a image_profilesimages by ID
      deleteImage_profilesimages: builder.mutation<void, any>({
        query: (id) => ({
          url: `/image_profilesimages/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: [image_profilesimages_TAGS[0]], // Invalidate the entire list of image_profilesimages
      }),
    }),
    overrideExisting: false,
  });

export const {
  useGetAllImage_profilesimagesQuery,
  useGetAllImage_profilesimagesAllQuery,
  useGetImage_profilesimagesByIdQuery,
  useCreateImage_profilesimagesMutation,
  useUpdateImage_profilesimagesMutation,
  useDeleteImage_profilesimagesMutation,
} = storeProfileApiSlice;

export default storeProfileApiSlice;
