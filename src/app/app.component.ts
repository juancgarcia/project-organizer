import { Component } from '@angular/core';
import { Link } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  public navLinks: Link[] = [
    { text: 'Home', url: '/'},
    { text: 'Edit the list', url: '/edit'},
  ];
}
