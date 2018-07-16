import { Component, OnInit } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV'
import { ActivatedRoute } from '@angular/router';
import { ScraperService } from '../../services/scraper.service';
import { ISubscription } from 'rxjs/Subscription';
import { Link } from '../../../models/link.interface';

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

  private service: string;
  private profile: string;

  private scraperService: ScraperService;
  private currentScraper: ISubscription;

  private faEllipsisV = faEllipsisV;

  constructor(route: ActivatedRoute, scraper: ScraperService) {
    this.scraperService = scraper;

    route.paramMap.subscribe(params => {
      this.setScraper(params.get('service'), params.get('profile'));
    });
  }

  ngOnInit() {

  }

  public quitScraper() {
    if(this.currentScraper){
      this.currentScraper.unsubscribe();
    }
  }

  public setScraper(service: string, profile: string) {
    this.quitScraper();

    if (service && profile) {
      this.service = service;
      this.profile = profile;

      console.log('URL Params:', {
        service,
        profile
      });

      this.currentScraper = this.scraperService
        .getScraper(service, profile)
        .subscribe(items => {
          this.links = items;
        });
    }
    
  }

}
