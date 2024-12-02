import apiServices from "../../common/apiServices";

// Define the interface for Histoire Success
export interface HistoireSuccess {
  id: number;
  title: string;
  description: any;
}

// Define the DTO interface for Histoire Success
export interface HistoireSuccessDto {
  id: number;
  title: string;
  description: any;
  languageId: number;
  languageName: string;
}

// Define the tag types
export const HISTOIRE_SUCCESS_TAGS = ['HistoireSuccess'] as const;

// Enhance the API service with additional tag types
const histoireSuccessApiSlice = apiServices
  .enhanceEndpoints({
    addTagTypes: HISTOIRE_SUCCESS_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      // Endpoint to fetch all histoire successes
      getAllHistoireSuccess: builder.query<HistoireSuccess[], string>({
        query: (languageName) => ({
          url: `/histoire-successAllFilter`,
          method: 'GET',
          params: { languageName }, // Pass the languageName as a query parameter
        }),
        providesTags: [HISTOIRE_SUCCESS_TAGS[0]], // Tag for the list of histoire successes
      }),
    }),
    overrideExisting: false,
  });

// Export hooks generated by createApi for each endpoint
export const {
  useGetAllHistoireSuccessQuery,
} = histoireSuccessApiSlice;

// Default export for the slice
export default histoireSuccessApiSlice;
