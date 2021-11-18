export interface IMeasureUnit {
  temperature: string,
  windSpeed: string,
  pressure: string
}

export interface IMeasureArr {
  [key: string]: IMeasureUnit;
  plotOptions: IMeasureUnit;
}
