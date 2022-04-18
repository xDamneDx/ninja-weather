// get city information:
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${API_KEY}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

// get weather information:
const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${API_KEY}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

getCity("mykolaiv")
  .then((data) => getWeather(data.Key))
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
