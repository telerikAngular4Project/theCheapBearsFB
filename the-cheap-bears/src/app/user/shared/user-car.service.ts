import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { DataService } from './../../shared/services/data.service';
import { AuthService } from './../../shared/services/auth.service';

import { Car } from './../../models/car';

@Injectable()
export class UserCarService {

    car: Car;

    constructor(
        private http: Http,
        private _authService: AuthService,
        private dataService: DataService
    ) { }

    getCarMakes() {
        const carMakesUrl = './../../../assets/cars/makes.json';
        return this.http.get(carMakesUrl)
            .map((response: Response) =>
                response.json());
    }

    getMakeModels(make) {
        const carModelsUrl = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${make}/vehicleType/car?format=json`;
        return this.http.get(carModelsUrl)
            .map((response: Response) =>
                response.json());
    }

    getYears() {
        const years = [];
        for (let i = 1945; i <= 2017 ; i++) {
            years.push(i);
        }
        return years.reverse();
    }

}
