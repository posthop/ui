import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-ship',
  templateUrl: '../ship/ship.component.html',
  styleUrls: ['../ship/ship.component.scss']
})
export class ShipComponent implements OnInit {

  constructor(
      private router: Router,) {
  }

  ngOnInit(): void {
  }
}