import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query/react";
import {
  IRequestClassificationChart,
  IResponseCars,
  IResponseClassificationChart,
  IResponseScores,
} from "../../utils/apiTypes";

interface IRefreshTokenResponse {
  access: string;
}

const baseUrl = process.env.REACT_DEFAULT_API;

const baseQueryWithToken = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("access");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  {},
  FetchBaseQueryMeta
> = async (arg, api, extraOptions) => {
  let result = await baseQueryWithToken(arg, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQueryWithToken(
      {
        url: "user/token/refresh/",
        method: "POST",
        body: {
          refresh: localStorage.getItem("refresh"),
        },
      },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      const refreshData = refreshResult.data as IRefreshTokenResponse;
      localStorage.removeItem("access");
      localStorage.setItem("access", refreshData.access);

      result = await baseQueryWithToken(arg, api, extraOptions);
    } else {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      window.location.href = "/signIn";
      await baseQueryWithToken(
        {
          url: "user/logout/",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
          body: {
            refresh_token: localStorage.getItem("refresh"),
          },
        },
        api,
        extraOptions
      );
      result = await baseQueryWithToken(arg, api, extraOptions);
    }
  }
  return result;
};

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    scores: builder.query<IResponseScores, string>({
      query: (id) => `app/intersections/${id}/`,
    }),
    cars: builder.query<IResponseCars, { id: string; part: number }>({
      query: ({ id, part }) => `app/intersections/${id}/cars/${part}`,
    }),
    classifications: builder.query<string[], number>({
      query: (id) => `app/intersections/${id}/classifications/`,
    }),
    classificationChart: builder.query<
      IResponseClassificationChart,
      IRequestClassificationChart
    >({
      query: ({ id, part, classification }) =>
        `app/intersections/${id}/classifications/${classification}/${part}/`,
    }),
  }),
});

export const {
  useScoresQuery,
  useCarsQuery,
  useClassificationsQuery,
  useClassificationChartQuery,
} = homeApi;
