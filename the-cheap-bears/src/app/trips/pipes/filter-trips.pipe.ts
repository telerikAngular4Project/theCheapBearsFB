import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTrips'
})
export class FilterTripsPipe implements PipeTransform {
  transform(trips: any, filters: any): any {
    if (filters.fromCityF) {
      trips = trips.filter(trip => {
        return trip.fromCity.toLocaleLowerCase().includes(filters.fromCityF.toLocaleLowerCase());
      });
    }

    if (filters.toCityF) {
      trips = trips.filter(trip => {
        return trip.toCity.toLocaleLowerCase().includes(filters.toCityF.toLocaleLowerCase());
      });
    }

    if (filters.depDateF) {
      trips = trips.filter(trip => {
        return trip.date.includes(filters.depDateF);
      });
    }

    if (filters.priceF) {
      trips = trips.filter(trip => {
        return trip.price <= filters.priceF;
      });
    }
    return trips;
  }
}
