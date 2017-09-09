import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { UserCarService } from './../shared/user-car.service';
import { DataService } from './../../shared/services/data.service';
import { AuthService } from './../../shared/services/auth.service';

import { Car } from './../../models/car';

@Component({
    selector: 'app-user-car',
    templateUrl: './user-car.component.html',
    styleUrls: ['./user-car.component.css']
})
export class UserCarComponent implements OnInit {

    carMakes: any;
    carList: any;
    makeModels: any;
    carForm: FormGroup;
    show = false;
    years: number[];
    car: Car;
    userId: string;

    constructor(
        private fb: FormBuilder,
        private carService: UserCarService,
        private dataService: DataService,
        private authService: AuthService,
    ) { }

    ngOnInit() {
        this.userId = this.authService.getCurrentUserId();
        this.createForms();
        this.carForm.controls['model'].disable();
        this.carService.getCarMakes().subscribe((makes) => {
            this.carMakes = makes;
        });
        this.carList = this.dataService.getCollection(`users/${this.userId}/cars`);
        this.years = this.carService.getYears();
    }

    createForms() {
        this.carForm = this.fb.group({
            make: ['', Validators.required],
            model: ['', Validators.required],
            year: ['', Validators.required],
        });
    }

    getMakeModels(make) {
        this.carForm.controls['model'].disable();
        this.carService.getMakeModels(make).subscribe((models) => {
            this.makeModels = models;
            this.carForm.controls['model'].enable();
        });
    }

    showForm() {
        this.show = true;
    }
    hideForm() {
        this.show = false;
    }

    get make(): any { return this.carForm.get('make'); }
    get model(): any { return this.carForm.get('model'); }
    get year(): any { return this.carForm.get('year'); }

    updateCarData() {
        const data = this.carForm.value;
        this.car = new Car();
        this.car.make = data.make;
        this.car.model = data.model;
        this.car.year = data.year;
        this.dataService.pushNewItem(`users/${this.userId}/cars`, this.car)
        .then(() => {
            this.show = false;
        })
        .catch((err) => {
            console.log(err);
        });
    }

    removeCar(key) {
        this.dataService.removeItem(`users/${this.userId}/cars`, key)
        .then(() => {
            console.log('success');
        })
        .catch((err) => {
            console.log(err);
        });
    }
}
