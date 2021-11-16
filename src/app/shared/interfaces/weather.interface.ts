export interface IWeather {
  base?: string;
  clouds?: any;
  cod?: number;
  coord?: ICoord[];
  dt?: number;
  id?: number;
  main?: any;
  name: string;
  sys?: ISys;
  timezone?: number;
  visibility?: number;
  weather?: Array<any>;
  wind?: IWind[];
}

interface ICoord {
  lat: number;
  lon: number;
}

interface IWind {
  deg: number;
  gust: number;
  speed: number;
}

interface ISys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}
