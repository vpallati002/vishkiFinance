import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'f-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  msg = 'backend not working';
  constructor(
    private homeService: HomeService
  ) {
  }


  ngOnInit() {
    this.homeService.getUsers().subscribe(d => {
      this.msg = d.id;
    });
  }

}
