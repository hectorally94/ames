import apiServices from "../../common/apiServices";

// Define interfaces for Welcomes and WelcomesDto
export interface Welcomes {
  id: number;
  title: string;
  description: any;
}

export interface WelcomesDto {
  id: number;
  title: string;
  description: any;
  languageId: number;
  languageName: string;
}

// Define the tag types
export const WELCOMES_TAGS = ['Welcomes'] as const;

// Enhance the API service with additional tag types
const welcomesApiSlice = apiServices
  .enhanceEndpoints({
    addTagTypes: WELCOMES_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      // Endpoint to fetch all welcomes
      getAllWelcomes: builder.query<Welcomes[], string>({
        query: (languageName) => ({
          url: `/welcomesAllFilter`,
          method: 'GET',
          params: { languageName }, // Pass the languageName as a query parameter
        }),
        providesTags: [WELCOMES_TAGS[0]], // Tag for the list of welcomes
      }),
    }),
    overrideExisting: false,
  });

// Export hooks generated by createApi for each endpoint
export const {
  useGetAllWelcomesQuery
} = welcomesApiSlice;

// Default export for the slice
export default welcomesApiSlice;
