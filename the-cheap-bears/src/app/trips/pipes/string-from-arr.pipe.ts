import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringFromArr'
})
export class StringFromArrPipe implements PipeTransform {
  transform(passengers: any[]): any {
    return passengers.map(o => o.username).join(' ');
  }
}
