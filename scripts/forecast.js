// API_KEY is located in https://developer.accuweather.com/user/me/apps

class Forecast {
  constructor() {
    this.key = API_KEY;
    this.weatherURI =
      "https://dataservice.accuweather.com/currentconditions/v1/";
    this.cityURI =
      "https://dataservice.accuweather.com/locations/v1/cities/search";
  }
  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityURI + query);
    const data = await response.json();
    return data[0];
  }
  async getWeather(id) {
    const query = `${id}?apikey=${this.key}`;
    const response = await fetch(this.weatherURI + query);
    const data = await response.json();
    return data[0];
  }
  async updateCity(city) {
    const cityDetails = await this.getCity(city);
    const weather = await this.getWeather(cityDetails.Key);
    return { cityDetails, weather };
  }
}
