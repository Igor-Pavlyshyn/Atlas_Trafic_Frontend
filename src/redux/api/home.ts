import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.REACT_DEFAULT_API;

interface IResponse {
  id: number;
  intersection_id: string;
  coordinates: string;
  condition: string;
  safety_scores?: [
    {
      id: number;
      points: string;
      accident_rate: number;
      near_misses: number;
      speeding: number;
      traffic_violations: number;
      pedestrian_incidents: number;
      damaged_disabled_vehicle: number;
      intersection: number;
    }
  ];
  efficiency_scores: [
    {
      id: number;
      points: string;
      congestion_level: number;
      average_traffic_speed: number;
      traffic_volume: number;
      signal_timing_efficiency: number;
      pedestrian_wait_time: number;
      micro_mobility_wait_time: number;
      intersection: number;
    }
  ];
}

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    scores: builder.query<IResponse, string>({
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
        },
      }),
    }),
  }),
});

export const { useScoresQuery, useScoresEventsMutation } = homeApi;
