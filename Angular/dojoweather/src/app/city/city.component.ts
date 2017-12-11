import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city = ""
  weather = {}
  temp = 0
  temp_max = 0
  temp_min = 0

  constructor(private _route: ActivatedRoute, private _weatherservice: WeatherService) {
    this._route.paramMap.subscribe(params => {
      console.log(params.get('city'));
      if(params.get('city') == 'san+jose'){
        this.city = 'SAN JOSE'
      } else {
        this.city = params.get('city').toUpperCase();
      }
      this._weatherservice.findCity(this.city)
        .then(data => this.weather = this.calculateWeather(data))
        .catch(err => console.log(err))
    })
  }

  calculateWeather(weather){
    console.log("------------------------------------------------")
    console.log(this.weather)
    let temp = weather.main.temp * (9/5) - 459.67;
    let temp_min = weather.main.temp_min * (9/5) - 459.67;
    let temp_max = weather.main.temp_max * (9/5) - 459.67;
    let humidity = weather.main.humidity
    let desc = weather.weather[0].description
    return {temp: temp, temp_min: temp_min, temp_max: temp_max, humidity: humidity, desc: desc}
  }

  ngOnInit() {
  }

}
