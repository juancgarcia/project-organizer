import { Link } from "../../models/link.interface";

export interface Scraper extends Link {
    scrape_url: string;
    profileParam: string;
    scraper_name: string;
    mapping: (value) => Link;
}
