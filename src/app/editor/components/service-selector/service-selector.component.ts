import { Component, OnInit } from '@angular/core';
import { RouteParts } from '../../config/routing.json';
import { Scrapers } from '../../config/scrapers.json';
import { Scraper } from '../../models/get-scraper.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-service-selector',
  templateUrl: './service-selector.component.html',
  styleUrls: ['./service-selector.component.scss']
})
export class ServiceSelectorComponent implements OnInit {
  private route: ActivatedRoute;
  private router: Router;

  private services: Scraper[] = Scrapers;

  private profile: string = '';
  private baseRoute: string = RouteParts.base;

  constructor(route: ActivatedRoute, router: Router) {
    this.route = route;
    this.router = router;

    this.route.paramMap.subscribe(params => {
      const profile = params.get('profile');
      if (!profile) {
        this.profile = '';
        this.updateProfile('');
      } else {
        this.profile = profile;
      }
    });
  }

  ngOnInit() {
  }

  updateProfile(updatedProfile: string){
    this.profile = updatedProfile;
    this.router.navigate(['/', this.baseRoute, 'services', this.profile]);
  }

}
