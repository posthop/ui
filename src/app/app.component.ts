import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {animate, query, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('myAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [style({opacity: 0})],
          {optional: true}
        ),
        query(
          ':leave',
          [style({opacity: 1}), animate('0.3s', style({opacity: 0}))],
          {optional: true}
        ),
        query(
          ':enter',
          [style({opacity: 0}), animate('0.3s', style({opacity: 1}))],
          {optional: true}
        )
      ])
    ])
  ]// register the animations
})
export class AppComponent {
  selected: string = null;

  constructor(
    router: Router
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/') {
          this.selected = null;
        } else if (event.url.startsWith("/ship")) {
          this.selected = 'ship';
        } else if (event.url.startsWith("/retrieve")) {
          this.selected = 'retrieve';
        }
        console.log(event);
      }
    });
  }

  isCollapsed(button: string) {
    if (this.selected === null) {
      return false;
    }
    return this.selected !== button;
  }
}
