import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  WeatherData:any;
  constructor(private router:Router) { 

    
  }

  ngOnInit(): void {
    this.WeatherData = {
      main : {},
      isDay: true
    };
      this.getWeatherData();
      console.log(this.WeatherData);
      
  }

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?id=3868121&appid=6498fa78c05750bc808d792c7084796d')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})


    //let data = JSON.parse('{"coord":{"lon":-71.5518,"lat":-33.0246},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"base":"stations","main":{"temp":289.65,"feels_like":289.39,"temp_min":289.19,"temp_max":289.99,"pressure":1018,"humidity":78},"visibility":10000,"wind":{"speed":2.57,"deg":330},"clouds":{"all":90},"dt":1639184041,"sys":{"type":2,"id":2034956,"country":"CL","sunrise":1639128653,"sunset":1639180059},"timezone":-10800,"id":3868121,"name":"Viña del Mar","cod":200}')
    //this.setWeatherData(data);
  }

  setWeatherData(data:any){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);

  }


onClick(){
    
      this.router.navigate(['/carrito'])
      
   
    
    }


  
}
