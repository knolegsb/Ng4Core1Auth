import { Component, OnInit } from '@angular/core';
import { HomeDetails } from '../models/home.details';

import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeDetails: HomeDetails;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getHomeDetails()
      .subscribe((homeDetails: HomeDetails) => {
        this.homeDetails = homeDetails;
      },
      error => {
        // this.notificationService.printErrorMessage(error);
      }
    )
  }
}
