import { Scraper } from "../models/get-scraper.interface";

export const Scrapers: Scraper[] = [
    {
        // Link
        text: 'Github', url: 'github',
        // Scraper Parts
        scraper_name: 'github',
        scrape_url: 'https://api.github.com/users/:username/repos',
        profileParam: ':username',
        mapping: jsonData => ({
            text: jsonData.name,
            url: jsonData.html_url
        })
    },
    
    // {
    //     // Link
    //     text: 'Thingiverse', url: 'thingiverse',
    //     // Scraper Parts
    //     scraper_name: 'thingiverse',
    //     scrape_url: '',
    //     profileParam: '',
    //     mapping: jsonData => ({
    //         text: jsonData.name,
    //         url: jsonData.html_url
    //     })
    // },

    // {
    //     // Link
    //     text: 'Hackaday', url: 'hackaday',
    //     // Scraper Parts
    //     scraper_name: 'hackaday',
    //     scrape_url: '',
    //     profileParam: '',
    //     mapping: jsonData => ({
    //         text: jsonData.name,
    //         url: jsonData.html_url
    //     })
    // },

    // {
    //     // Link
    //     text: 'Youtube', url: 'youtube',
    //     // Scraper Parts
    //     scraper_name: 'youtube',
    //     scrape_url: '',
    //     profileParam: '',
    //     mapping: jsonData => ({
    //         text: jsonData.name,
    //         url: jsonData.html_url
    //     })
    // },
];