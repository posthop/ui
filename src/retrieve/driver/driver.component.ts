import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Driver} from "../../services/driver.model";

@Component({
  selector: 'driver-info',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  driver: Driver = null;

  constructor(
    private api: ApiService
  ) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.api.getRandomDriver().subscribe(user => {
        this.driver = user;
      });
    }, 3000);
  }

}
