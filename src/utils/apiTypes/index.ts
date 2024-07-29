export interface IResponseScores {
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
  environmental_scores: [
    {
      id: number;
      points: string;
      vehicle_emissions: number;
      fuel_consumption: number;
      noise_pollution: number;
      air_quality_index: number;
      driving_conditions: number;
      fire_detection: number;
    }
  ];
}

export interface IResponseCars {
  total_cars: number;
  hourly_counts: {
    chart1: number;
    chart2: number;
    chart3: number;
    chart4: number;
    chart5: number;
    chart6: number;
    chart7: number;
    chart8: number;
    chart9: number;
    chart10: number;
    chart11: number;
  };
}

export interface IRequestClassificationChart {
  id: number;
  part: number;
  classification: string;
}

export interface IResponseClassificationChart extends IResponseCars {}

export interface IUserResponse {
  email: string;
  id: number;
  is_staff: boolean;
}

export interface IResponseMarkers {
  id: string;
  lat: number;
  lng: number;
}
