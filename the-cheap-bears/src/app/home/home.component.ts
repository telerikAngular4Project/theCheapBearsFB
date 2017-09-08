import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from './../shared/services/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    tripsList: any;
    show = false;
    constructor(
        private route: ActivatedRoute,
        private dataService: DataService,
    ) { }

    ngOnInit() {
        this.dataService.getCollection('trips')
            .subscribe((data) => {
                this.tripsList = data;
                this.tripsList = this.tripsList
                    .sort((a, b) => (a.createdOn < b.createdOn) ? 1 : ((a.createdOn > b.createdOn) ? -1 : 0))
                    .slice(0, 10);
                    this.show = false;
            });
    }
}
