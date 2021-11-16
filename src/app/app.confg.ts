export const appConfig = {
  defaultUnit: 'metric',
  defaultCity: {
    name: 'Kyiv',
    coord: {
      latitude: 50.481736,
      longitude: 30.475642
    }
  }
};

export const apiConfig = {
  host: 'https://api.openweathermap.org/data/2.5',
  appId: 'bc28711e08965454f620a395b6920ad7',
  measurementUnits: {
    metric: {
      temperature: 'C',
      windSpeed: 'm/s',
      pressure: 'mmHg'
    },
    imperial: {
      temperature: 'F',
      windSpeed: 'mil/h',
      pressure: 'hPa'
    }
  },
  amountForecastDays: 16,
  updateInterval: {
    forecast: 300000, // 5 minutes
    weather: 300000 // 5 minutes
  }
};
