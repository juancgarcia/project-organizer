import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../../models/link.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() public links: Link[];

  constructor() { }

  ngOnInit() {
  }

}
