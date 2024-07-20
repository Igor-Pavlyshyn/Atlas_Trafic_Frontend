import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query/react";
import { IResponseCars, IResponseScores } from "../../utils/apiTypes";

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
    const refreshResult: any = await baseQueryWithToken(
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

    console.log("refreshResult", refreshResult);
    if (refreshResult.data) {
      localStorage.removeItem("access");
      localStorage.setItem("access", refreshResult.data.access);

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
    scoresEvents: builder.mutation<any, string>({
      query: (id) => ({
        url: `app/intersections/${id}/events/`,
        method: "POST",
        body: {
          accident_rate: 1,
          near_misses: 3,
          speeding: 5,
          traffic_violations: {
            tailgating: 2,
            red_light_running: 1,
            distracted_driving: 4,
            changing_lanes: 3,
          },
          pedestrian_incidents: {
            no_crosswalk_sign: 1,
            near_miss: 2,
            aggressive_behavior: 3,
          },
          damaged_disabled_vehicle: {
            stuck_in_lane: 2,
            broken_down_intersection: 1,
            broken_down_side: 1,
          },
          congestion_level: 55,
          average_traffic_speed: {
            avg_speed: 45,
            min_speed_limit: 50,
            max_speed_limit: 60,
          },
          traffic_volume: 2100,
          signal_timing_efficiency: 40,
          pedestrian_wait_time: 40,
          is_near_school: true,
          is_school_hours: true,
          micro_mobility_wait_time: 60,
          vehicle_emissions: 35,
          fuel_consumption: 45,
          noise_pollution: 80,
          air_quality_index: 150,
          driving_conditions: {
            visibility: 0.3,
            weather: "rain",
          },
          fire_detection: 1,
        },
      }),
    }),
    carsEvent: builder.mutation<any, string>({
      query: (id) => ({
        url: `app/intersections/${id}/cars/`,
        method: "POST",
        body: {
          Passenger_Vehicle: 2,
          Heavy_Truck: 3,
          Public_Transportation: 1,
          Pedestrian: 4,
          Micromobility_User: 1,
        },
      }),
    }),
    cars: builder.query<IResponseCars, { id: string; part: number }>({
      query: ({ id, part }) => `app/intersections/${id}/cars/${part}`,
    }),
  }),
});

export const {
  useScoresQuery,
  useScoresEventsMutation,
  useCarsEventMutation,
  useCarsQuery,
} = homeApi;
