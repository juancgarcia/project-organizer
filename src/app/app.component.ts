import { Component } from '@angular/core';
import { Link } from './models/link.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  public navLinks: Link[] = [
    { text: 'Home', url: '/'},
    { text: 'Services', url: '/edit/services'},
  ];
}
