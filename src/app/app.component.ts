import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selected: string = null;

  isCollapsed(button: string) {
    if (this.selected === null) {
      return false;
    }
    return this.selected !== button;
  }
}
