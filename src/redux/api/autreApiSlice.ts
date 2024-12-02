import apiServices from "../../common/apiServices";

export interface TypeAutre {
    id: any | null; // id can be a string or null
    name: any;
  }
// Define the tag types
export const AUTRE_TAGS = ['TypeAutre'] as const;

// Enhance the API service with additional tag types
const autreApiSlice = apiServices
  .enhanceEndpoints({
    addTagTypes: AUTRE_TAGS,
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      // Endpoint to fetch all TypeAutres
      getAllTypeAutres: builder.query<TypeAutre[], string>({
        query: (languageName) => ({
          url: `/type_autre_infoDtoAll`,
          method: 'GET',
          params: { languageName }, // Pass the languageName as a query parameter
        }),
        providesTags: [AUTRE_TAGS[0]], // Tag for the list of TypeAutres
      }),
    }),
    overrideExisting: false,
  });

export const {
  useGetAllTypeAutresQuery,
} = autreApiSlice;

export default autreApiSlice;
