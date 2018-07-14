import { Component, OnInit } from '@angular/core';
import { Link } from '../../components/nav/nav.component';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private links: Link[] = [
    { text: 'Project A', url: 'hackaday.io/something'},
    { text: 'Code Snippet Q', url: 'github.com/me/stuff'},
    { text: 'Circuit Diagram L', url: 'idk.org/profile/dia'},
    { text: '3D Model S', url: 'thingiverse.com/me/thing'},
    { text: 'Video Tutorial P', url: 'youtube.com/watch?v=hash' },
  ];
  private faEllipsisV = faEllipsisV;
  constructor() { }

  ngOnInit() {
  }

}
