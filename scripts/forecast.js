class Forecast{
    constructor(){
        this.key = 'o54Wa8hIq3F27FvkIBCTzH59AoqJOoBA';
        this.weatherURI = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);
    
        // return {
        //     cityDetails: cityDetails,
        //     weather: weather
        // };
    
        //object shorthand notation - another way to write objects with key pair value
        return { cityDetails, weather };
    }
    // get city information
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
    
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
    
        return data[0];
    }
    //get weather information
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
    
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
    
        return data[0];
    }
}

