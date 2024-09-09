import apiServices from "../../common/apiServices";

// Define the interface for About Us
export interface AboutUs {
  id: number;
  title: string;
  content: string;
}

// Define the DTO interface for About Us
export interface AboutUsDTO {
  id: number;
  title: string;
  content: string;
  languageId: number;
  languageName: string;
  imageProfileId: number;
  imageData: any; // Use Uint8Array for binary data
}

// Define the tag types
export const ABOUT_US_TAGS = ['AboutUs'] as const;

// Enhance the API service with additional tag types
const aboutUsApiSlice = apiServices
  .enhanceEndpoints({
    addTagTypes: ABOUT_US_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({

    // Query to fetch About Us entries filtered by language
    getAboutUsByLanguage: builder.query<AboutUsDTO[], string>({
      query: (languageName) => ({
        url: `/aboutUsDtoAllFilter`,
        method: 'GET',
        params: { languageName }, // Pass the languageName as a query parameter
      }),
      providesTags: [ABOUT_US_TAGS[0]], // Use appropriate tag for cache invalidation
    }),
  }),
  overrideExisting: false,
});

// Export the new hook
export const { useGetAboutUsByLanguageQuery } = aboutUsApiSlice;
