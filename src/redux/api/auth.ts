import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  RootState,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { IAuthBody } from "../../utils/types";

const baseUrl = process.env.REACT_DEFAULT_API;

interface IAuthRequest {
  url: string;
  method: "POST" | "GET" | "PUT" | "DELETE";
  body: IAuthBody;
}

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      headers.set("authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshToken = localStorage.getItem("refresh");
    if (refreshToken) {
      const refreshResult = await baseQuery(
        {
          url: "token/refresh/",
          method: "POST",
          body: { refresh: refreshToken },
        },
        api,
        extraOptions
      );

      if (refreshResult.data) {
        const newAccessToken = (refreshResult.data as any).access;
        localStorage.setItem("access", newAccessToken);
        api.dispatch(
          await baseQuery(
            {
              url: "token/refresh/",
              method: "POST",
              body: { refresh: refreshToken },
            },
            api,
            extraOptions
          )
        );

        result = await baseQuery(args, api, extraOptions);
      } else {
        console.log("logout");
      }
    } else {
      console.log("logout");
    }
  }
  return result;
};

export const authApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    auth: builder.mutation<IAuthBody, IAuthRequest>({
      query: ({ url, method, body }) => ({
        url: `user/${url}`,
        method,
        body,
      }),
    }),
    logout: builder.mutation<any, any>({
      query: ({ refresh }) => ({
        url: "user/logout/",
        headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
        method: "POST",
        body: {
          refresh_token: refresh,
        },
      }),
    }),
  }),
});

export const { useAuthMutation, useLogoutMutation } = authApi;
