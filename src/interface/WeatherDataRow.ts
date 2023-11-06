interface WeatherDataRow {
      dt: number;
      dt_txt: string;
      weather: [
        {
          main: string;
          description: string;
          icon: string
        }
      ];
      main: {
        temp: number;
        temp_min: number;
        temp_max: number;
        feels_like: number;
        humidity: number;
        pressure: number;
      };
      wind: {
        speed: number;
      };
      visibility: 120
    };

export default WeatherDataRow;