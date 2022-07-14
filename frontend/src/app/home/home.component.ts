import { Component, OnInit } from '@angular/core';
import { LookupService } from '../shared/services/lookup.service';
import { HomeService } from './home.service';

@Component({
  selector: 'f-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  msg = 'backend not working';
  constructor(
    private homeService: HomeService,
    private lookupService: LookupService
  ) {
  }

  async ngOnInit() {
    this.homeService.getUsers().subscribe(
      result => {
        // Handle result
        console.log(result)
        this.msg = JSON.stringify(result);
      },
      error => {
      },
      () => {
        // No errors, route to new page
      }
    );


    await this.lookupService.populateLookupData();
    console.log(this.lookupService.lookups);
  }

}
