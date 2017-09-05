import { Component, OnInit, Input } from '@angular/core';

import { Trip } from './../../models/trip';

@Component({
  selector: 'app-trip-item',
  templateUrl: './trip-item.component.html',
  styleUrls: ['./trip-item.component.css']
})
export class TripItemComponent implements OnInit {

  constructor() { }

  @Input() trip: Trip;

  ngOnInit() {

  }

}
