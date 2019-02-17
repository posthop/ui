import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-retrieve',
  templateUrl: '../retrieve/retrieve.component.html',
  styleUrls: ['../retrieve/retrieve.component.scss']
})
export class RetrieveComponent implements OnInit {

  constructor(
      private router: Router,) {
  }

  ngOnInit(): void {
  }
}