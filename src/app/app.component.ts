import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme: string = "light";
  pos: string = "";
  goLight() {
    this.theme = "light";
    return (this.pos = "switcher--light");
  }
  goDark() {
    this.theme = "dark";
    return (this.pos = "switcher--dark");
  }
}
