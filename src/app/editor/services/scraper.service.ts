import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of'
import { GithubRepo } from '../models/github-repo.interface';
import { Link } from '../../models/link.interface';
import { Scrapers } from '../config/scrapers.json';
import { Scraper } from '../models/get-scraper.interface';

@Injectable()
export class ScraperService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getScraper(serviceName: string, profilePart: string): Observable<Link[]> {
    const scraper: Scraper = this.findScraper(serviceName);
    if (scraper) {
      return this.buildService(scraper, profilePart);
    } else {
      console.log('Unknown Project Service');
      return Observable.of([]);
    }
  }

  private findScraper(serviceName: string): Scraper {
    return Scrapers.find( (scraperDef, idx, arr) =>
      (scraperDef.scraper_name === serviceName));
  }

  private buildService(def: Scraper, profile: string) {
    const serviceUrl = def.scrape_url.replace(def.profileParam, profile);

    return this.http.get<any[]>(serviceUrl)
      .map(jsonData => {
        return jsonData.map(def.mapping);
      });
  }

}
